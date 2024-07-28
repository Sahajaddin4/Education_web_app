import React from "react";
import Card from "./card/Card";
import { toast } from "react-toastify";

function Main({ courses, category, title }) {
  // console.log(category, courses);
  // console.log(title);

    let allCourses = [];
    Object.values(courses).forEach((courseName) => {
    courseName.forEach((title) => {
      allCourses.push(title);
    });
  });
  // console.log(allCourses);
  

  
  return (
    <>
      <div className="md:container flex flex-wrap gap-2 max-w-[100vw] justify-evenly ">
        {
          allCourses.map((course)=>{
            return <Card dev={course} key={course.id} />;
          })
        }
        
      </div>
    </>
  );
}

export default Main;
