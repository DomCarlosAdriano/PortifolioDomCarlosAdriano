import React from 'react'
import style from "./Home.module.css"

function Home() {
  return (
    <section className={style.section} id="inicio">
    <div className={style.container}>
     <a  href="https://wa.me/5582993647023" target="_blank" rel="noopener noreferrer" className={style.border_pulse } >
        <div className={style.pulse_shadow}></div>
        <img
          src="https://github.com/DomCarlosAdriano/PortifolioDomCarlosAdriano/blob/main/public/profile-pic.png?raw=true"
          width="100%" height="100%"
        />
      </a>
      <h1>Dom Carlos Adriano</h1>
      <h2>Desenvolvedor Web</h2>
      <ul className={style.social_midia}>
        <li>
            <a aria-label="LinkedIn de Dom Carlos Adriano" href="https://www.linkedin.com/in/dom-carlos-adriano" target="_blank" title="LinkedIn de Dom Carlos Adriano">
                <i className="fa-brands fa-linkedin"></i>
            </a>
        </li>
        <li>
            <a aria-label="Instagram de Dom Carlos Adriano" href="https://www.instagram.com/direct/t/Dom_Carlos_Adriano/" target="_blank" title="Instagram de Dom Carlos Adriano">
                <i className="fa-brands fa-instagram"></i>
            </a>
        </li>
        <li>
            <a aria-label="GitHub de Dom Carlos Adriano" href="https://github.com/DomCarlosAdriano" target="_blank" title="GitHub de Dom Carlos Adriano">
                <i className="fa-brands fa-github"></i>
            </a>
        </li>
        <li>
            <a aria-label="E-mail de contato de Dom Carlos Adriano" href="mailto:domcarlosadriano@gmail.com" target="_blank" title="E-mail de contato de Dom Carlos Adriano">
                <i className="fa-solid fa-envelope"></i>
            </a>
        </li>
        <li>
          <a href="https://wa.me/5582993647023" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-whatsapp"></i></a>
        </li>
      </ul>
    </div>
  </section>
    
  )
}

export default Home