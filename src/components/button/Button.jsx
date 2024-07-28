import React from 'react'

function Button(props) {
  
  return (
    <div className='font-sans hover:text-gray-500 hover:shadow-md'>
        <button {...props}>{props.title}</button>
    </div>
  )
}

export default Button