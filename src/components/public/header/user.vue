<template>
    <div class="m-user">
        <template v-if="user">
            欢迎您，<span class="username">{{user}}</span>
            [<router-link to="/exit">退出</router-link>]
        </template>

        <template v-else>
            <router-link to = '/login' class="login">立即登录</router-link>
            <router-link to = '/register' class="register">注册</router-link>
        </template>
    </div>
</template>

<script>
export default {
    data(){
        return {
            user : ""
        }
    }
}
</script>

<style lang='scss' scoped>
    @import "@/assets/css/public/header.scss";

</style>