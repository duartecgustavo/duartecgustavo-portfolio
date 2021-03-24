import React from "react";

// import projeto1 from "../../assets/SecondPage/projeto1.png";
import Link from "../../assets/SecondPage/Link.svg";
import Botão from '../button';

const ProjetoComponent = (props) => {
  return(
  <>
      <div className="col-lg-4 col-12 p-3 d-flex flex-column justify-content-around align-items-center">
        <div className="d-flex mb-4">
            <h3 className="titulo1Proj1" style={{cursor:"pointer", }}>{props.t1}</h3>
            <h3 className="titulo2Proj1">{props.t2}</h3>
        </div>
        <div  className="zoom-container card shadow mb-4">
          <img className="" style={{boxShadow:"2px 2px 6px black"}} src={props.img} alt="" />
        </div>
        
        <p style={{color:"white", textAlign:"justify"}}>
            Fusce tempor magna mi, non egestas velit ultricies nec. Aenean
            convallis, risus non condimentum gravida, odio. Mauris ullamcorper
            felis, ut venenatis purus ex eu mi. Quisque imperdiet lacinia urna, a
            placerat sapien pretium eu.
        </p>
        <div className="linha mb-4"></div>
        <a href={props.link} target="_blanck" style={{textDecoration:"none"}}>
          <Botão img={Link} txt="Acessar"/>
        </a>
      
      </div>
  </>
  )
};

export default ProjetoComponent;
