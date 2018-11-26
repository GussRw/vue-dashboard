<template>
    <div>
        <div class="row">
            <div class="col-2">
                <div class="card h-100  ">
                    <div class="card-title p-3">
                        <h5>Filtros</h5>
                    </div>
                    <div class="card-body p-2">
                        <div class="card p-1 m-1">
                            <div class="card-title">
                                Fecha
                                <hr>
                                de <input type="date"> <br>
                                a <input type="date">
                            </div>
                        </div>
                        <div class="card p-1 m-1">
                            <div class="card-title">
                                Fecha
                                <hr>
                                de <input type="date"> <br>
                                a <input type="date">
                            </div>
                        </div>
                        <div class="card p-1 m-1">
                            <div class="card-title">
                                Fecha
                                <hr>
                                de <input type="date"> <br>
                                a <input type="date">
                            </div>
                        </div>
                        <div class="card p-1 m-1">
                            <div class="card-title">
                                Fecha
                                <hr>
                                de <input type="date"> <br>
                                a <input type="date">
                            </div>
                        </div>
                        <div class="card p-1 m-1">
                            <div class="card-title">
                                Fecha
                                <hr>
                                de <input type="date"> <br>
                                a <input type="date">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-10">
                <div class="row my-2">
                    <Height class="col-4"></Height>
                    <Temperature class="col-8"></Temperature>
                </div>
                <div class="row">
                    <Volume class="col-12"></Volume>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Height from './Charts/Height.vue'
    import Temperature from './Charts/Temperature.vue'
    import Volume from './Charts/Volume.vue'
    import Firebase from './../firebase';
export default {
        data () {
            return {}
        },
        components:{
                Height,
            Temperature,
            Volume
        },
        mounted(){
                Firebase().then(function(value){
                    console.log(value);
                });
        }

    }
</script>

<style>

</style>