import Vue from 'vue'
import Router from 'vue-router'
import Index from '../views/index/index.vue'
import Login from '../views/register/index'

Vue.use(Router)




const router =  new Router({
    mode:'history',
    linkActiveClass : 'active' , //给特定的跳转链接<router-link to='/'>添加自己的class 
    routes:[{
        path : '/',
        component : Index
    },
    {
        path : '/register',
        component : Login 
    }]
})



export default router