import React from 'react';

const Footer = () => {
    return (
        <>
            <div className="d-flex row">
                <div className="footerSideBar"></div>
                <div className="py-3 footer">
                    <div className="container-fluid d-flex h-100 align-items-center justify-content-center"  style={{}}>
                        <img className="" src="imgs/dv.gif" width="40px" style={{marginRight:"10px", marginBottom:"10px"}}/>
                        <h5 style={{color:" #c4c4c4", fontFamily:"Segoe UI', Tahoma, Geneva, Verdana, sans-serif", fontWeight:"500"}}>Desenvolvido por Gustavo Castanho</h5>
                        <div className="coracao" style={{color:" #c4c4c4"}}></div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;