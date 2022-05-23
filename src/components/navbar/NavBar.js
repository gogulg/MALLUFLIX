import './navbar.css'
import { BsSearch } from "react-icons/bs";
import { IoIosNotificationsOutline } from "react-icons/io";
import { useState } from 'react';
export default function NavBar() {

  const items = [" Home", "Series", "Movies", "New and Popular"]
  const  [isScrolled ,seIsScrolled] = useState(true)
  window.onscroll = ()=>{
    seIsScrolled(window.pageYOffset === 0 ? false : true );
    return ()=> {window.onscroll = null}
  }

  console.log(window.pageYOffset);

  return (
    <div className={ isScrolled ? "NavBar scrolled" : "NavBar"}>
      <div className='container'>
        <div className='left'> <span className='logo'>MALLUFLIX</span>
          {
            items.map(obj => 
              <span className='span'>{obj}</span>
            )
          }
        </div>
        <div className='right'>
          <BsSearch  className='icon'/>
          <span className='icon'>KID</span>
          <IoIosNotificationsOutline  className='icon' />
        </div>
      </div>

    </div>
  )
}
