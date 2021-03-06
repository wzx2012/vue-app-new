import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store/store'
import * as types from '@/store/types'
import routerconfig from '@/config/router'

Vue.use(Router)
// 页面刷新时，重新赋值token
if (window.localStorage.getItem('token')) {
  store.commit(types.TOKEN, window.localStorage.getItem('token'))//access_token
}
const router= new Router({
  routes: routerconfig,
  /*scrollBehavior (to, from, savedPosition) {
    console.log(savedPosition)
    console.log(to)
    console.log(from)
    // 从第二页返回首页时savedPosition为undefined
    if (savedPosition || typeof savedPosition !== 'undefined') {
      // 只处理设置了路由元信息的组件
      from.meta.keepAlive = false
      if (savedPosition) {
        return savedPosition
      }
    }
    else
    {
      to.meta.keepAlive = true
    }
  }*/
})

//判断登陆钩子
router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {
    // 判断该路由是否需要登录权限
    if (store.state.token&&store.state.token!=="null"&&store.state.token!=="undefined") {  // 通过vuex state获取当前的token是否存在
      next()
    }
    else {
      next({
        path: '/login',
        query: {redirect: to.fullPath}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
      })
    }
  }
  else {
    next()
  }
})


export default router
