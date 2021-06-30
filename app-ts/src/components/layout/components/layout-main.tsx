import React from "react";
import { Route } from "react-router-dom";
import routes from '../../../routes/index';

function LayoutMain() {
  return (
    <div className="layout-main">
       {
          routes.map((item)=>{
            return <Route key={item.name} path={item.path} exact component={item.component}/>
          })
        }
    </div>
  );

}

export default LayoutMain;