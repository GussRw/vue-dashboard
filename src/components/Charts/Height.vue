<template>
    <div>
        <div class="card">
            <div class="">
                <h4 class="h4 p-3 text-white">Altura</h4>
            </div>
            <div class="card-body">
                <apexchart width="100%" height="400px" type="area"  :options="chartOptions" :series="series"></apexchart>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "Height",
        data(){
          return {
              chartOptions: {
                  height: 400,
                  xaxis: {
                      categories: [],
                      labels:{
                          style: {
                              colors: '#fff',
                          }
                      }
                  },
                  yaxis: {
                      labels:{
                          style: {
                              color: '#fff',
                          }
                      }
                  }
              },
              series: [{
                  data: [1.23,4.23,5.67,3.23,0.45,9.23,5.23,7.24,1]
              }]
          }
        },
        props: {
            data: Array,
            labels: Array
        }
    }
</script>

<style scoped>

</style>