import React, { useEffect, useState } from "react"
import NavBar from "./components/navbar/NavBar"
import Main from "./components/main/Main"
import { apiUrl, filterData } from "./assets/data"
import Spinner from "./components/main/spinner/Spinner";
import { toast } from "react-toastify";
function App() {
  
  const [courses, setCourses] = useState([]);
  const [loader,setLoader]=useState(true);
  const [catTitle, setCatTitle] = useState('');

  let category = [];
  filterData.forEach(element => {
    category.push(element.title)
  });

  async function fetchData(){
    setLoader(true);
    try {
      let dataUrl = await fetch(apiUrl);
      let dataFinal = await dataUrl.json();
      setCourses(dataFinal.data);
      
    } catch (error) {
      toast.error("Unable to fetch courses!")
    }
     finally{
         setTimeout(()=>{ setLoader(false);},1000)
     }
  }
  
  useEffect(()=>{
   fetchData();
   
  },[]) 

  function categoryTitle(title){
    setCatTitle(title);
    // console.log(title);
    // hello World
  }

  return (
    <>
      <NavBar categoryTitle={categoryTitle} />
      {
        loader?<Spinner /> :<Main courses={courses} title={catTitle} category={category} />
      }
    </>
  )
}

export default App