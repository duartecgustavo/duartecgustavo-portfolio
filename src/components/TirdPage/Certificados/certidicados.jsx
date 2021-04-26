import React from "react";

import RecodePro from "./certificados/Certificado-Recode-Pro.png"
import HackthonRecodePro from "./certificados/Certificado-Hackthon-Recode-Pro-2020.png"
import Etec from "./certificados/Certificado-ETEC.png"
import TecExp from "./certificados/Certificado-Tecnologias-Exponenciais.png"
import GestImpc from "./certificados/Gestão-Projetos-Impacto-Recode.png"
import CVJavascript from "./certificados/Certificado-Javascript-Curso-em-video.png"
import CVPython1 from "./certificados/Certificado-Curso-Video-Python-Mundo-1.png"
import CVPython2 from "./certificados/Certificado-Curso-Video-Python-Mundo-2.png"

const Certificados = () => {
    return (
        <>
            <div className="modal fade" id="siteModal" tabindex="-1" role="dialog">
                <div className="modal-dialog" role="document">
                    <div className="modal-content" style={{ backgroundColor: "#F5F5F5" }}>
                        <div className="modal-header">
                            <h5 className="modal-title" style={{ color: "#7D50F9" }}>Meus Certificados</h5>
                            <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body" style={{ borderTop: "1px solid #7D50F9", borderBottom: "1px solid #7D50F9" }}>
                            <div className="my-2 shadow">
                                <img src={RecodePro} className="img-fluid" />
                            </div>
                            <div className="my-2 shadow">
                                <img src={Etec} className="img-fluid" />
                            </div>
                            <div className="my-2 shadow">
                                <img src={CVJavascript} className="img-fluid" />
                            </div>
                            <div className="my-2 shadow">
                                <img src={CVPython1} className="img-fluid" />
                            </div>
                            <div className="my-2 shadow">
                                <img src={CVPython2} className="img-fluid" />
                            </div>
                            <div className="my-2 shadow">
                                <img src={HackthonRecodePro} className="img-fluid" />
                            </div>
                            <div className="my-2 shadow">
                                <img src={TecExp} className="img-fluid" />
                            </div>
                            <div className="my-2 shadow">
                                <img src={GestImpc} className="img-fluid" />
                            </div>

                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Sair</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Certificados;
