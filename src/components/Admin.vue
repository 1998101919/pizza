<template>
    <div class="row">
        <div class="col-sm-12 col-md-8">
            <!-- new pizza -->
            <app-newpizza></app-newpizza>
        </div>
        <div class="col-sm-12 col-md-4">
            <!-- 品种展示 -->
            <h3 class="text-muted my-5">菜单</h3>
            <table class="table">
                <thead class="table table-default">
                    <tr>
                        <th>品种</th>
                        <th>删除</th>
                    </tr>
                </thead>
                <tbody v-for="item in getMenuItems" :key="item.id">
                    <tr>
                        <td>{{item.name}}</td>
                        <td>
                            <button @click="deleteData(item)" class="btn btn-default">&times</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
import NewPizza from './NewPizza.vue'
export default {
    data(){
        return{
            // getMenuItems:[]
        }
    },

    //  新增使用vuex的store
    computed:{
            getMenuItems:{
                get(){
                    return this.$store.state.menuItems
                },
                set(){

                }
            },
    },





    created(){
        fetch('https://wd2971288881tirnmz.wilddogio.com/menu.json')
        .then(res=>{
            return res.json()
    })
        .then(data=>{
            let menuArray=[]
            for(let key in data){
                data[key].id=key
                menuArray.push(data[key])
            }
            // this.getMenuItems=menuArray;
            // 数据同步
            this.$store.commit('setMenuItems',menuArray)
        })

    },
    methods:{
        deleteData(item){
            fetch('https://wd2971288881tirnmz.wilddogio.com/menu/'+item.id+'/.json',{
                method:"DELETE",
                headers:{
                    'Content-type':'application/json'
                }
            })
            .then(res=>res.json())
            // .then(data=>this.$router.push({path:'./menu'}))
            .then(data=>{
                this.$store.commit('removeMenuItems',item)
            })
            .catch(err=>console.log(err))
        }
    },


    components:{
    "app-newpizza":NewPizza
}
}

</script>
