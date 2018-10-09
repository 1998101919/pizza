<template>
    <div class="wrapper">
        <img src="../../src/assets/icon.jpg" alt="">
        <form @submit.prevent="onSubmit">
            <div class="row">
                <div class="form-group">
                    <label for="email">邮箱</label>
                    <input type="email" class="form-control" v-model="email">
                </div>
            </div>
            <div class="row">
                <div class="form-group">
                    <label for="password">密码</label>
                    <input type="password" class="form-control" v-model="password">
                </div>
            </div>
            <button type="submit" class="btn btn-block btn-success">登陆</button>
        </form>
    </div>
</template>
<script>
import axios from 'axios';
    export default {
        data() {
            return {
                email: '',
                password: ''
            }
        },
        beforeRouteEnter:(to,from,next)=>{
            next(vm=>vm.$store.dispatch("setUser",null))
        },
        methods: {
            onSubmit() {
                if(this.email===''||this.password===''){
                    alert("请输入账号密码！")
                }else{
                axios.get('/users.json')
                .then(res=>{
                    const data=res.data;
                    const users=[]
                    for(let key in data){
                        const user=data[key];
                        users.push(user);
                    }
                    let reslut=users.filter((user)=>{
                        return user.email===this.email && user.password===this.password;
                    })
                    if(reslut!=null && reslut.length>0){
                        this.$store.dispatch("setUser",reslut[0].email)
                       this.$router.push({path:'./'})
                    }else{
                        alert("账号密码输入错误！");
                        this.$store.dispatch("setUser",null)
                        this.password=""
                    }                    
                })
            }
            }
        }
    }
</script>

<style scoped>
    .wrapper {
        border: 1px solid #cccccc;
        border-radius: 5px;
        padding: 20px;
    }
    .wrapper>img {
        margin: 0 auto;
        display: block;
        width: 200px;
        height: 200px;
    }
    .wrapper>form {
        margin: 0 40px 0 40px;
    }
</style>
