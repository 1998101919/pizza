<template>
    <header>
       <nav class="navbar navbar-default">    
           <div class="container-fluid">
            <span class="glyphicon glyphicon-inbox navbar-brand" aria-hidden="true"></span>
            <router-link to="/" class="navbar-brand">Pizza点餐系统</router-link>
            <ul class="nav navbar-nav">
                <li><router-link to="/" class="nav-link">主页</router-link></li>
                <li><router-link to="menu" class="nav-link">菜单</router-link></li>
                <li><router-link to="admin" class="nav-link">管理</router-link></li>
                <li><router-link to="about" class="nav-link">关于我们</router-link></li>
            </ul>
            <ul class="nav navbar-nav navbar-right">
                <li><router-link to="login" v-show="!isLogin">登陆</router-link></li>
                <li class="nav-link" >
                    <a>
                        {{currentUser}}
                    </a>
                </li>
                <li><router-link to="login" v-show="isLogin">[退出]</router-link></li>

                <li><router-link to="register" v-show="!isLogin">注册</router-link></li>
            </ul>
           </div>
        </nav>
    </header>    
</template>
<script>
export default {
    



    computed:{
        currentUser(){
            return this.$store.getters.currentUser
        },
        isLogin(){
            return this.$store.getters.isLogin
        }
    }
}
</script>



