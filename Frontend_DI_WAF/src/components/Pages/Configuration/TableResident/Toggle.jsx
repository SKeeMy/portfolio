import styles from "./Inputs.module.css"
import { useTranslation } from 'react-i18next';

const Toggle = ({ name, value, setParentData }) => {
    const handleChange = () => {
        setParentData((prevState) => {
            return {
                ...prevState,
                [name]: !value,
            };
        });
    }

    const { t } = useTranslation()
    return (
        <div className={styles["container"]}>
            <label className={styles["label"]}>
                {t(name)}
            </label>
            <input className={styles["toggle"]} type="checkbox" checked={value} onChange={handleChange} />
        </div>
    )
}

export default Toggle;