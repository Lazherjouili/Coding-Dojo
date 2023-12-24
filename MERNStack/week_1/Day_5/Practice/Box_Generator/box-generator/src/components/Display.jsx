import React from 'react'

const Display = ({listbox}) => {
  return (
    <div className=" flex  justify-center  m-auto gap-5 ">
        {listbox.map((onebox, idx) => {
        return (
          <div key={idx}>
            {onebox}
          </div>
        );
      })}
    </div>
  )
}

export default Display