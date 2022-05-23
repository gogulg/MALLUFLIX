import React from 'react'
import NavBar from '../components/navbar/NavBar'
import './home.css';
import img from '../assets/img.jpg'
import Featured from '../components/featured/Featured';


export default function () {
  return (
    <div className='home'>
      <NavBar></NavBar>
      {/* <img className='img'               src={img}></img> */}
     <Featured/>
    </div>
  )
}
