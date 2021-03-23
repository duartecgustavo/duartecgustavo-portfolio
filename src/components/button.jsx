import React from "react";

const Butão = (props) => {

  return (

    <>
        <div className="d-flex animaButton" onClick={props.func} style={{ border: "3px solid #303033", boxSizing:"content-box"}}>
            <img className="img-fluid p-1" src={props.img} alt="" />
            <div className="d-flex p-1 align-items-center" style={{ borderLeft: "3px solid #303033", color:"#6F6F6F"}}>
                    {props.txt}
            </div>
        </div>
    </>
  );
};

export default Butão;
