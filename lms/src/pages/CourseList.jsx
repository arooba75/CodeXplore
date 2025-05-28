import React from 'react'
import Navbar from '../Components/Navbar'
import './CourseList.css'
import CourceCards from '../Components/CourceCards'
import { Link, useNavigate } from 'react-router-dom'
import Card1 from '../Components/Card1'
import Footer from '../Components/Footer'

const CourseList = ({ courses }) => {
  const navigate = useNavigate();

  return (
    <div id='course-list'>
      <Navbar />

      <div id="course-list-second">
          <h1>Courses</h1>
            <Link to="/">Home</Link>/ Courses
            
            <div id="course-list-container">
            {courses.map((course) => (
              <div key={course.id}>
              <Card1 image={course.image} title={course.title} trainer={course.trainer} price={course.price} id={course.id}/>
              </div>
            ))}
            {/* {courses.map((course) => (
              <div key={course.id}>
              <Card1 image={course.image} title={course.title} trainer={course.trainer} price={course.price} id={course.id}/>
              </div>
            ))} */}
            {/* {courses.map((course) => (
              <div key={course.id}>
              <Card1 image={course.image} title={course.title} trainer={course.trainer} price={course.price} id={course.id}/>
              </div>
            ))}
            {courses.map((course) => (
              <div key={course.id}>
              <Card1 image={course.image} title={course.title} trainer={course.trainer} price={course.price} id={course.id}/>
              </div>
            ))} */}
            </div>
      </div>

      <Footer />

    </div>
  );
};

export default CourseList
