<template>
    <div>
        <div class="card">
            <div class="">
                <h4 class="h4 p-3 text-white">Volumen</h4>
            </div>
            <div class="card-body">
                <apexchart width="100%" height="400px" type="bar" :options="chartOptions" :series="series"></apexchart>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "Volume",
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
                    },
                    yaxis: {
                        tickAmount: 5,
                        min: -100,
                        max: 100,
                        labels:{
                            style: {
                                color: '#fff',
                            }
                        }
                    }
                },
                series: [{
                    data: [-10,0,12,60,89,20,47,33,-4,8]
                }]
            }
        }
    }
</script>

<style scoped>

</style>