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
              <TestimonyCard
                name="Donald Jackman"
                designation="SWE 1 @ Amazon"
                image="/images/testi1.jpg"
                testimonial="This course helped me bridge the gap between theory and real-world application. The hands-on projects were exactly what I needed to level up!"
              />
              <TestimonyCard
                name="Tom Windstone"
                designation="SWE 2 @ Samsung"
                image="/images/testi2.jpg"
                testimonial="I loved how clearly everything was explained. The trainer’s real-world examples made complex topics so much easier to understand.."
              />
              <TestimonyCard
                name="Kelly Mouvlhill"
                designation="SWE 1 @ Facebook"
                image="/images/testi3.jpg"
                testimonial="Honestly, this bootcamp gave me the confidence to apply for my current job. The curriculum is modern, practical, and very well structured."
              />

                
              </div>
              <div id='testimonial-section-title'>
                <h2>Learn anything, anytime, anywhere</h2>
                <p>Incididunt sint fugiat pariatur cupidatat consectetur sit cillum anim id veniam aliqua proident excepteur commodo do ea</p>
                <button id='login'> <Link to='/courses'>  Get Started</Link></button>
              </div>
        
          
        
      </div>
      )
    }
    
    export default Testimonials
    
    
    
    