

const Display = ({tab,idx,onClickHandler}) => {

  return (
    <div className=' '> 
          <button key={idx} onClick={() => onClickHandler(tab,idx)} className="rounded-md bg-slate-950 px-2.5 py-1.5 text-white font-semibold shadow-sm ring-1 ring-inset ring-gray-300  ">Tab {idx+1}</button>      
    </div>
  )
}

export default Display