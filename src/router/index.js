import Vue from 'vue'
import Router from 'vue-router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import fxyHead from '@/components/fxy-head.vue'
import fxyContent from '@/components/fxy-content.vue'

Vue.use(Router);

new Vue({
  render: h => h(App),
}).$mount('#app')

export default new Router({
  routes:[
    {
      path:'/',
      name:'fxyHead',
      component:fxyHead
    },
    {
      path:'/user/:id',
      compontent:fxyComtent
    }
  ]
})