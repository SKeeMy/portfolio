import BarPlot from "./BarPlot";
import PiePlot from "./PiePlot";
import ScatterPlot from "./ScatterPlot";
import animations from "../../../Animations.module.css"
import { useEffect, useState } from "react";
import * as netutils from "../../../utils/net"
import { API_MON } from "../../../constants/api";
import { useTranslation } from "react-i18next";

function Monitoring() {
    const { t } = useTranslation()
    const [data, setData] = useState(null)
    useEffect(() => {
        (async () => {
            let res = await netutils.GET(API_MON)
            console.log(res)
            setData(res)
        })()
    }, [])

    if (data && Object.keys(data.EventsByName).length !== 0) {
        return (
            <div className={animations["appear"]}>
                <ScatterPlot data={data["EventsByTime"]} />
                <div style={{ display: "flex", alignItems: "center" }}>
                    <BarPlot data={data["EventsByTop5Countries"]} name="Events by country" />
                    <PiePlot data={data["EventsSeverity"]} />
                    <BarPlot data={data["EventsByName"]} name="Events by name" />
                </div>
            </div>
        )
    }

    return (
        <div className={animations["appear"]}>
            <div style={{marginTop: "20px", fontSize: "25px"}}>
                {t("No events yet")}
            </div>
        </div>
    )
}

export default Monitoring;