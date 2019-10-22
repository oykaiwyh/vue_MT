<template>
    <div class="m-header">
        <el-row>
            <el-row>
                <top-bar/>
            </el-row>
        </el-row>
        <el-row>
            <el-row>
                <search-bar/>
            </el-row>
        </el-row>
    </div>
</template>

<script>
import topBar from './topbar'
import searchBar from './searchbar'
export default {
    components:{
        topBar,
        searchBar
    }
    
}
</script>


<style lang='scss' scoped>
    @import "@/assets/css/public/header/index.scss";

</style>