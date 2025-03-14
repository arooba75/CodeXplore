import React from 'react'
import './TestimonyCard.css'
const TestimonyCard = () => {
  return (
    <div className='t-card-box'>
        <div className="t-card-top">
            <div className="t-card-img">
                <img src="\images\python-image.jpg" alt="" />
            </div>
            <div className="t-card-top-content">
                <div className="t-card-name">
                    <h3>Donald Jackman</h3>
                </div>
                <div className="t-card-description">
                    <p>SWE 1  @ Amazon</p>
                </div>
            </div>
          </div>
          <div className="t-card-bottom">
                <div className="t-card-content">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda quasi dolorem quas libero hic laborum necessitatibus cumque, accusamus quia quisquam.</p>
                </div>
                <a href="">Read more</a>
          </div>
    </div>
  )
}

export default TestimonyCard
