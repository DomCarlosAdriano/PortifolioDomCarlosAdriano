import React from "react";
import style from "./About.module.css"

function About() {
    return (
        <section className={style.section} id="quem_sou">
            <div className={style.texto_sobre_Mim}>
                <h1>Sobre Mim <i className="fa-solid fa-code-branch"></i></h1>
                <p>
                    Meu nome é Carlos Laurindo Tenho 20 anos e sou de Maceió - AL.
                    Atualmente estou cursando Tecnólogo em Sistemas Para Internet na UNCISAL
                    (Universidade Estadual de Ciências da Saúde de Alagoas) e também sou bolsista
                    em Desenvolvimento Back-end no programa educacional da Oracle e Alura.
                    Sou um jovem esforçado, trabalhador e estudioso com um forte desejo de
                    aprender e crescer em minha carreira. aprendi habilidades valiosas através
                    da minha educação e acredito que possa agregar muito valor a sua empresa.
                </p>

                <p>
                    - Linguagens: HTML, CSS, JavaScript, Python, Java <br />
                    - Frameworks: ReactJS, Spring boot <br />
                    - Controle de Versão: GIT, GitHub, Git Flow <br />
                    - Metodologias Ágeis: SCRUM, Kanban
                </p>

                <ul>
                    <li><i className="fa-brands fa-js"></i></li>
                    <li><i className="fa-brands fa-java"></i></li>
                    <li><i className="fa-brands fa-python"></i></li>
                    <li><i className="fa-brands fa-html5"></i></li>
                    <li><i className="fa-brands fa-css3-alt"></i></li>
                    <li><i className="fa-brands fa-react"></i></li>
                    <li><i className="fa-brands fa-git-alt"></i></li>
                    <li><i className="fa-solid fa-database"></i></li>

                </ul>
            </div>

            <ul className={style.contratar}>
                <ol className={style.programador}>
                    <h1>Contratar desenvolvedor Web Jr</h1>
                    <p>
                        Se você é recrutador e procura um desenvolvedor para fazer parte da sua equipe, eu sou a pessoa certa.
                        Abaixo deixarei meu currículo para que você possa me conhecer melhor
                    </p>
                    <a href="https://drive.google.com/uc?export=download&id=1pvYADS1tzreTpktkmPdgtT4l_XAx5eAv" download="curriculoDEV">Baixar Curriculo</a>
                </ol>
                <ol className={style.freelancer}>
                    <h1>Contratar Desenvolvedor de Sites freelancer</h1>
                    <p>
                        Se você esta a procura de um profissional para fazer o site da sua empresa eu sou a pessoa certa.
                        Abaixo deixarei meu currículo para que você possam me conhecer melhor
                    </p>
                    <a href="https://drive.google.com/uc?export=download&id=1pvYADS1tzreTpktkmPdgtT4l_XAx5eAv" download="curriculoDEV">Vamos Trabalhar Juntos</a>
                </ol>
            </ul>
        </section>
    )
}

export default About;