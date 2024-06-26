import React from "react";
import './Footer.css'

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-5">
                        <div className="col my-5 footer-content d-flex flex-row">
                            <img className="logo-footer" src="/img/mgl-consulting-logo.png" alt="" />
                        </div>
                        <div className="col my-5 footer-content d-flex flex-row">
                            <a href="">Facebook</a>
                            <a href="">Instagram</a>
                            <a href="">Linkedin</a>
                            <a href="">Facebook</a>
                        </div>
                    </div>
                    <div className="col-3 my-5 footer-content">
                        <h3>Società</h3>
                        <ul className="list-unstyled">
                            <li><a href="#">Voce 1</a></li>
                            <li><a href="#">Voce 2</a></li>
                            <li><a href="#">Voce 3</a></li>
                        </ul>
                    </div>
                    <div className="col-3 my-5 footer-content">
                        <h3>Supporto</h3>
                        <ul className="list-unstyled text-align-start">
                            <li><a href="#">Voce 1</a></li>
                            <li><a href="#">Voce 2</a></li>
                            <li><a href="#">Voce 3</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer