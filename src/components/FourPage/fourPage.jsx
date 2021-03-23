import React from "react";

// Componentes
import IconesMensagem from "./iconesMensagem";
import Botão from '../button';

// Imagens
import bg4 from "../../assets/FourPage/bg-4Page.svg";
import Link from "../../assets/SecondPage/Link.svg";

const FourPage = () => {

  const fun = () => {
    return alert("Sua mensagem foi enviada!\n\nObrigado pelo seu Feedback ❤️");
  }

  return (
    <>
      <div className="d-flex row">
        <div className="sidebardown"></div>
        <div className="py-3 workspaceTP d-flex flex-column align-items-center" id="feedback">
          <img className="img-fluid imgbg" src={bg4} alt="" />

          <div className="d-flex justify-content-center pt-3" data-aos="fade-left">
            <h3 className="titulo1Proj1 tituloAnima text-center">Mensagem</h3>
          </div>

          <div className="d-flex flex-column justify-content-center" style={{ width: "70%", height: "90%" }}>

            <IconesMensagem />

            <form className="containerMSG" data-aos="fade-left">

              <div className="text-left form-group">
                <label for="email-usuario" className="pb-1" style={{ fontWeight: "bold", color: "#7E7E7E" }}>E-mail</label>
                <input className="borderMSG form-control" style={{ background: "transparent" }} id="mensagem" type="text" placeholder="Digite seu e-mail" />
              </div>

              <div className="text-left form-group py-3">
                <label for="mensagem" className="pb-1" style={{ fontWeight: "bold", color: "#7E7E7E" }}>Mensagem</label>
                <textarea className="borderMSG form-control" style={{ background: "transparent" }} id="mensagem" rows="3"
                  placeholder="Digite sua mensagem aqui..."></textarea>
              </div>

              <div className="d-flex justify-content-center" style={{ paddingTop: "20px", cursor: "pointer" }}>
                <Botão img={Link} txt="Enviar" func={fun} />
              </div>

            </form>

          </div>

        </div>
      </div>
    </>
  );
};

export default FourPage;