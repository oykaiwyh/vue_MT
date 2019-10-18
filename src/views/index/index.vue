<template>
    <el-container>
        <el-header>
            <m-header></m-header>
        </el-header>
        <el-main>Main</el-main>
        <el-footer>Footer</el-footer>
    </el-container>
</template>

<script>
    import MHeader  from '../../components/public/header/index.vue'
    export default {
        components:{
            MHeader
        }
        
    }
</script>
<style lang ='scss' scoped>

</style>