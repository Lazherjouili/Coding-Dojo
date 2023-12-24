import{useState} from 'react'

const Display = ({tab,idx}) => {
const [info,setInfo]=useState("")
const onClickHandler = (e,value) => {
    setInfo(value);
}
  return (
    <div className='flex flex-col  mt-5'>
        <div key={idx} className='flex gap-5 mb-5 justify-center'>
            <button onClick={(e) => onClickHandler(e,tab)} className="rounded-md bg-orange-700 px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 ">Tab {idx+1}</button>
            
        </div>
        
            <div className='flex justify-center'>
            <textarea  onChange={(e)=>setInfo(e.target.value)} className='border-2' cols="30" rows="5">{info}</textarea>
            </div>
    </div>
  )
}

export default Display