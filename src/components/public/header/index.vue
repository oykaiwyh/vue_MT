<template>
    <el-row :gutter="0" class="m-header">
        <el-col :span="5"><gps/></el-col>
        <el-col :span="5"><user/></el-col>
        <el-col :span="14"><navbar/></el-col>
    </el-row>
</template>


<script>
    import Gps from './gps.vue'
    import User from './user.vue'
    import Navbar from './nav.vue'

    export default {
        components:{
            Gps,
            User,
            Navbar,
        }    
    }
</script>


<style lang = "scss">
  @import "@/assets/css/public/layout.scss";
  @import "@/assets/css/public/header/index.scss";
</style>