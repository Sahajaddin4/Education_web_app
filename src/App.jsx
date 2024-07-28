import React, { useEffect, useState } from "react"
import NavBar from "./components/navbar/NavBar"
import Main from "./components/main/Main"
import { apiUrl, filterData } from "./assets/data"
import Spinner from "./components/main/spinner/Spinner";
import { toast } from "react-toastify";
function App() {
  
  const [courses, setCourses] = useState([]);
  const [loader,setLoader]=useState(true);
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

  return (
    <>
      <NavBar />
      {
        loader?<Spinner /> :<Main courses={courses} />
      }
    </>
  )
}

export default App