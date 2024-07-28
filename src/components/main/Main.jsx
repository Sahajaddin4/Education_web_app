import React from 'react'
import Card from './card/Card';

function Main({courses}) {
  //console.log(courses.Development);
  let dev=courses.Development[0];
  return (
   <>
        <div className="container">
            <Card dev={dev}/>
        </div>
   </>
  )
}

export default Main