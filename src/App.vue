<template>
  <div id="app">
    <!-- <public/> -->
     <router-view></router-view>
    <!-- <el-button type="primary">主要按钮</el-button>
    <button class="bt bt--primary"><span>13</span></button> -->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld'
import Public from './components/public/header/index'

export default {
  name: 'App',
  components: {
    // Public,
    // Test
  }
}
</script>

<style lang="scss">
  // #app{
  //   background: #000;
  // }
  .bt--primary:hover{
    color: #fff;
    background-color: #409eff;  
    border-color: #409eff;
  }
  .bt--primary:active {
    background: #3a8ee6;
    border-color: #3a8ee6;
    color: #FFF;
}
  // .bt:focus{
  //     color: #409EFF;
  //     border-color: #c6e2ff;
  //     background-color: #ecf5ff;
  // }
  .bt{
    // text-shadow: none;
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    background: #409eff;
    border: 1px solid #dcdfe6;
    color: #fff;
    -webkit-appearance: none;
    text-align: center;
    box-sizing: border-box;
    outline: none;
    margin: 0;
    // transition: .1s;
    font-weight: 500;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    padding: 12px 20px;
    font-size: 14px;
    border-radius: 4px;
  }

</style>
