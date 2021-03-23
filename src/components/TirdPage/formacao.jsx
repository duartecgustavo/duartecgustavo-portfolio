import React from "react";

import capelo from "../../assets/TirdPage/capelo.png";

const formacao = (props) => {
  return(
  <>
    <div className="formacao formacaoEfeito mt-1 mb-2 py-2 shadow">
        
        <div className="d-flex justify-content-center align-items-center">
            <img width="20px" className="img-fluid" src={capelo}/>
        </div>

        <h5 className="text-center" style={{margin:"0"}}>{props.instituicao}</h5>
        <p className="text-center" style={{margin:"0"}}>{props.curso}</p>
        <p className="text-center" style={{margin:"0", color: "#7D50F9"}}>{props.duracao}</p>
    </div>
  </>
  )
};

export default formacao;
