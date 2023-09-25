import styles from "./Inputs.module.css"
import { useTranslation } from 'react-i18next';

const FileUpload = ({ name, setParentData }) => {
  const handleChange = e => {
    const fileReader = new FileReader();
    fileReader.readAsText(e.target.files[0], "UTF-8");
    fileReader.onload = e => {
      let json = JSON.parse(e.target.result)
      if (!Array.isArray(json)) {
        console.log("invalid file")
        return
      }

      json.forEach(el => {
        if (typeof el !== "string") {
          console.log("invalid file")
          return
        }
      })
      setParentData((prevState) => {
        return {
          ...prevState,
          [name]: json,
        };
      });
    };
  };

  const { t } = useTranslation()
  return (
    <div className={styles["container"]}>
      <label className={styles["label"]}>
        {t(name)}
      </label>
      <input type="file" className={styles["file"]} onChange={handleChange} />
    </div>
  );
}

export default FileUpload;