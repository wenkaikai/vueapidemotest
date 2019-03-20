import Vue from 'vue'
import firstComponent from './firstComponent'
Vue.config.productionTip = false;
new Vue({
  el:"#app",
  components:{firstComponent},
})

