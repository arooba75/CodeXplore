import React from 'react'
import './Card1.css'
import { useNavigate } from 'react-router-dom'



const Card1 = (props) => {

  let navigate = useNavigate()
  return (
    <div className='card-container' onClick={()=>navigate(`/course-detail/${props.id}`)}>
      <div id='image'>
        <img src={props.image} alt="" />
      </div>
      <div id='content'>
        <div className='title'> {props.title}</div>
        <div className='trainer'>{props.trainer}</div>
        <div className='price'>{props.price}</div>
        <button className='premium'>Premium</button>
      </div>
    </div>
  )
}

export default Card1
