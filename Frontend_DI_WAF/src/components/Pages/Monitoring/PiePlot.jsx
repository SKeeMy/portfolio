import Plot from "react-plotly.js"
import { useTranslation } from 'react-i18next';

const PiePlot = ({ data }) => {
    const { t } = useTranslation()
    return (
        <Plot
            data={[
                {
                    type: "pie",
                    values: data.map(({ Events }) => ( Events )),
                    marker: {
                        colors: ["#005050", "#009090", "#00FFFF"],
                    },
                    labels: data.map(({ Severity }) => ( t(Severity) )),
                    textinfo: "none",
                    hovertemplate: `${t("Severity")}: %{label}<br />` +
                        `${t("Events")}: %{value}<br />` +
                        `%{percent}<extra></extra>`
                },
            ]}
            layout={{
                width: 375,
                height: 340,
                title: {
                    text: t("Events severity"),
                    font: {
                        color: "white"
                    }
                },
                paper_bgcolor: "111111",
                legend: {
                    x: 1.4,
                    xanchor: 'right',
                    font: {
                        color: "white"
                    }
                }
            }}
            config={{ displayModeBar: false }}
        />
    )
}

export default PiePlot;