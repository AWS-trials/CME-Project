<template>
    <Bar
        :chart-options="chartOptions"
        :chart-data="chartData"
        :chart-id="chartId"
        :dataset-id-key="datasetIdKey"
        :plugins="plugins"
        :css-classes="cssClasses"
        :styles="styles"
        :width="width"
        :height="height"
    />
</template>

<script>
    import { Bar } from 'vue-chartjs'
    import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

    ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

    export default {
        name: 'BarChart',
        components: { Bar },
        data() {
            return {
            chartData: {
                labels: [ 'January', 'February', 'March' ],
                datasets: [ { 
                    data: [600, 1300, 1000],
                    label: "Deliveries on time",
                    backgroundColor: "rgb(59 130 246/0.5)" 
                } ]
            },
            chartOptions: {
                responsive: true,
            }
            }
        }
    }
</script>