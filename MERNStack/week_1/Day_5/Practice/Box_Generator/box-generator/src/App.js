
import './App.css';
import Display from './components/Display';
import Form from './components/Form';
import { useState } from 'react';
function App() {

  const box=[<div className=" h-32 w-32 p-4 bg-orange-700 my-2.5 mx-2.5 "></div>,<div className=" h-32 w-32 p-4 bg-lime-500 my-2.5 mx-2.5 "></div>,<div className=" h-32 w-32 p-4 bg-lime-950 my-2.5 mx-2.5 "></div>]
  const [listbox,setBox]=useState(box)
  const updateBox=(newBox)=>{
    setBox([...listbox,newBox])
  }
  return (
    <div >
      <Form  updateBox={updateBox}/>
      <Display listbox={listbox}/>
    
    </div>
  );
}

export default App;
