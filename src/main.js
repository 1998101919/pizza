import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import { routes } from './routes'
import axios from 'axios'

import { store } from './store/store.js'


// 全局引入axios
axios.defaults.baseURL='https://wd2971288881tirnmz.wilddogio.com/'
// 配置全局axios，其他地方无需再引入
Vue.prototype.axios=axios

Vue.use(VueRouter)

const router=new VueRouter({
  routes,
  mode:'history'
})

// //全局守卫
router.beforeEach((to,from,next)=>{
if(store.state.currentUser){
  next()
}else{


  if(to.path=="/login"||to.path=="/register"){
    next()
  }else{
    alert("尚未登陆，请先登陆！")
    next("/login")
  }
}
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
