import React from 'react'
import NavBar from '../components/navbar/NavBar'
import './home.css';
import img from '../assets/img.jpg'
import Featured from '../components/featured/Featured';
import RowPost from '../components/RowPost/RowPost';
import { Actions, Drama, Orginals ,Comedy, Crime, Romance} from '../url';


export default function () {
  return (
    <div>
      <NavBar></NavBar>
     <Featured/>
     <RowPost url= {Orginals} title = 'MFLIX ORGINALS' />
     <RowPost url= {Romance} title = 'ROMANCE'  isSmall/>
     <RowPost url= {Drama} title = 'DRAMA'  isSmall/>
     <RowPost url= {Comedy} title = 'COMEDY'  isSmall/>
     <RowPost url= {Actions} title = 'ACTION'  isSmall/>
     <RowPost url= {Crime} title = 'CRIME THRILLER'  isSmall/>

    </div>
    
  )
}
