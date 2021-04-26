<template>
    <div id="client">
        <h1>Client: {{ $route.params.id }}</h1>
    <router-link to="/">
    <button class="btn">Home page</button>
    </router-link> 
    <button class="btn" @click="prev">Previous client</button>
    <button class="btn" @click="next">Next client</button>
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
    border: 1px solid black;
    padding: 15px;
}
.btn{
    padding: 10px;
    margin: 5px;
}
</style>