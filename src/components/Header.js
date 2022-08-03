import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebookF, faInstagram, faLinkedinIn, faGithub} from '@fortawesome/free-brands-svg-icons'
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../images/empty-logo.png'

export default function Header({mode, modeHandler}) {
    const [menu, setMenu] = useState('off');
  const [burger, setBurger] = useState('close');

  function switcher(){
    setMenu(menu === 'off'? "on" : 'off')
    setBurger(burger=== 'close'? 'open' : 'close')
  }
  return (
    <div className='header'>
      <a className='imgContainer' href='#/' >
            <img src={logo} alt='logo' />
            </a>

      
        <div className='pages'>
            <div className={`BurgerMenu ${menu}`} onClick={switcher}>
        <a className='page' href='#/' >Home</a>
        <a className='page' href='#about' >About</a>
        <a className='page' href='#projects' >Projects</a>
        <a className='page' href='#contact' >Contact</a>
        </div>
        </div>
        <div className='social' >
        <a target="_blank" href='https://www.facebook.com/william.mallak11' rel="noreferrer"><FontAwesomeIcon icon={ faFacebookF } /></a>
        <a target="_blank" href='https://www.linkedin.com/in/william-mallak-b51893243/' rel="noreferrer" ><FontAwesomeIcon icon={ faLinkedinIn } /></a>
        <a target="_blank" href='https://www.instagram.com/william.mallak/?hl=en' rel="noreferrer" ><FontAwesomeIcon icon={ faInstagram } /></a>
        <a target="_blank" href='https://github.com/William8421' rel="noreferrer" ><FontAwesomeIcon icon={faGithub}/></a>
        </div>
        <div className={`barButton`} onClick={switcher}>
          <div className={`bar top ${burger}`}></div>
          <div className={`bar middle ${burger}`}></div>
          <div className={`bar bottom ${burger}`}></div>
        </div>
    </div>
  )
}

