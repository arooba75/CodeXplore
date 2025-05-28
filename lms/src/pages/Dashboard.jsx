import React,{useEffect, useState} from 'react'
import axios from 'axios'
import EnrolledCourses from '../Components/EnrolledCourses'
import "./Dashboard.css"
import Navbar from '../Components/Navbar'


const Dashboard = () => {
  const [enrolledCourses, setEnrolledCourses]= useState([])
  useEffect(()=>{
    axios.get(`http://localhost:8082/enrolled-courses`)
    .then((res)=>{
      if (res.data.length > 0) {
        const enrolled = res.data; 
        console.log(enrolled);
        setEnrolledCourses(res.data);
        
        
      }
    })
    .catch((err) => console.error("Error fetching course:", err));
  },[])
  return (
    <div id="dashboard-outer">
      <Navbar />
      Dashboard
      <EnrolledCourses courses={enrolledCourses} />

      
    </div>
  )
}

export default Dashboard
