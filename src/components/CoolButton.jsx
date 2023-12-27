import React from 'react'

const CoolButton = ({type,text}) => {
  return (
    <span className='buttons'>
<button className={type}  >{text}</button>
    </span>
  )
}

export default CoolButton
