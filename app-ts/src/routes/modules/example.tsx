import { lazy } from 'react';

const  exampleRouterMap = [
  { name:'charts', path:'/example/charts', component: lazy(() => import('../../views/example/charts')) },
]

export default  exampleRouterMap