import Vue from 'vue'
import Router from 'vue-router'
// import test from '../components/test.vue'
import Index from '../views/index/index.vue'

Vue.use(Router)




const router =  new Router({
    mode:'history',
    linkActiveClass : 'active' , //给特定的跳转链接<router-link to='/'>添加自己的class 
    routes:[{
        path : '/',
        component : Index
    },
    {
        path : '/aaa',
        // component : test 
    }]
})



export default router