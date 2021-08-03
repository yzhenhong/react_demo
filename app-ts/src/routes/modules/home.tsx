import { lazy } from 'react';

const  homeRouterMap = [
  { name:'index', path:'/home/index', component: lazy(() => import('../../views/home/index')) },
]

export default  homeRouterMap