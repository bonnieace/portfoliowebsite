import React from 'react'
import './nav.css'
import {AiOutlineHome,AiOutlineUser,AiOutlineMessage} from "react-icons/ai"
import{BiBook} from"react-icons/bi"

import{RiServiceLine,RiContactsFill} from"react-icons/ri"
import { useState } from 'react'


const Navs = () => {
  const[ activeNav,setActiveNav]=useState('');
  return (
  <nav>
    <a href="#" onClick={() => setActiveNav('#')} className={activeNav==='#'? 'active': ''}><AiOutlineHome/></a>
    <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav==='#services'? 'active': ''}><RiServiceLine/></a>
    <a href="#projects" onClick={() => setActiveNav('#projects')} className={activeNav==='#projects'? 'active': ''}><BiBook/></a>
    <a href="#testimonials" onClick={() => setActiveNav('#testimonials')} className={activeNav==='#testimonials'? 'active': ''}><AiOutlineUser/></a>
    <a href="#contact"onClick={() => setActiveNav('#contact')} className={activeNav==='#contact'? 'active': ''}><AiOutlineMessage/></a>


  </nav>
  )
}

export default Navs