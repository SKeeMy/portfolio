import Plot from "react-plotly.js"
import { useTranslation } from 'react-i18next';

const ScatterPlot = ({ data }) => {
    const { t } = useTranslation()
    return (
        <Plot
            data={[
                {
                    type: "scatter",
                    x: data["Timestamps"],
                    y: data["Events"],
                    line: {
                        color: "aqua"
                    },
                    hovertemplate: `${t("Time")}: %{x}<br>${t("Events")}: %{y}<extra></extra>`,
                },
            ]}
            layout={{
                width: 1125,
                height: 340,
                title: {
                    text: t("Events by hours"),
                    font: {
                        color: "white",
                    }
                },
                showlegend: false,
                paper_bgcolor: "111111",
                plot_bgcolor: "111111",
                xaxis: {
                    visible: true,
                    color: "white",
                    gridcolor: "555555",
                },
                yaxis: {
                    color: "white",
                    gridcolor: "555555",
                }
            }}
            config={{ displayModeBar: false }}
        />
    )
}

export default ScatterPlot;