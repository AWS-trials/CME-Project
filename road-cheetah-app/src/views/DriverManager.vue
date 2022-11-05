<template>
  <div class="container">
      <div class="row">
        <div class="col">
          <div class="card my-5 shadow">
            <div class="card-body">
              <h2 id="name"><b>Hi, John!</b></h2>
              <h5><b>Zone in-charge of: </b>East</h5>
              <h5><b>Total Number of Deliveries today: </b>2,000</h5>
              <h5><b>Employees working today: </b>100</h5>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-7">
          <div class="card shadow">
            <div class="card-body">
              <h5><b>DELIVERY METRICS (DAILY)</b></h5>
              <!-- <DailyDeliveries></DailyDeliveries> -->
            </div>
          </div>
        </div>

        <div class="col-5">
          <div class="card shadow">
            <div class="card-body">
              <h5><b>DELIVERY METRICS (MONTHLY)</b></h5>
              <div class="my-3">
                <PunctualDeliveries></PunctualDeliveries>
              </div>
              <div class="my-5">
                <LateDeliveries></LateDeliveries>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>
<script setup>
  import LateDeliveries from "@/components/Charts/LateDeliveries.vue";
  import PunctualDeliveries from "@/components/Charts/PunctualDeliveries.vue";
  import DailyDeliveries from "@/components/Charts/DailyDeliveries.vue";
</script>
<script>
  export default{
    methods:{
    },
  }
</script>
<style scoped>
    .card-body{
      text-align: left;
    }
    
    #name{
        color: #696CFF;
    }

    #zone{
        font-size: larger;
        font-weight: 500;
        color: rgb(107 114 128);
    }
</style>