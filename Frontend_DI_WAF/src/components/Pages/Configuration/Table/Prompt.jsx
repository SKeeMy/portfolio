import * as netutils from "../../../../utils/net"
import styles from "./Table.module.css"
import { useTranslation } from "react-i18next"

function Confirm({ message, apiEndpoint, setPrompt }) {
    const deleteEntry = async () => {
        await netutils.DELETE(apiEndpoint)
        window.location.reload();
    }

    const { t } = useTranslation();
    return (
        <div style=
            {{
                position: "fixed",
                top: "0",
                left: "0",
                right: "0",
                bottom: "0",
                backgroundColor: "rgba(0,0,0,0.5)"
            }}>
            <div style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                background: "#161616",
                padding: "70px 110px 40px 110px",
                border: "1px solid white",
                borderRadius: "20px"
            }}>
                <h3>{t(message)}</h3>
                <div style={{
                    display: "flex",
                    alignItems: "center",
                    color: "white"
                }}>
                    <button className={styles["prompt_btn"]} onClick={deleteEntry}>
                        {t("Yes")}
                    </button>
                    <button className={styles["prompt_btn"]} onClick={() => setPrompt({ "active": false })}>
                        {t("No")}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Confirm;