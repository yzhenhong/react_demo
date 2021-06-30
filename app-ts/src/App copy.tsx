import React, { useState, useEffect} from "react";
import './App.css';

import DynamicForm from './components/dynamic-form'
import DynamicList from './components/dynamic-list'
import DynamicInfo from './components/dynamic-info'


function App() {
  const initListData: Array<Object> = []
  const [listData,setListData] = useState(initListData)

  const [schema, setSchema] = useState<Object[]>([]);
  
  useEffect(()=>{
  },[])

  const submit = async () => {
    console.log('submit')
    let data = [
      {
        name: 'yzh'
      }
    ]
    setListData(data)
    setSchema(data)
  }
  
  return (
    <div className="App" onClick={()=>{
        submit()
      }
    }>
      <DynamicForm/>
      <DynamicList listData={listData}/>
      <DynamicInfo schema={schema}/>
    </div>
  );

}

export default App;