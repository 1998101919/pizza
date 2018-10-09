<template>
<div class="wrapper">
    <div class="img">
        <div class="bg">
            <h1>欢迎品尝Pizza</h1>
        </div>
    </div>
</div>
</template>
<style scoped>
.wrapper{
    width: 100%;
    height: 100%;
}
.img{
    background: url(https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1538892438682&di=221454dbbd53d2f0354daf9ab119ec26&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F2018-01-17%2F5a5eabe2bb55a.jpg%3Fdown) no-repeat center;
    height: 500px;
    width: 150vh;
    display: block;
    margin: 0 auto;
    border-radius: 6px;
}
.bg{
    background: white;
    width: 80%;
    height: 80%;
    margin:5% 10%;
    display:inline-block;
    background:rgba(245, 242, 242, 0.5);
}
.bg>h1{
    font-weight: bolder;
    text-align: center;
    height: 300px;
    line-height: 300px;
    font-size: 100px;
}
</style>
