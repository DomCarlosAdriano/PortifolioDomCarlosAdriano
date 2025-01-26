import React, { useState } from "react";
import style from "./Header.module.css"

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
    <header className={style.header}>
      <nav className={style.nav}>
        <span className={style.logo}>Dom_Carlos</span>
        <ul className={style.ul_nav}>
          <li className={style.li_desktop} >Inicio</li>
          <li className={style.li_desktop}>Quem sou</li>
          <li className={style.li_desktop}>Projetos</li>
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
          <li className={style.li}>Inicio</li>
          <li className={style.li}>Quem sou</li>
          <li className={style.li}>Projetos</li>
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
