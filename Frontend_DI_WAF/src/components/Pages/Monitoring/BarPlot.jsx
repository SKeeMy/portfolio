import Plot from "react-plotly.js"
import { useTranslation } from 'react-i18next';

const BarPlot = ({ data, name }) => {
    const { t } = useTranslation()
    return (
        <Plot
            data={[
                {
                    type: "bar",
                    x: Object.keys(data).map(x => t(x)),
                    y: Object.values(data),
                    textinfo: "none",
                    marker: {
                        color: "aqua"
                    },
                    hovertemplate: `${t("Name")}: %{x}<br>${t("Events")}: %{y}<extra></extra>`
                },
            ]}
            layout={{
                width: 375,
                height: 340,
                title: {
                    text: t(name),
                    font: {
                        color: "white"
                    }
                },
                paper_bgcolor: "111111",
                plot_bgcolor: "111111",
                showlegend: false,
                xaxis: {
                    visible: false,
                },
                yaxis: {
                    color: "white",
                    zeroline: false,
                    gridcolor: "555555",
                },
                bargap: 0.01,
            }}
            config={{ displayModeBar: false }}
        />
    )
}

export default BarPlot;