import React from 'react'
import './CardSection.css'
import Card1 from './Card1'
import python from '/images/python-image.jpg'
import cyber from '/images/cyber.jpg'
import javascript from '/images/javascript.jpg'
import webdev from '/images/web-dev.jpg'
import { Link } from 'react-router-dom'

const CardSection = () => {
  return (
    <div>
      <div id='card-section'>
      <div id='card-section-title'>
          <h2>Learn from the best</h2>
          <p>Discover our top-rated courses across various categories. From coding and design to 
          business and wellness, our courses are crafted to deliver results.</p>
      </div>
      <div id='cards' >
      <Card1 title='Python course for beginners' trainer='Ningraj Anna' price='3500' image={python} />
      <Card1 title='Cybersecurity basics' trainer='John Doe' price='2500' image={cyber} />
      <Card1 title='Introducion to JavaScript' trainer='Bhavna Deshpande' price='300' image={javascript} />
      <Card1 title='Web Development Bootcamp' trainer='Abdul Bari' price='5500' image={webdev} />
      </div>
      <button id='search-cources' style={{margin: '30px'}}>
        <Link to='/courses'>
        Show all courses
        </Link>
        </button>
    </div>
    </div>
  )
}

export default CardSection
