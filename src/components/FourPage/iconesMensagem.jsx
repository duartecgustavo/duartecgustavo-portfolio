import React from "react";

const IconesMensagem = () => {
  return (
    <>
        <ul className="d-flex justify-content-around" data-aos="fade-left" id="desktop">
            <li>
                <label>
                    <input type="checkbox" name=""/>
                    <div className="icon" style={{backgroundColor:"transparent"}}><i className="fa fa-gamepad" aria-hidden="true"></i></div>
                </label>
            </li>
            
            <li>
                <label>
                    <input type="checkbox" name=""/>
                    <div className="icon" style={{backgroundColor:"transparent"}}><i className="fa fa-glass" aria-hidden="true"></i>
                    </div>
                </label>
            </li>
            
            <li>
                <label>
                    <input type="checkbox" name=""/>
                    <div className="icon" style={{backgroundColor:"transparent"}}><i className="fa fa-globe" aria-hidden="true"></i>
                    </div>
                </label>
            </li>
            
            <li>
                <label>
                    <input type="checkbox" name=""/>
                    <div className="icon" style={{backgroundColor:"transparent"}}><i className="fa fa-gift" aria-hidden="true"></i>
                    </div>
                </label>
            </li>
            
            <li>
                <label>
                    <input type="checkbox" name=""/>
                    <div className="icon" style={{backgroundColor:"transparent"}}><i className="fa fa-heart" aria-hidden="true"></i>
                    </div>
                </label>
            </li>
        </ul>
    </>
  );
};

export default IconesMensagem;
