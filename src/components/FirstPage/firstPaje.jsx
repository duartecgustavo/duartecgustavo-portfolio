import React, {useEffect} from 'react';

// Importação de imagens
import bg1 from '../../assets/FirstPage/bg-1Page.svg';
import Foto from '../../assets/FirstPage/foto.png';

// Importação de efeitos Fade
import Aos from 'aos';
import 'aos/dist/aos.css';

// Importação de arquivos
import curriculo from "./Curriculo-Analista-TI.pdf";

const FirstPage = () => {

    useEffect(()=> {
        Aos.init({duration: 700});
    }, [])

    return (
        <>
            <div className="d-flex row">
                <div className="sidebardown"></div>
                <div className="workspaceFP" id="topo">
                    <img className="img-fluid imgbg" src={bg1} alt="" />
                    <div className="d-flex justify-content-center">
                        <a href="#tecnologia" className="aba my-4 mx-4">Tecnologias</a>
                        <a href="#formação" className="aba my-4 mx-4">Formação</a>
                        <a href="#projetos" className="aba my-4 mx-4">Projetos</a>
                        <a href="#feedback" className="aba my-4 mx-4">Mensagem</a>
                        <a href={curriculo} className="aba my-auto d-flex justify-content-center align-items-center nav-cv" download="Curriculo - Gustavo Castanho Duarte">
                            Download CV
                        </a>
                    </div>
                    <div className="linha"></div>
                    <div className="container-fluid" style={{height: "88%" }}>
                        <div className="row h-100">
                            <div className="col-7 d-flex">
                                <div className="d-flex flex-column align-items-center justify-content-center">
                                    <div className="d-flex align-items-center justify-content-center">
                                        <p className="tituPerfil1" style={{margin:"0"}}>DESENVOLVEDOR </p>
                                        <p className="tituPerfil2" style={{margin:"0", marginLeft:"7px"}}> FRONTEND</p>                                     
                                        <img className="h-100" src="imgs/rocket.gif" width="45px"/>
                                    </div>
                                    <h1 className="font-weight-bold tituloAnimaNome mb-4" style={{color:"#7D50F9"}}>GUSTAVO CASTANHO</h1>                                  
                                    
                                    <p className="sobre text-justify">
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Fala Dev! Seja muito bem vindo, 
                                    sou um desenvolvedor Full Stack de 22 anos e completamente apaixonado pela área da 
                                    tecnologia. Aqui estão as principais tecnologias em que desenvolvo, pratico e aprendo no meu dia a dia. Também estão 
                                    alguns projetos que já desenvolvi além de um pouco de minha formação.
                                    </p>
                                </div>
                            </div>
                            <div className="col-5 d-flex align-items-center flex-column justify-content-center">
                                <div className="pulse d-flex ms-4">
                                    <img className="pulse2 img-fluid p-2" src={Foto} alt="" />
                                </div>
                                <h1 className="iconeFoto">Eu amo<span className="spanIcone"></span></h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FirstPage;