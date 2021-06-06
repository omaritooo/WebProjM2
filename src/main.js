import App from "./App.vue";
import VueTyperPlugin from 'vue-typer'
import VueRouter from 'vue-router'
import * as VueGoogleMaps from 'vue2-google-maps'
import VueLodash from 'vue-lodash'
import lodash from 'lodash'
import './styles/style.css'
import 'hover.css'
import VueScrollProgressBar from '@guillaumebriday/vue-scroll-progress-bar'

import Vue from 'vue'
import VueCompositionAPI from '@vue/composition-api'
import JwPagination from 'jw-vue-pagination';
Vue.component('jw-pagination', JwPagination);
Vue.use(VueLodash, { name: 'custom' , lodash: lodash })

Vue.use(VueCompositionAPI)

Vue.use(VueScrollProgressBar)

Vue.use(VueRouter)
Vue.use(VueTyperPlugin)

Vue.config.productionTip = false;
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyCWoaGpHk_YD2wp2XwEmIXToRdY_f9j5zs',
    libraries: 'places',
  }
});



import Landing from "@/pages/Landing.vue"
import About from "@/pages/About.vue"
import Locator from "@/pages/Locator.vue"
import Cart from "@/pages/Cart.vue"
import Shop from "@/pages/Shop.vue"
import Product from "@/pages/Product.vue"


const routes = [
  { path: '/', component: Landing },
  { path: '/about', component: About },
  { path: '/find-us', component: Locator},
  { path: '/cart', component: Cart},
  { path: '/shop', component: Shop},
  { path: '/product', component: Product},

]

const router = new VueRouter({
  mode: 'history',
  routes
})
new Vue({
  render: h => h(App),
  router
}).$mount("#app");
