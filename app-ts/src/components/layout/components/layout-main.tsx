import React, { Suspense} from 'react';
import { Route } from "react-router-dom";
import routes from '../../../routes/index';

function LayoutMain() {
  return (
    <div className="layout-main">
       <Suspense fallback={<div>Loading...</div>}>
        {
          routes.map((item)=>{
            return <Route key={item.name} path={item.path} exact component={item.component}/>
          })
        }
      </Suspense>
    </div>
  );

}

export default LayoutMain;