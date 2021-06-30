import React from "react";
class DynamicForm extends React.Component {
  // 1.组件的生命周期函数
  // 每一个组件都有一些生命周期函数。
  // 当组件实例被创建并且会插入到DOM中，下面这些函数会被调用
  // constructor
  // componentWillMount
  // render
  // componentDidMount
  constructor(props: any) {
    console.log('DynamicForm:  constructor')
    super(props)
    this.state = {
    }
  };
  UNSAFE_componentWillMount () {
    console.log('DynamicForm:  UNSAFE_componentWillMount')
  }
  render() {
    console.log('DynamicForm:  render')
    return (
      <div className="dynamic-form">
        <div>dynamic-form</div>
      </div>
    );
  };
  componentDidMount () {
    console.log('DynamicForm:  componentDidMount')
  }


  // 改变组件的state或props会导致更新，当重新渲染组件时会调用下面这些方法
  // componentWillReceiveProps
  // shouldComponentUpdate
  // componentWillUpdate
  // render
  // componentDidUpdate
  UNSAFE_componentWillReceiveProps (nextProps:any) {
    console.log('DynamicForm:  UNSAFE_componentWillReceiveProps')
  }
  shouldComponentUpdate (nextState: any,nextProps: any):boolean {
    console.log('DynamicForm:  shouldComponentUpdate')
    return true;
  }
  UNSAFE_componentWillUpdate (nextProps:any, nextState:any) {
    console.log('DynamicForm:  UNSAFE_componentWillUpdate')
  }
  // render调用
  componentDidUpdate (prevProps:any, prevState:any) {
    console.log('DynamicForm:  componentDidUpdate')
  }

  // 当组件从DOM中移除，会调用下面的方法
  // componentWillUnmount
  componentWillUnmount () {
    console.log('DynamicForm:  componentWillUnmount')
  }





  getSnapshotBeforeUpdate(prevProps:any, prevState:any) {
    console.log('DynamicForm:  getSnapshotBeforeUpdate')
    // ...
  }

}

export default DynamicForm;