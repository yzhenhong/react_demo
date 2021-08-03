const sidebarMenuList = [
  {
    icon: 'icon-shouye',
    name: 'home',
    path:'/home',
    meta: {
      title: '首页',
      show: true,
    },
    children: [
      {
        path: '/home/index',
        name: 'index',
        meta: {
          title: '首页',
          show: true,
        },
      }
    ]
  },
  {
    icon: 'icon-changyongshili',
    name: 'example',
    path:'/example',
    meta: {
      title: '示例',
      show: true,
    },
    children: [
      {
        name: 'charts',
        path:'/example/charts',
        meta: {
          title: 'charts',
          show: true
        }
      },
    ]
  },
]
export default  sidebarMenuList