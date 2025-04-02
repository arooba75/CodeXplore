import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

import './CourseDetail.css'

import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

const CourseDetail = () => {

    let {userid} =useParams()

    let[title, setTitle] =useState("")
    let[content, setContent] = useState("")
    let[trainer, setTrainer] =useState("")
    let[description, setDescription] =useState("")
    let[image, setImage] =useState("")
    let[price, setPrice] =useState("")

    // read the data
    useEffect(()=>{
        axios.get(`http://localhost:8081/course-details?id=${userid}`)
        .then((res) => {
            if (res.data.length > 0) {
              const course = res.data[0]; // JSON Server returns an array, get the first item
              console.log("Course Data:", course);
              setTitle(course.title);
              setContent(course.content);
              setTrainer(course.trainer);
              setDescription(course.description);
              setImage(course.image);
              setPrice(course.price);
            } else {
              alert("Course not found!");
            }
          })
        .catch((err) => console.error("Error fetching course:", err));

    },[userid])
  return (
    <div>
        <Navbar />
        
        <div id='course-detail'>
            <div id="cd-left">
                <div className="cd-title">
                    <h2>{title || "Loading..."}</h2>
                    
                </div>
                <div className="cd-content">
                        <p>{content || "Fetching course details..."}</p>
                </div>
                <div className="cd-trainer">
                    <h4>Course by {trainer || "Unknown Trainer"}</h4 >
                </div>
                <div className="cd-description">
                    <h3>Course Description</h3>
                    <h3>Master Cloud Fundamentals</h3>
                    <p>{description || "No description available."}</p>
                    <ul>
                       
                        <li>Understand cloud architecture</li>
                        <li>Learn to work with AWS, Azure, and GCP</li>
                        <li>Explore serverless computing and storage solutions</li>
                    </ul>
                </div>
            </div>
            <div id='cd-right'>
                <div className="cd-img">
                    <img src={image} alt="" />
                </div>
                <div className="below-cd-img">
                    <h4> 5 Days Left at this price!</h4>
                    <h3>₹ {price || "0"}</h3>
                    <button id='enroll'>Enroll now </button>
                    <h3>What's in the Course</h3>
                    <ul>
                        <li>Lifetime access with free updates.</li>
                        <li>Step-by-step, hands-on project guidance.</li>
                        <li>Downloadable resources and source code.</li>
                        <li>Quizzes to test your knowledge.</li>
                        <li>Certificate of completion.</li>
                        <li>Quizzes to test your knowledge.</li>
                    </ul>
                </div>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default CourseDetail
