import React, { useState } from "react";
import style from "./Header.module.css"
import { Link } from "react-scroll";

function Home() {
 const [menu, setMenu] = useState(false)
 const body = document.querySelector("html");
 
 const activeMenu = ()=>{
  if(menu){
    setMenu(false)
    body.style.overflow = "auto"
  } else{
    setMenu(true)
    body.style.overflow = "hidden"
  }
 }
  
  return (
    <header className={style.header} id="home">
      <nav className={style.nav}>
        <a href="https://www.instagram.com/direct/t/Dom_Carlos_Adriano/" target="_blank" rel="noopener noreferrer" className={style.logo}>Dom_Carlos</a>
        <ul className={style.ul_nav}>
          <li className={style.li_desktop} ><Link to="home" smooth={true} duration={100}>Inicio</Link></li>
          <li className={style.li_desktop}><Link to="quem_sou" smooth={true} duration={100} >Quem sou</Link></li>
          <li className={style.li_desktop}><Link to="projetos" smooth={true} duration={100} >Projetos</Link></li>
        </ul>

        <a className={`${style.glow_on_hover} ${style.button_contato_desktop}`}>
          <i className="fa-solid fa-envelope"></i> Contatos
        </a>

        <div className={style.mobile_menu_icon} onClick={activeMenu}>
          <button><i className="fa-solid fa-bars"></i></button>
        </div>
      </nav>

      <div className={menu ? style.mobileMenu : style.mobileMenu_disabled}>
        <div className={style.mobileXicon}>
          <button onClick={activeMenu}> <i className="fa-solid fa-xmark"></i></button>
        </div>
        <ul>
          <li className={style.li}><Link to="home" smooth={true} duration={100} onClick={activeMenu}>Inicio</Link></li>
          <li className={style.li}><Link to="quem_sou" smooth={true} duration={100} onClick={activeMenu}>Quem sou</Link></li>
          <li className={style.li}><Link to="projetos" smooth={true} duration={100} onClick={activeMenu} >Projetos</Link></li>
        </ul>
        <div className={style.button_contato_mobile}>
          <a className={`${style.li} ${style.glow_on_hover}`}>
            <i className="fa-solid fa-envelope"></i> Contatos
          </a>
        </div>
      </div>

    </header>
  )
}

export default Home;
