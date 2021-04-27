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
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#"><router-link to="/">Home</router-link></a>
        </li>


        <li class="nav-item">
          <a class="nav-link" href="#"><router-link to="/clients">Clients</router-link></a>
        </li>


        
        <li class="nav-item">
          <a class="nav-link" href="#"><router-link to="/providers">Providers</router-link></a>
        </li>


        
        <li class="nav-item">
          <a class="nav-link" href="#"><router-link to="/magazine">Magazine</router-link></a>
        </li>


        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <router-link to="/shop">Shop</router-link>
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
          </ul>
        </li>
      </ul>
     
    </div>
  </div>
</nav>
    </div>
    <router-view/>
  </div>














  
</template>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  margin: 0 auto;
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

</style>
