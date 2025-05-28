import React from 'react'
import './CardSection.css'
import Card1 from './Card1'
import python from '/images/python-image.jpg'
import cyber from '/images/cyber.jpg'
import javascript from '/images/javascript.jpg'
import webdev from '/images/web-dev.jpg'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useState,useEffect } from 'react'
const CardSection = () => {
  const [courses, setCourses] = useState([])

  useEffect(() => {
    axios.get("http://localhost:8081/course-details")
      .then((res) => {
        const firstFour = res.data.slice(0, 4); // 👈 Get only first 4
        setCourses(firstFour);
      })
      .catch((err) => console.error("Error fetching course data:", err));
  }, []);

  return (
    <div id='card-section'>
      <div id='card-section-title'>
        <h2>Learn from the best</h2>
        <p>Discover our top-rated courses across various categories. From coding and design to 
          business and wellness, our courses are crafted to deliver results.</p>
      </div>
      <div id='cards'>
        {courses.map(course => (
          <Card1
            key={course.id}
            id={course.id}
            title={course.title}
            trainer={course.trainer}
            price={course.price}
            image={course.image}
          />
        ))}
      </div>
      <button id='login' style={{ margin: '30px' }}>
        <Link to='/courses'>Show all courses</Link>
      </button>
    </div>
  )
}

export default CardSection
