<template>
  <div class="shop">
    <div id="shop-page" v-if="!currentComponent">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>This is shop page</h1>
   </div>
      <keep-alive>
    <component :is="currentComponent"></component>
    </keep-alive>

    </div>
</template>

<script>
  import Food from '../components/Food'
import Drinks from '../components/Drinks'
import {bus} from '../main'
export default {
   components:{
       Food,
      Drinks  
  },
   data () {
    return {
       currentComponent: '' 
    }
},
created () {
  bus.$on("changeToFood", (data) => {
    this.currentComponent = data;
  }),
  bus.$on("changeToDrinks", (data) => {
  this.currentComponent = data;
}),
 bus.$on("changeToShop", (data) => {
  this.currentComponent = data;
})
}
}
</script>