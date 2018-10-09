<template>
    <form>
        <h3 class="text muted my-5">添加新的Pizza</h3>
        <div class="form-group row">
            <label class="col-sm-1">品种</label>
            <div class="col-sm-11">
                <input type="text" v-model="newPizza.name" class="form-control">
            </div>
        </div>
        <div class="form-group row">
            <label class="col-sm-1">描述</label>
            <div class="col-sm-11">
                <textarea rows="5" v-model="newPizza.description" class="form-control"></textarea>
            </div>
        </div>
        <p><strong>选项一</strong></p>
        <div class="form-group row">
            <label class="col-sm-1">尺寸</label>
            <div class="col-sm-11">
                <input type="text" v-model="newPizza.size1" class="form-control">
            </div>
        </div>
        <div class="form-group row">
            <label class="col-sm-1">价格</label>
            <div class="col-sm-11">
                <input type="text" v-model="newPizza.price1" class="form-control">
            </div>
        </div>
        
        <p><strong>选项二</strong></p>
        <div class="form-group row">
            <label class="col-sm-1">尺寸</label>
            <div class="col-sm-11">
                <input type="text" v-model="newPizza.size2" class="form-control">
            </div>
        </div>
        <div class="form-group row">
            <label class="col-sm-1">价格</label>
            <div class="col-sm-11">
                <input type="text" v-model="newPizza.price2" class="form-control">
            </div>
        </div>
        <div class="form group row">
            <button @click="addMenuItem" type="button" class="btn btn-success btn-block">添加</button>
        </div>
    </form>
</template>
<script>
export default {
    data(){
        return{
            newPizza:{}
        }
    },
    methods:{
        addMenuItem(){
            let data={
                name:this.newPizza.name,
                description:this.newPizza.description,
                options:[
                    {
                        size:this.newPizza.size1,
                        price:this.newPizza.price1
                    },
                    {
                        size:this.newPizza.size2,
                        price:this.newPizza.price2
                    }
                ]
            };
            // fetch('https://wd2971288881tirnmz.wilddogio.com/menu.json',{
            //     method:"POST",
            //     headers:{
            //         "content-type":'application/json'
            //     },
            //     body:JSON.stringify(data)
            // })

            //数据同步到vuex中
            this.axios.post('menu.json',data)
            .then(res=>this.$store.commit('pushToMenuItems',data))

            // .then(res=>this.$router.push({path:'./menu'}))
            // .then(data=>console.log(data))
        }
    }
}
</script>

