import React, { useState, useEffect, useRef } from "react";
// import { Chart } from "chart.js";
import { Chart } from "chart.js/auto";

function LineChart({ randVecs }) {
	const chartRef = useRef(null);
	const [chart, setChart] = useState(null);
	console.log(randVecs);

	useEffect(() => {
		if (chart) {
			chart.destroy();
		}
		if (chartRef && chartRef.current && randVecs && randVecs.length > 0) {
			const labels = [];
			const datasets = [];

			randVecs.forEach((vec, index) => {
				const color = getRandomColor();
				const data = vec.map((val, idx) => ({ x: idx, y: val }));

				datasets.push({
					label: `Vector ${index}`,
					data: data,
					borderColor: color,
					backgroundColor: color,
					fill: false,
				});
			});

			const config = {
				type: "line",
				data: {
					labels: labels,
					datasets: datasets,
				},
				options: {
					responsive: true,
					scales: {
						xAxes: [
							{
								scaleLabel: {
									display: true,
									labelString: "Vector Index",
								},
							},
						],
						yAxes: [
							{
								scaleLabel: {
									display: true,
									labelString: "Value",
								},
							},
						],
					},
				},
			};

			const newChart = new Chart(chartRef.current, config);
			setChart(newChart);
		}
	}, [randVecs]);

	function getRandomColor() {
		const letters = "0123456789ABCDEF";
		let color = "#";
		for (let i = 0; i < 6; i++) {
			color += letters[Math.floor(Math.random() * 16)];
		}
		return color;
	}

	return <canvas ref={chartRef}></canvas>;
	// return randVecs && <div>graph</div>;
}

export default LineChart;
