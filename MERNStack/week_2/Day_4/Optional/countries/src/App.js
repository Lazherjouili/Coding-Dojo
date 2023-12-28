
import './App.css';
import Display from './components/Display';
import Form from './components/Form';
import {useState} from 'react'
function App() {

  const tasks=[{title:"Get Python black belt.",check:false}]
  const [listTasks,setList]=useState(tasks)
  const add=(newTask)=>{
    setList([...listTasks,newTask])
    console.log(listTasks)
}
const checktask=(id)=>{
  const copyList=[...listTasks]
  copyList[id].check = !copyList[id].check
  setList(copyList)

}
const deleteTask=(id)=>{
  const newList=listTasks.filter((T,idx)=>{
    return idx !==id
  })
    setList(newList)
  
  }
  return (
    <div className=' flex flex-col justify-center items-center mt-5 '>
    <Form add={add}/>
    <Display listTasks={listTasks} checktask={checktask} deleteTask={deleteTask}/>
   
    </div>
  );
}

export default App;
