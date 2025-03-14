import React from 'react'
import Card1 from './Card1'
// import python from '../images/python-image.jpg'
import python from "/images/python-image.jpg"
import cyber from '/images/cyber.jpg'
import javascript from '/images/javascript.jpg'
import webdev from '/images/web-dev.jpg'
const CourceCards = () => {
  return (
    <div>
      <div id='cards' >
      <Card1 title='Python course for beginners' trainer='Ningraj Anna' price='3500' image={python} />
      <Card1 title='Cybersecurity basics' trainer='John Doe' price='2500' image={cyber} />
      <Card1 title='Introducion to JavaScript' trainer='Bhavna Deshpande' price='300' image={javascript} />
      <Card1 title='Web Development Bootcamp' trainer='Abdul Bari' price='5500' image={webdev} />
      </div>
      <div id='cards' >
      <Card1 title='Python course for beginners' trainer='Ningraj Anna' price='3500' image={python} />
      <Card1 title='Cybersecurity basics' trainer='John Doe' price='2500' image={cyber} />
      <Card1 title='Introducion to JavaScript' trainer='Bhavna Deshpande' price='300' image={javascript} />
      <Card1 title='Web Development Bootcamp' trainer='Abdul Bari' price='5500' image={webdev} />
      </div>
    </div>
  )
}

export default CourceCards
