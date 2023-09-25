import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import InputContainer from "./InputContainer";
import styles from "./Inputs.module.css";
import { useTranslation } from 'react-i18next';

const DropdownList = ({ name, value, setParentData }) => {
    const [active, setActive] = useState(false);
    const [data, setData] = useState(value)

    useEffect(() => {
        setParentData((prevState) => {
            return {
                ...prevState,
                [name]: data,
            };
        });
    }, [data])

    const { t } = useTranslation()
    return (
        <>
            <ul onClick={() => setActive(!active)}
                className={active ? styles["dropdown_active"] : styles["dropdown"]} >
                <li className="drop_down_items">
                    {t(name)}
                    <FontAwesomeIcon className={styles["icon"]} icon={faCaretRight} />
                </li>
            </ul>
            {active &&
                <div className={styles["dropdown_content"]}>
                    <InputContainer data={data} setParentData={setData} />
                </div>
            }
        </>
    )
}

export default DropdownList;