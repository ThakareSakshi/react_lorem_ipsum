import React from 'react'

const CreatePara = ({paragraph}) => {
  return (
    <div className='para'>
        <p>{paragraph}</p>
        {
            console.log(paragraph)
        }
      
    </div>
  )
}

export default CreatePara
