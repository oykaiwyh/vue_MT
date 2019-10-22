<template>
    <div class="m-nav">
        <ul class="nav">
            <li class="list">
                <router-link to = '/my'>我的美团</router-link>  
                <dl>
                    <dd> <router-link to = '/my'>我的订单</router-link></dd>
                    <dd> <router-link to = '/my'>我的收藏</router-link></dd>
                    <dd> <router-link to = '/my'>抵用卷</router-link></dd>
                    <dd> <router-link to = '/my'>账户设置</router-link></dd>
                </dl>  
            </li>

            <li>
                <router-link to = '/app'>手机APP</router-link>    
            </li>
            <li class="list bd">
                <router-link to = '/center'>商家中心</router-link>   
                <dl>
                    <dd> <router-link to = '/my'>登录商家中心</router-link></dd>
                    <dd> <router-link to = '/my'>我想合作</router-link></dd>
                    <dd> <router-link to = '/my'>免费手机开店</router-link></dd>
                    <dd> <router-link to = '/my'>商家申请开票</router-link></dd>
                </dl>   
            </li>
            <li class="list site">
                <router-link to = '/site'>网站导航</router-link> 
                <div class="subContainer">
                    <dl class="hotel">
                        <dt> <router-link to = '/my'>商家申请开票</router-link></dt>                       
                        <dd> <router-link to = '/my'>商家申请开票</router-link></dd>                       
                        <dd> <router-link to = '/my'>商家申请开票</router-link></dd>                       
                        <dd> <router-link to = '/my'>商家申请开票</router-link></dd>                       
                        <dd> <router-link to = '/my'>商家申请开票</router-link></dd>                       
                    </dl>  
                    <dl class="food">
                        <dt> <router-link to = '/my'>美食</router-link></dt>                       
                        <dd> <router-link to = '/my'>小吃</router-link></dd>                       
                        <dd> <router-link to = '/my'>烤鱼</router-link></dd>                       
                        <dd> <router-link to = '/my'>烧烤</router-link></dd>                       
                        <dd> <router-link to = '/my'>特色小吃</router-link></dd>  
                    </dl>  
                    <dl class="moive">
                        <dt> <router-link to = '/my'>看电影</router-link></dt>                       
                        <dd> <router-link to = '/my'>烤鱼</router-link></dd>                       
                        <dd> <router-link to = '/my'>烧烤</router-link></dd>                       
                        <dd> <router-link to = '/my'>特色小吃</router-link></dd> 
                    </dl>  
                    <dl class="app">
                        <dt> <router-link to = '/my'>看电影</router-link></dt>                       
                   
                        <dd> <router-link to = '/my'>烤鱼</router-link></dd>                       
                        <dd> <router-link to = '/my'>烧烤</router-link></dd>                       
                        <dd> <router-link to = '/my'>特色小吃</router-link></dd>  
                    </dl>  
                </div>   
            </li>

        </ul>
    </div>
</template>
<script>
export default {
    
}
</script>

<style lang='scss'>
</style>