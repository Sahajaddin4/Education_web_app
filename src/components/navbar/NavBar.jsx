import React from 'react'
import {filterData,apiUrl} from '../../assets/data.js';
import Button from "../button/Button.jsx";
function NavBar() {
  return (
    <>
          <div className="nav flex justify-between">
          <div className="heading">
            <h1 className='p-2 m-1'>Top Courses</h1>
            </div>
          <div className="nav-btn flex justify-evenly space-x-4">
              {filterData.map((data)=>{
                return( <Button id={data.id} title={data.title} key={data.id} className='p-2 m-1'/>)
              })}
              <button className='p-2 m-1 border rounded-lg'><span className='mx-1'>Explore more</span><i className="fa-solid fa-arrow-right"></i></button>
          </div>
          </div>
       </>
  )
}

export default NavBar