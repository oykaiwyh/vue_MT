<template>
    <div class="search-panel">
        <el-row class="m-header-searchbar">
            <el-col :span='3'>
                <img src="" alt="图标"/>
            </el-col>
            <el-col :span='15' class="center">
                <div class="wrapper">
                    <el-input 
                        v-model='search' 
                        @focus="focus" 
                        @blur="blur" 
                        @input="input"
                        placeholder='搜索商家地点'></el-input>
                    <button class="el-button el-button--primary">
                        <i class="el-icon-search"></i>
                    </button>
                    <dl class="hotPlace" v-if="isHostPlace">
                        <dt>热门111</dt>
                        <dd v-for="(item , index) in hotPlace" :key="index">{{item}}</dd>
                    </dl>
                    <dl class="searchList" v-if="isSearchList">
                        <dd v-for="(item , index) in searchList" :key="index">{{item}}</dd>
                    </dl>
                </div>
                <p class="suggest">
                    <a href="#">故宫</a>
                    <a href="#">故宫</a>
                    <a href="#">故宫</a>
                    <a href="#">故宫</a>
                    <a href="#">故宫</a>

                </p>
                <ul class="nav">
                    <li><router-link to="/" class="takeout">外卖</router-link></li>
                    <li><router-link to="/" class="movie">外卖</router-link></li>
                    <li><router-link to="/" class="hotel">外卖</router-link></li>
                    <li><router-link to="/" class="apartment">外卖</router-link></li>
                    <li><router-link to="/" class="business">外卖</router-link></li>
                </ul>
            </el-col>
            <el-col :span='6' class="right">
                <ul class="security">
                    <li><i class="refund"/><p class="txt">随时退</p></li>
                    <li><i class="single"/><p class="txt">随时退</p></li>
                    <li><i class="overdue"/><p class="txt">随时退</p></li>
                </ul>
            </el-col>
        </el-row>
    </div>
</template>
<script>
    export default {
        data(){
            return{
                search:'',
                isFocus:false,
                hotPlace:['1','2'],
                searchList:['3','4']
            }

        },
        computed: {
            isHostPlace:function(){
                return this.isFocus && !this.search
            },
            isSearchList:function(){
                return this.isFocus && this.search
            }
        },
        methods:{
            focus(){
               this.isFocus = true 
            },
            blur(){
            //    this.isFocus = false 
                let _this =this
                setTimeout(()=>{
                    _this.isFocus = false
                },200)
            },
            input(){
                console.log('123')   
            }
        }
    }
</script>

<style lang="scss">

</style>