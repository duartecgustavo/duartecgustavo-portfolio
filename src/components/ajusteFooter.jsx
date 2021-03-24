import React from 'react';

// Importação imagens
import GithubLogo from '../assets/barra-lateral/github.svg';
import LinkedinLogo from '../assets/barra-lateral/linkedin.svg';
import EmailLogo from '../assets/barra-lateral/email.svg';
import WppLogo from '../assets/barra-lateral/wpp.svg';
// import ChangeLanguage from '../assets/barra-lateral/change-language.svg';
// import Group from '../assets/barra-lateral/Group.svg';
import GoTop from '../assets/barra-lateral/top.svg';

const SideBarTop = () => {
    return (
        <>
                    <div className="row">
            <div className="ajusteFooter d-flex container-fluid justify-content-around align-items-center" id="phone">

                <div className="d-flex justify-content-around align-items-center">
                    <a href="https://github.com/duartecgustavo" className="d-flex justify-content-center" target="_blanck"><img className="img-fluid iconRedes" src={GithubLogo} /></a>
                    <a href="https://www.linkedin.com/in/gustavo-castanho-duarte-578127160/" className="d-flex justify-content-center" target="_blanck"><img className="img-fluid iconRedes" src={LinkedinLogo} /></a>
                    <a href="mailto:duartecgustavo@outlook.com" className="d-flex justify-content-center" target="_blanck"><img className="img-fluid iconRedes" src={EmailLogo} /></a>
                    <a href="https://api.whatsapp.com/send?phone=5511993758665&text=Ol%C3%A1,%20vamos%20conversar%20sobre%20tecnologia?" className="d-flex justify-content-center" target="_blanck"><img className="img-fluid iconRedes" src={WppLogo} /></a>
                </div>
                <div className="d-flex justify-content-around align-items-center">
                    <a href="#topo" className="d-flex justify-content-center">
                        <img className="img-fluid iconConfig" style={{ width: "70%" }} src={GoTop} />
                    </a>
                </div>
                </div>
            </div>
        </>
    )
}

export default SideBarTop;