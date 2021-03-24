import React from "react";

// Componentes
import Skills from "./skills";
import Formacao from "./formacao";
import Botão from '../button';
import Certificados from "./Certificados/certidicados.jsx";

// Imagens
import bg3 from "../../assets/TirdPage/bg-3Page.svg";
import Link from "../../assets/SecondPage/Link.svg";

const TirdPage = () => {
    return (
        <>
            <div className="d-flex row">
                <div className="sidebardown" id="desktop"></div>
                <div className="py-3 workspaceTP d-flex container-fluid">
                    <img className="img-fluid imgbg" id="desktop" src={bg3} alt="" />
                    <div className="row" style={{width:"100%", marginLeft:"5px"}}>
                            <div className="col-lg-6 col-12" data-aos="fade-right">
                                <div className="container-fluid ajusteSkills" style={{ height: "70vh" }}>
                                    <h5 className="titulo1Proj1 tituloAnima text-center py-4" id="tecnologia">TECNOLOGIAS</h5>

                                    <div className="row">
                                        <Skills />
                                    </div>
                                </div>

                                <div className="d-flex flex-column align-items-center justify-content-center ajustesButton" style={{ height: "28vh" }}>
                                    <div className="py-4 d-flex flex-column align-items-center justify-content-center ajustesButton">
                                        <a href="https://github.com/duartecgustavo" target="_blanck" style={{ textDecoration: "none" }}><Botão img={Link} txt="Acessar github" /></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-12" data-aos="fade-right">
                                <h3 className="titulo1Proj1 tituloAnima text-center py-4" id="formação">FORMAÇÃO</h3>
                                <div className="d-flex flex-column justify-content-center align-items-center">

                                    <Formacao
                                        instituicao="Recode"
                                        curso="Desenvolvedor Full Stack"
                                        duracao="2020 - 2021"
                                    />
                                    <Formacao
                                        instituicao="Univ. Anhembi Morumbi"
                                        curso="Hotelaria e Turismo"
                                        duracao="2016 - 2018"
                                    />
                                    <Formacao
                                        instituicao="Centro Paula Souza"
                                        curso="Auxiliar de informatica"
                                        duracao="2013 - 2015"
                                    />

                                </div>
                                <div className="py-4 d-flex flex-column align-items-center justify-content-center mt-4">
                                    <button style={{ backgroundColor: "transparent", border: "none" }} data-bs-toggle="modal" data-bs-target="#siteModal" id="openPopup"><Botão img={Link} txt="Certificados" /></button>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
            <Certificados />
        </>
    );
};
export default TirdPage;
