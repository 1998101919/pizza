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
            <div class="row">
                <div class="form-group">
                    <label for="confirm-password">确认密码</label>
                    <input type="password" class="form-control" v-model="confirmPassword">
                </div>
            </div>
            <button type="submit" class="btn btn-block btn-success">注册</button>
        </form>
    </div>
</template>
<script>
import  axios  from "axios";
    export default {
        data() {
            return {
                email: '',
                password: '',
                confirmPassword: ''
            }
        },
        methods:{
            onSubmit(){
                if(this.confirmPassword===this.password){
                    const formData={
                        email:this.email,
                        password:this.password,
                        confirmPassword:this.confirmPassword
                    }
                    axios.post('/users.json',formData)
                        .then(res=>this.$router.push({path:'/login'}))
                        alert("注册成功！")

                        


                }else{
                    alert("两次密码不一致！")
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
