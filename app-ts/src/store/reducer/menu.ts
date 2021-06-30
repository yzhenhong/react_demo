const defaultMenu = [
    {
      icon: 'icon-shouye',
      name: 'index',
      path:'/home/index',
      meta: {
        title: '首页',
        show: true,
      },
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
  ];
  
  export default function menu(menu = defaultMenu, action:any) {
    switch (action.type) {
      case "setMenu":
        return action.data;
      default:
        return menu;
    }
  }