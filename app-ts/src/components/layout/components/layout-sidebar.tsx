import {default as React, useEffect, useState, useRef } from 'react';
import { Menu } from 'antd';
import sidebarMenuList from './sidebarMenuList';

import { useLocation, useHistory } from 'react-router-dom';

function LayoutSidebar() {
  return (
    <div className="layout-sidebar">
      <MenuElements/>
    </div>
  );
}

function MenuElements () {
  const { pathname } = useLocation();
  let history = useHistory();

  // const [openedsIndex, setOpenedsIndex] = useState<string[]>(['0']);
  // const openedsIndexRef = useRef(openedsIndex);
  // openedsIndexRef.current = openedsIndex;
  // const [activeIndex, setActiveIndex] = useState<string[]>(['0']);
  // const activeIndexRef = useRef(activeIndex);
  // activeIndexRef.current = activeIndex;

  // useEffect(()=>{
  //   sidebarMenuList.forEach((item1,index1)=>{
  //     item1.children.forEach((item2,index2)=>{
  //       if(pathname === item2.path){
  //         // let openedsIndexVal = [index1.toString()]
  //         // let activeIndexVal = [index1.toString() + '-'+index2.toString()]
  //         // console.log(openedsIndexVal,activeIndexVal)
  //         setOpenedsIndex(openedsIndexRef.current)
  //         setActiveIndex(activeIndexRef.current)
  //         console.log(openedsIndex,openedsIndexRef.current,activeIndex,activeIndexRef.current)
  //       }
  //     })
  //   })
  // },[pathname])

  const [openedsIndex, setOpenedsIndex] = useState(['0']);
  const openedsIndexRef = useRef(openedsIndex);
  openedsIndexRef.current = openedsIndex

  const [activeIndex, setActiveIndex] = useState(['0']);

  // const [value, setValue] = useState(0);
  // const [anotherValue, setAnotherValue] = useState(0);
  // const valueRef = useRef(value);
  // valueRef.current = value;

  useEffect(() => {
    (async () => {
      sidebarMenuList.forEach((item1,index1)=>{
        item1.children.forEach((item2,index2)=>{
          if(pathname === item2.path){
            let openedsIndexVal = [index1.toString()]
            let activeIndexVal = [index1.toString() + '-'+index2.toString()]
          
            // console.log(openedsIndexVal,activeIndexVal)

            setOpenedsIndex(openedsIndexVal)
            setTimeout(() => {
              // console.log('setOpenedsIndex', openedsIndexRef.current)
              // console.log('openedsIndex', openedsIndex)
            }, 1000);

            setActiveIndex(activeIndexVal)

            // console.log(openedsIndex,activeIndex)
          }
        })
      },300)
    })();
  },[pathname])

  
 
  // useEffect(() => {
  //   window.setTimeout(() => {
  //     console.log('setAnotherValue', valueRef.current) // <- 100
  //     setAnotherValue(valueRef.current);
  //   }, 1000);
  //   setValue(100);
  // }, []);

  

  const renderSubMenu = (item1: any, index1: string) => {
    if (item1.children && item1.children.length > 0 && item1.meta && item1.meta.show !== false && item1.meta.title === '首页') {
      // 首页 不需要子菜单 单独展示
      return renderMenuItem(item1.children[0], index1)
    } else if (item1.children && item1.children.length > 0 && item1.meta && item1.meta.show !== false && item1.meta.title !== '首页') {
      // 一级菜单 有子菜单
      return (
        <Menu.SubMenu
          key={index1}
          title={
            <span>
              <i className={`iconfont ${item1.icon ? item1.icon : ''}`}></i>
              <span>{index1}{item1.meta.title}</span>
            </span>
          }
        >
          {
            item1.children.map((item2: any, index2: number) => {
              if (item2.meta && item2.meta.title && item2.meta.show !== false) {
                return renderMenuItem(item1, index1, item2, index2.toString())
              } else {
                return ''
              }
            })
          }
        </Menu.SubMenu>
      )
    } else if (item1 && item1.meta && item1.meta.show !== false && item1.meta.title !== '首页') {
      // 一级菜单 无子菜单
      return renderMenuItem(item1, index1)
    }

  };

  const renderMenuItem = (item1: any, index1: string, item2?: any, index2?: string) => {
    if (item2 && index2) {
      return (
        <Menu.Item
          key={index1 + '-' + index2}
          onClick={()=>{
            handleClickItem(item2)
          }}
        >
          <span>{index1 + '-' + index2}{item2.meta.title}</span>
        </Menu.Item>
      )
    } else {
      return (
        <Menu.Item
          key={index1}
          onClick={()=>{
            handleClickItem(item1)
          }}
        >
          <i className={`iconfont ${item1.icon ? item1.icon : ''}`}></i>
          <span>{index1}{item1.meta.title}</span>
        </Menu.Item>
      )
    }
  };

  const handleClickItem = (e: any) => {
    history.push(e.path);
  };

  return (
    <Menu mode="inline"
      defaultOpenKeys={openedsIndex}
      defaultSelectedKeys={activeIndex}
    >
      {
        sidebarMenuList.map((item1, index1) => {
          return renderSubMenu(item1, index1.toString())
        })
      }
    </Menu>
  )
}

export default LayoutSidebar;