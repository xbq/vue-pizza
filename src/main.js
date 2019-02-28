import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Home from "./components/Home.vue"
import Menu from "./components/Menu.vue"
import Admin from "./components/Admin.vue"
import About from "./components/about/About.vue"
import Login from "./components/Login.vue"
import Register from "./components/Register.vue"

//二级路由
import Contact from "./components/about/Contact.vue"
import Delivery from "./components/about/Delivery.vue"
import History from "./components/about/History.vue"
import OrderGuide from "./components/about/OrderGuide.vue"

Vue.config.productionTip = false
Vue.use(VueRouter);
const routes=[
  {path:'/',name:'homeLink',component:Home},
  {path:'/menu',name:'menuLink',component:Menu},
  {path:'/admin',name:'adminLink',component:Admin},
  {path:'/about',name:'aboutLink',component:About,children:[
    {path:'/about/contact',name:'contactLink' ,component:Contact},
    {path:'/about/delivery',name:'deliveryLink' ,component:Delivery},
    {path:'/about/history',name:'historyLink' ,component:History},
    {path:'/about/orderGuide',name:'orderGuideLink' ,component:OrderGuide}
  ]},
  {path:'/login',name:'loginLink',component:Login},
  {path:'/register',name:'registerLink',component:Register},
  {path:'*',redirect:'/'}
]

const router = new VueRouter({
  routes:routes,
  mode:'history'
})
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
