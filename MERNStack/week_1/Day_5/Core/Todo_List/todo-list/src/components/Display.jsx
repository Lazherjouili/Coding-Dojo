

const Display = ({listTasks,checktask,deleteTask}) => {
    
  return (
    <div>
        {listTasks.map((oneTask,idx)=>{
            return (<div key={idx} className=' flex gap-5 items-center mb-5'>
             {oneTask.check ? <s className='font-bold'>{oneTask.title} </s>:<p className='font-bold'>{oneTask.title} </p>}
                    
                    <input  type="checkbox" onChange={(e)=>checktask(idx)} checked={oneTask.check} className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"  ></input> 
                    <button onClick={()=>deleteTask(idx)} className="rounded-md bg-gray-950 px-4 py-1.5 text-white font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 ">Delete</button>
  
            </div>)
        })}
    </div>
  )
}

export default Display