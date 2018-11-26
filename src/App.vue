<template>
  <div id="app">
    <Dashboard class="m-5 p-5"></Dashboard>
  </div>
</template>

<script>
import Dashboard from './components/Dashboard';
export default {
  name: 'app',
  components: {
      Dashboard
  }
}
</script>

<style>
  body{
      background-color: #2c323e !important;
      color: white;
  }
    .card{
        background-color: #3c4c66 !important;
        border-color: white !important;
    }
    .card-title{
        color: white;
    }
    hr{
     background-color: white;
    }
</style>
