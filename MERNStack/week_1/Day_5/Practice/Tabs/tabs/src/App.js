
import './App.css';
import Display from './components/Display';
import{useState} from 'react'
function App() {
  const list=["Tab 1 content is showing here","Tab 2 content is showing here","Tab 3 content is showing here"]
  const [info,setInfo]=useState("")
  const [inf,setInf]=useState("")

const onClickHandler = ((tab,id) => {

setInfo(tab)
setInf(id)
})
    

  return (
    <div className='flex flex-col gap-5 mb-5 justify-center'>
      <div className='flex justify-center gap-4 mt-4'>
      {list.map((tab,idx)=>{
        return(<Display tab={tab} idx={idx} onClickHandler={onClickHandler}/>)
      })}
      </div>
      
      <div className='flex justify-center'>
        <textarea key={inf} onChange={(e)=>{setInfo(e.target.value)}} value={info} className=" flex w-64  rounded-md border-0 py-6 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300  focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm "></textarea>
      </div>
    </div>
  
  );
}

export default App;
