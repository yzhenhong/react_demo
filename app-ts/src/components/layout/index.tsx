import React from "react";
import { LayoutHeader, LayoutSidebar, LayoutMain } from './components/index'
import './index.less';

function Layout() { 
  return (
    <div className="layout-wrap">
        <LayoutHeader></LayoutHeader>
        <LayoutSidebar></LayoutSidebar>
        <LayoutMain></LayoutMain>
    </div>
  );

}

export default Layout;

