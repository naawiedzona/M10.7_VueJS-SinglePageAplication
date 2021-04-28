<template>
  <div id="app">
    <div id="nav">
<!--       <router-link to="/">Home</router-link> |
      <router-link to="/clients">Clients</router-link> |
      <router-link to="/providers">Providers</router-link> |
      <router-link to="/magazine">Magazine</router-link> |
      <router-link to="/shop">Shop</router-link> |
      <router-link to="/shop/food">Food</router-link> |
      <router-link to="/shop/drinks">Drinks</router-link> -->
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#"><router-link to="/">Home</router-link></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"><router-link to="/clients/1">Clients</router-link></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"><router-link to="/providers">Providers</router-link></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"><router-link to="/magazine">Magazine</router-link></a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-expanded="false">
            <router-link to="/shop">Shop</router-link>
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" @click="currentComponent = 'Food'"><router-link to="/shop/food">Food</router-link></a></li>
            <li><a class="dropdown-item" @click="currentComponent = 'Drinks'"><router-link to="/shop/drinks">Drinks</router-link></a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
</div>
  <router-view/>
    <keep-alive>
      <component :is="currentComponent"></component>
    </keep-alive>
  </div>

</template>

<script>
 import Food from './components/Food'
import Drinks from './components/Drinks' 
export default {
   components:{
      Food,
      Drinks 
  },
   data () {
    return {
      currentComponent: ''
    }
}
}
</script>
<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

#nav {
  margin: 0 auto;
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  margin-left: 20px;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

</style>
