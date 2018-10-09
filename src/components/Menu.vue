<template>
    <div>

        <!-- 菜单 -->
        <div class="col-sm-12 col-md-8">
                
            
            <table class="table">
                <thead class="thead-default">
                    <tr>
                        <th>尺寸</th>
                        <th>价格</th>
                        <th>加入购物车</th>
                    </tr>
                </thead>
                <tbody v-for="item in getMenuItems" :key="item.name" style="border:1px solid #cccc;">
                    <tr>
                        <td><strong>{{item.name}}</strong></td>
                    </tr>
                    <tr v-for="option in item.options" :key="option.size">
                        <td>{{option.size}}</td>
                        <td>{{option.price}}</td>
                        <td>
                            <button
                             @click="addToBasket(item,option)"
                             class="btn btn-default">+</button>
                            </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <!-- 购物车 -->
        <div class="col-sm-12 col-md-4">
            <div v-if="baskets.length>0">
            <table class="table">
                <thead class="thead thead-default">
                    <tr>
                        <th>数量</th>
                        <th>品种</th>
                        <th>价格</th>
                    </tr>
                </thead>
                <tbody v-for="item in baskets" :key="item.price">
                    <tr>
                        <td>
                            <button
                             @click="decreaseQuantity(item)"
                             class="btn btn-default btn-sm">-</button>
                            <span>{{item.quantity}}</span>
                            <button
                              @click="increaseQuantity(item)"
                             class="btn btn-default btn-sm">+</button>
                        </td>
                        <td>
                            {{item.name}} {{item.size}}寸
                        </td>
                        <td>
                            {{item.price * item.quantity}}
                        </td>
                    </tr>
                </tbody>
                <p>总价：{{total}} RMB</p>
                <button class="btn btn-success btn-block">提交</button>
            </table>
            </div>
            <div v-else>
                {{basketsText}}

            </div>
        </div>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                baskets:[],
                basketsText:"购物车内没有任何商品。",
                // getMenuItems: {}
            }
        },
        created(){
            this.fetchData()
        },
        computed:{
            getMenuItems(){
                // 在vuex中获取数据
                return this.$store.state.menuItems
            },
            total(){
                let totalCost=0;
                for(let index in this.baskets){
                    let individualItem=this.baskets[index];
                    totalCost+=individualItem.price*individualItem.quantity;
                }
                return totalCost;
            }
        },
        methods:{
            fetchData(){
                // Axios get方法获取数据
                // this.axios.get('menu.json')
                // .then(data=>{
                //     this.getMenuItems=data.data;
                // })



                // 将请求下来的数据存储到vuex中
                this.axios.get('menu.json')
                .then(res=>this.$store.commit("setMenuItems",res.data))

            },
            addToBasket(item,option){
                let basket={
                    name:item.name,
                    price:option.price,
                    size:option.size,
                    quantity:1
                };
                if(this.baskets.length>0){
                    let reslut = this.baskets.filter((basket)=>{
                        return (basket.name===item.name && basket.price===option.price)
                    })

                    if(reslut!=null && reslut.length>0){
                        reslut[0].quantity++;
                    }else{
                        this.baskets.push(basket);
                    }

                }else{
                    this.baskets.push(basket);
                }
            },
            decreaseQuantity(item){
                    item.quantity--;
                    if(item.quantity<=0){
                        this.removeFromBaskets(item);
                    }
                },
            increaseQuantity(item){
                item.quantity++;
            },
            removeFromBaskets(item){
                this.baskets.splice(this.baskets.indexOf(item),1)
            }
        }
    }
</script>

