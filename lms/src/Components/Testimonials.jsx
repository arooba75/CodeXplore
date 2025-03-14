    import React from 'react'
    import './Testimonials.css'
import TestimonyCard from './TestimonyCard'
import { Link } from 'react-router-dom'
    const Testimonials = () => {
      return (
    <div id='testimonial-section'>
              <div id='testimonial-section-title'>
                <h2>Testimonials</h2>
                <p>Hear from our learners as they share their journeys of transformation, success, and how our
                platform has made a difference in their lives.</p>
              </div>
              <div className="t-cards">
                <TestimonyCard/>
                <TestimonyCard />
                <TestimonyCard />
              </div>
              <div id='testimonial-section-title'>
                <h2>Learn anything, anytime, anywhere</h2>
                <p>Incididunt sint fugiat pariatur cupidatat consectetur sit cillum anim id veniam aliqua proident excepteur commodo do ea</p>
                <button id='signup'> <Link to='/courses'>  Get Started</Link></button>
              </div>
        
          
        
      </div>
      )
    }
    
    export default Testimonials
    
    
    
    