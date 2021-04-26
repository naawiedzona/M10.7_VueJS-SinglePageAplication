<template>
  <div class="clients">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>This is clients page</h1>
    <router-link :to="{name:'Clients' , params: {id : client}}" 
    v-for="(client, index) of clients" :key="index">
      <button class="btn-client">{{client}}</button>
    </router-link>
    <Client></Client>
    
  </div>
</template>
<script>
import Client from '@/components/Client.vue'
export default {
  components: {
    Client
  }  ,
  data () {
    return {
      clients: ['client1' , 'client2' , 'client3' , 'client4' , 'client5']
    }
  }
}
</script>
<style scoped>
.btn-client{
  padding: 10px;
  margin: 20px;
}
</style>