import React from 'react'

function Button(props) {
  // console.log(props);
  function handleClick(){
    props.handleFilter(props.title);

  }

  return (
    <div className='font-sans hover:text-gray-500 hover:shadow-md'>
        <button onClick={handleClick} className={props.className}>{props.title}</button>
    </div>
  )
}

export default Button