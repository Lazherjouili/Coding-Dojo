import React from 'react'

const Countries = ({country,idx,updateCountry,deleteCountires}) => {
  return (
    <tr >
        <td>{country.independent ? <s>{country.name.common}</s> :<p>{country.name.common}</p>}</td>
        <td><img src={country.flags.png} height={50}/></td>
        <td>
            <input type="checkbox" checked={country.independent} onChange={()=>updateCountry(idx)}/>
            <button onClick={()=>deleteCountires(idx)}>Delete</button>
        </td>
    </tr>
  )
}

export default Countries