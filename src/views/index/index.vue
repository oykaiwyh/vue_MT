<template>
    <el-container>
        <el-header style="height:197px">
            <m-header></m-header>
            <eindex/>

        </el-header>
        <el-main>

        </el-main>
        <el-footer style="">
            
        </el-footer>
    </el-container>
</template>

<script>
    import MHeader  from '../../components/public/header/index.vue'
    import Eindex  from '../../components/index/index.vue'
    export default {
        components:{
            MHeader,
            Eindex
        }
        
    }
</script>
<style lang ='scss' scoped>

</style>