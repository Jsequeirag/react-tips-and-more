import React from 'react'

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title, SubTitle,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';

export default function BarChart({ data, labels, horizontal, title, subtitle, labelsYRight, colors = [] }) {

    ChartJS.register(
        CategoryScale,
        LinearScale,
        BarElement,
        Title,
        SubTitle,
        Tooltip,
        Legend,
        ChartDataLabels
    );
    return (
        <Bar options={options(horizontal, title, subtitle, data, labelsYRight)} data={chartData(labels, labelsYRight, data, colors)} />
    )
}

export const chartData = (labels, labelsYRight, data, colors) => {
    const defaultColors = ["lightgreen", "lightblue", "lightorange", "lightyellow", "lightcyan", "lightgray", "lightslategray", "lightsalmon", "lightpink", "blue", "green", "orange", "brown", "red", "pink"]
    const datasets = data.map((value, index) =>
    ({
        datalabels: {
            color: 'white',
            font: { size: "17px" },
            textStrokeColor: "black",
            textStrokeWidth: 3
        },
        label: labelsYRight[index],
        data: [value],
        borderWidth: 0,
        backgroundColor: colors.length > 0 ? colors[index] : defaultColors[index],

    }))

    return {
        labels,
        datasets
    }
}

export const options = (horizontal, title, subtitle, data) => ({
    scales: {//parametro estableme la escala minima y máxima del eje x
        x: {
            min: 0,
            max: horizontal ? (Math.max(...data)) + 0.5 : 0
        },
        y: {
            min: 0,
            max: !horizontal ? (Math.max(...data)) + 0.5 : 0
        },
    },
    indexAxis: horizontal ? 'y' : "x",//establece si es vertcal o horizontal
    elements: {
        bar: {
            borderWidth: 1,
        },
    },
    responsive: true,
    plugins: {//plugin para que muetre el número en las barras
        datalabels: {
            color: 'black',
            padding: 5
        },
        legend: {
            position: 'top',
            labels: {

                font: {
                    size: 14
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
    }
})