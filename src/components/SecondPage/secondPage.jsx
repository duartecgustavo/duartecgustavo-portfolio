import React from "react";

// Importação componente
import ProjetoComponent from './projetoComponent';

// Importação imagens
import bg2 from "../../assets/SecondPage/bg-2Page.svg";


const SecondPage = () => {
  return (
    <>
      <div className="d-flex row" >
        <div className="sidebardown" id="desktop"></div>
        <div className="py-3 workspaceSP" id="projetos" >
          <img className="img-fluid imgbg" id="desktop" src={bg2} alt="" />

          <div className="d-flex justify-content-center pt-2" data-aos="fade-up">
            <h3 className="titulo1Proj1 tituloAnima text-center">Projetos</h3>
          </div>

          <div className="container-fluid d-flex mt-3"  data-aos="fade-up">
            <div className="row">
              <ProjetoComponent t1={"RE"} t2={"PARA"} link="https://github.com/duartecgustavo/Repara" img="./imgs/Repara.png"
              txt="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;O Repara é um projeto desenvolvido em grupo e se trata de um protótipo desenvolvido ao longo de 3 dias para o Hackthon Recode Pro 2020.
              Este lindo app busca resolver o problema do lixo eletrônico na sociedade que cresce mais a cada dia."
              />
              <ProjetoComponent t1={"FULLSTACK"} t2={"ELETRO"} link="https://github.com/duartecgustavo/fullstackeletro" img="./imgs/FullStackEletro.png"
              txt="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Projeto de loja virtual desenvolvido ao longo de 6 meses com às tecnologias aprendidas no curso Recode Pro.
              Este projeto foi muito importante pois foi o primeiro site que fiz do começo ao fim, digo tanto a parte do frontend quanto a parte do backend."
              />
              <ProjetoComponent t1={"EDU"} t2={"IMPULSO"} link="https://eduimpulso.herokuapp.com/" img="./imgs/EduImpulso.png"
              txt="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;EduImpulso é um site voltado para à educação e orientação vocacional. Tem o intuito de ajudar principalmente o publico
              estudantil através de um quiz em seu autoconhecimento para assim auxiliar na escolha da carreira a ser escolhida."
                
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SecondPage;
