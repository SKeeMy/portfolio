import { useTranslation } from 'react-i18next';
import '../../../../utils/i18next'
import { useState, useEffect } from 'react';
import * as netutils from '../../../../utils/net';
import ConfigEntries from './Entries';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from "./Table.module.css"
import animations from "../../../../Animations.module.css"

function ConfigTable({ apiEndpoint }) {
    const [data, setData] = useState([]);

    useEffect(() => {
        (async () => {
            const res = await netutils.GET(apiEndpoint)
            const list = res.map((el) => {
                return {
                    name: el["Name"],
                    id: el["ID"]
                }
            });
            setData(list);
        })()
    }, [apiEndpoint]);

    const handleCreate = async () => {
        await netutils.POST(apiEndpoint)
        window.location.reload();
    }

    const { t } = useTranslation();
    return (
        <div key={apiEndpoint} className={animations["appear"]}>
            <table className={styles["table"]}>
                <thead>
                    <th>{t("Name")}</th>
                    <th>ID</th>
                    <th />
                </thead>
                <tbody>
                    {data && <ConfigEntries data={data} apiEndpoint={apiEndpoint} />}
                    <tr>
                        <th style={{ textAlign: "center" }} colspan="3">
                            <FontAwesomeIcon className={styles["icon"]} icon={faPlus} onClick={handleCreate} />
                        </th>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default ConfigTable;