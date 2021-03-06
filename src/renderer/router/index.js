import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main-page',
      component: require('@/components/MainPage').default,
      children: [
        {
          path: '/qiniu-setting',
          name: 'qiniu-setting',
          component: require('@/components/QiniuSetting').default
        }
      ]
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
