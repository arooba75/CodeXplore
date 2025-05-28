import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './EnrolledCourses.css'; // Make sure to create this CSS file for styling

const EnrolledCourses = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8082/enrolled-courses')
            .then((res) => {
                setCourses(res.data);
            })
            .catch((err) => console.error("Error fetching courses:", err));
    }, []);

    return (
        <div className="table-container">
            <h2>Your Enrolled Courses</h2>
            <table className="course-table">
                <thead>
                    <tr>
                        <th>Course</th>
                        <th>Duration</th>
                        <th>Completed</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {courses.map((course, index) => (
                        <tr key={index}>
                            <td className="course-info">
                                <img src={course.image} alt={course.title} className="course-image" />
                                <div>
                                    <p>{course.title}</p>
                                </div>
                            </td>
                            <td>{course.duration}</td>
                            <td>{course.completedLectures} / {course.totalLectures} Lectures</td>
                            <td>
                                <button className={`status ${course.status === "Completed" ? "completed" : "ongoing"}`}>
                                    {course.status}
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default EnrolledCourses;
