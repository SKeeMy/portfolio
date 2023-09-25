import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import * as netutils from "../../../../utils/net";
import InputContainer from "../TableResident/InputContainer";
import animations from "../../../../Animations.module.css"
import styles from "./Entry.module.css"
import { useTranslation } from 'react-i18next';

// this component is rendered when one of the config entries is clicked
function ConfigEntryContent({ apiEndpoint }) {
    const [data, setData] = useState({})
    const { id } = useParams()

    useEffect(() => {
        (async () => setData(await netutils.GET(apiEndpoint + `/${id}`)))()
    }, [apiEndpoint, id])

    const sendData = async () => {
        await netutils.PUT(apiEndpoint + `/${id}`, data)
    }

    const { t } = useTranslation()
    return (
        <div className={styles["container"]}>
            <div className={animations["appear"]}>
                {data && <InputContainer data={data} setParentData={setData} />}
                <Link to={"./../"}>
                    <button className="saveBtn" onClick={sendData}>
                        {t("Save")}
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default ConfigEntryContent;