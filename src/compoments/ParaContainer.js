import React from 'react'
import data from './data.json'
import CreatePara from './CreatePara'

const ParaContainer = ({count}) => {
  return (
    <div className='paraContainer'>
        {
         data.map((para,index)=>{
             console.log(index,count)

            if(index < parseInt(count)){
                console.log(para)
                return <CreatePara key={para.id} paragraph={para.text}/>
            }
         }

         )
        }
      
    </div>
  )
}

export default ParaContainer
