<template>
    <div id="client">
        <h1>Client id: {{ $route.params.id }}</h1>
    <router-link to="/clients">
    <button>Come back</button></router-link> 
    </div>
</template>
<script>
export default {
    name: 'Client'
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