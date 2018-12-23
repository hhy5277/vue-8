import './services'
import { api } from 'apibus'

// 动态获取路由=》启动程序
api.system.getRouters().then(res => {
  console.log('获取路由结果', JSON.parse(JSON.stringify(res)))
  console.log('获取路由结果2', res)
  let routerData = res.payload
  Promise.all([import('@/app/router'), import('@/main')])
    .then(([appRouter, main]) => {
      console.log('文件结果', appRouter, main)
      let routers = appRouter.start(routerData)
      console.log('配置路由', routers)
      main.start(routers)
    })
})
