<template>
    <div>
        <div class="card">
            <div class="">
                <h4 class="h4 p-3 text-white">Temperatura</h4>
            </div>
            <div class="card-body">
                <apexchart width="100%" height="400px" type="area" :options="chartOptions" :series="series"></apexchart>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "Temperature",
        data(){
            return {
                chartOptions: {
                    xaxis: {
                        categories: [],
                        labels:{
                            style: {
                                colors: '#fff',
                            }
                        }
,
                    },
                    yaxis: {
                        tickAmount: 5,
                        min: 15,
                        max: 20,
                        labels:{
                            style: {
                                color: '#fff',
                            }
                        }
                    },
                    legend:{
                        labels: {
                            color: 'white'
                        },
                    }
                },
                series: [{
                    data: [15.3,15.9,18.24,17.9,16.4,18.4,19.2,15.4,18.3,19.3]
                }]
            }
        }
    }
</script>

<style scoped>

</style>