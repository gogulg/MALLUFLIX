// import React, { useEffect, useState }  from 'react'
// // import Employee from './Employee'
// // import Json from './Json';
// // import SetStateExample from './SetStateExample'
// import './App.css';
// import axios from './axios';
// import NavBar from './components/NavBar';



// export default function App() {
//   const [trend,setTrend] = useState([])
//   const [id ,setId]= useState('')


//  console.log("INDEX",index)

//   return (

//     <div 
//     className='banner'
//     style = {{  backgroundImage:`url(${ trend[index] ? imageURL+trend[index].backdrop_path: ''})`}} >
//       <NavBar/>
//     <h1> { trend[index] ? trend[index].original_title : '' }</h1>
//     <h1> { trend[index] ? trend[index].overview : '' }</h1>

// ..............................................






//  {/* <button onClick={()=>{
//    setState(!state)
//  }}> </button>  
// { state ? <SetStateExample/> : null }


// <h2>{ trend ? trend.title:''}</h2>
// <Json/> */}
//            </div>
        
//   )
//   } 

import React from 'react'
import Featured from './components/featured/Featured'

import Home from './home/Home'

export default function App() {
  return (
    <div>
      <Home></Home>

    </div>
  )
}

