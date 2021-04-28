<template>
    <div id="client">
        <h1>Client: {{ $route.params.id }}</h1>
    <router-link to="/">
    <button class="btn-client">Home page</button>
    </router-link> 
    <button class="btn-client" @click="prev">Previous</button>
    <button class="btn-client" @click="next">Next</button>
    </div>
</template>
<script>
export default {
    name: 'Client',
    methods:{
        prev() {
            this.$router.go(-1);
        },
        next() {
            this.$router.go(1)
        }
    }
}
</script>
<style scoped>
#client{
    margin: 0 auto;
    width: 70%;
    border: 1px solid #41B883;
    padding: 15px;
}
.btn-client{
  padding: 10px;
  margin: 20px;
  color:#41B883;
  border: 2px solid #41B883;
}
.btn-client:hover {
    opacity: 0.7;
}
</style>