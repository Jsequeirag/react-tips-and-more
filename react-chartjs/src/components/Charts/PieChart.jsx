import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title, SubTitle } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Pie, Doughnut } from 'react-chartjs-2';
ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels, Title, SubTitle);
export default function PieChart({ doughnutStyle, chartData, labels, title, subtitle }) {


    return (
        doughnutStyle
            ?
            <Doughnut data={data(chartData, labels)} options={options(title, subtitle)} />
            :
            <Pie data={data(chartData, labels)} options={options(title, subtitle)} />
    )
}
export const data = (chartData, labels) => {
    const defaultColors = ["#e60049", "#0bb4ff", "#50e991", "#e6d800", "#9b19f5", "#ffa300", "#dc0ab4", "#b3d4ff", "#00bfa0", "#b30000", "#7c1158", "#4421af", "#1a53ff", "#0d88e6", "#00b7c7", "#5ad45a", "#8be04e", "#ebdc78", "#ffb400", "#d2980d", "#a57c1b", "#786028", "#363445", "#48446e", "#5e569b", "#776bcd", "#9080ff"]
    return {
        labels,
        datasets: [
            {
                datalabels: {
                    color: 'white',
                    font: { size: "17px" },
                    textStrokeColor: "black",
                    textStrokeWidth: 3, padding: 8, align: "end"
                },
                label: '# of Votes',
                data: [...chartData],
                backgroundColor: defaultColors,
                borderWidth: 0,
            },
        ]
    }
}

export const options = (title, subtitle) => ({
    responsive: true,
    plugins: {//plugin para que muetre el número en las barras
        datalabels: {
            color: 'black',
            padding: 5
        },
        legend: {
            position: 'right',
            labels: {
                font: {
                    size: 12
                }
            }
        },
        title: {
            display: true,
            text: title,
            font: {
                size: 15,
            },
        },
        subtitle: {
            display: true,
            text: subtitle,
            font: {
                size: 14,
            },
        },
    },
})
