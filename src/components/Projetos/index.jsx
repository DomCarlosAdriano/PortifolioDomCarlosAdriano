import React from 'react'
import style from "./Projetos.module.css"

function Projetos() {
    return (
        <section className={style.section} id="projetos">
            <h1>Projetos <i className="fa-solid fa-code"></i></h1>

            <div className={style.container}>
                <div className={style.card}>
                    <a className={style.link} href="https://github.com/DomCarlosAdriano/site_do_GPHLSA-GAP" target="_blank" rel="noopener noreferrer">
                        <img src="https://images.pexels.com/photos/159740/library-la-trobe-study-students-159740.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="imagem ilustrativa de um bibioteca" />
                    </a>
                    <h2>Site - Grupo de pequisa</h2>
                    <span>
                        <i className="fa-brands fa-css3-alt" style={{ color: "rgb(56, 17, 184)" }}></i>
                        <i className="fa-brands fa-js" style={{ color: " rgb(243, 255, 10)" }}></i>
                        <i className="fa-brands fa-html5" style={{ color: " #f06529" }}></i>
                        <i className="fa-brands fa-react" style={{ color: "#61dbfb" }}></i>
                    </span>
                </div>

                <div className={style.card}>
                    <a className={style.link} href="https://github.com/DomCarlosAdriano/site_do_GPHLSA-GAP" target="_blank" rel="noopener noreferrer">
                        <img src="https://images.pexels.com/photos/1200450/pexels-photo-1200450.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="imagem ilustrativa da frente de um cinema" />
                    </a>
                    <h2>Site - SinopseFlix</h2>
                    <span>
                        <i className="fa-brands fa-js" style={{ color: " rgb(243, 255, 10)" }}></i>
                        <i className="fa-brands fa-react" style={{ color: "#61dbfb" }}></i>
                        <i className="fa-solid fa-database" style={{ color: "rgb(56, 17, 184)" }}></i>
                        <i className="fa-brands fa-java"></i>
                    </span>
                </div>

                <div className={style.card}>
                    <a className={style.link} href="https://github.com/DomCarlosAdriano/site_do_GPHLSA-GAP" target="_blank" rel="noopener noreferrer">
                        <img src="https://images.pexels.com/photos/2300334/pexels-photo-2300334.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    </a>
                    <h2>E-commerce - MenLook</h2>
                    <span>
                        <i className="fa-brands fa-css3-alt" style={{ color: "rgb(56, 17, 184)" }}></i>
                        <i className="fa-brands fa-js" style={{ color: " rgb(243, 255, 10)" }}></i>
                        <i className="fa-brands fa-html5" style={{ color: " #f06529" }}></i>
                        <i className="fa-brands fa-react" style={{ color: "#61dbfb" }}></i>
                    </span>
                </div>
            </div>


        </section>
    )
}

export default Projetos