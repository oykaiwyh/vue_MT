<template>
    <div class="m-menu">
        <dl class="nav" @mouseleave="mouseleave">
            <dt>全部分类</dt>
            <dd v-for="(item,index) in menu" :key='index' @mouseenter="mouseenter">
                <i :class="item.type"/>{{item.name}}
                <span class="arrow"></span>
            </dd>
        </dl>
        <div class="detail" v-if="kind" @mouseenter="sover" @mouseleave="sleave">
            <template v-for="(item,index) in curdetail.child">
                <h4 :key='index' >{{item.title}}</h4>
                <span v-for="childitem in item.child" :key="childitem">{{childitem}}</span>
            </template>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                kind:'',
                menu:[{
                    type:'food',
                    name:'美食',
                    child:[{
                        title:"xxx",
                        child:['代金券1','甜点','甜点1']
                    }]
                },
                {
                    type:'takeout',
                    name:'美食',
                    child:[{
                        title:"yyy",
                        child:['代金券2','甜点','甜点2']
                    }]
                }]
            }
        },
        computed:{
            curdetail(){
                // console.log(this.menu.filter((item)=>item.type===this.kind)[0])
                return this.menu.filter((item)=>item.type===this.kind)[0]
            }
        },
        methods:{
            mouseleave(){
                const _this = this;
                _this._timer=setTimeout(()=>{
                    _this.kind=''
                },150)

            },
            mouseenter(e){
                this.kind = e.target.querySelector('i').className
            },
            sover(){
                clearTimeout(this._timer)
            },
            sleave(){
                this.kind=''
            }
        }
    }
</script>


<style lang="scss" scope>

</style>
