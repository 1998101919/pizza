import Vue from 'vue'
import Vuex from 'vuex'

import * as actions from './actions'

Vue.use(Vuex)

export const store =new Vuex.Store({
    state:{
        //设置属性
        menuItems:{},
        currentUser:null,
        isLogin:false
    },
    getters:{
        // 获取属性状态
        currentUser:state=>state.currentUser,
        isLogin:state=>state.isLogin
    },
    mutations:{
        // 改变属性状态
        setMenuItems(state,data){
            state.menuItems=data;
        },
        //将匹配的对象在menuItems数组中删除
        removeMenuItems(state,data){
            state.menuItems.forEach((item,index) => {
                if(item==data){
                    state.menuItems.splice(index,1)
                }
            });
        },
        pushToMenuItems(state,data){
            state.menuItems.push(data);
        },
        // 更改用户的状态信息
        userStatus(state,user){
            if(user){
                state.currentUser=user
                state.isLogin=true
            }else{
                state.currentUser=null
                state.isLogin=false
            }
        }
    },
    actions
})