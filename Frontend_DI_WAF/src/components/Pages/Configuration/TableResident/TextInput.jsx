import styles from "./Inputs.module.css"
import { useTranslation } from 'react-i18next';

const TextInput = ({ name, value, setParentData }) => {
    const handleChange = (e) => {
        setParentData((prevState) => {
            return {
                ...prevState,
                [name]: e.target.value,
            };
        });
    }

    const { t } = useTranslation()
    return (
        <div className={styles["container"]}>
            <label className={styles["label"]}>
                {t(name)}
            </label>
            <input title="hello" className={styles["text_input"]} type="text" value={value} onChange={handleChange} />
        </div>
    )
}

export default TextInput;