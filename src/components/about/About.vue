<template>
<div>
    <div class="row mb-5">
        <div class="col-md-2">
            <ul class="nav nav-pills nav-stacked">
                <router-link tag="li" class="nav-link" :to="{name:'historyLink'}">
                    <a class="list-group-tiem list-group-item-action">历史订单</a>
                </router-link>
                <router-link tag="li" class="nav-link" :to="{name:'contactLink'}">
                    <a class="list-group-tiem list-group-item-action">联系我们</a>
                </router-link>
                <router-link tag="li" class="nav-link" :to="{name:'orderingGuideLink'}">
                    <a class="list-group-tiem list-group-item-action">点餐文档</a>
                </router-link>
                <router-link tag="li" class="nav-link" :to="{name:'deliveryLink'}">
                    <a class="list-group-tiem list-group-item-action">快递信息</a>
                </router-link>
            </ul>
        </div>
        <div class="col-md-10">
            <router-view></router-view>
        </div>
    </div>
</div>
</template>
