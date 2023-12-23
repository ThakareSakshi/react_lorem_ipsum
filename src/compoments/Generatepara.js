import React from 'react'
import { useState } from 'react'

const Generatepara = ({generatenewpara}) => {
 const [pnumber,setpnumber]=useState(0);
const addPara=()=>{
    
    generatenewpara(pnumber)
}

const handlepnumber=(e)=>{
    setpnumber(e.target.value)
}
 

  return (
    <div>
        <h1>TIRED OF BORING LOREM IPSUM?</h1>
        <div>
            <span>paraGraph</span>
            <input type="number" value={pnumber} onChange={handlepnumber}/> 
            <button onClick={addPara}>generate</button></div>
      
    </div>
  )
}

export default Generatepara
