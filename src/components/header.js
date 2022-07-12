import "./header.css";
import React from 'react';
import { Link } from "gatsby";
import assurances from '../images/logo-assurances.png'

const HeaderComponent = () => {
    return (

        <nav className="navbar navbar-expand-lg navbar-light  rounded pt-2" >

            <div className=" container centerNavbar ">
                <Link className="nav-link active text-uppercase" aria-current="page" to="/">
                    <img src={assurances} className="header-image img-fluid" alt="assurance.tn" />
                </Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample09" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse " id="navbarsExample09">
                    <ul className="navbar-nav me-auto mb-2 ml-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active text-uppercase" aria-current="page" href="#"></a>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active text-uppercase" aria-current="page" to="/">ACCUEIL</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active text-uppercase" aria-current="page" to="/service/assurance-auto-tunisie">AUTO</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active text-uppercase" aria-current="page" to="/service/assurance-vie">VIE</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active text-uppercase" aria-current="page" to="/service/assurance-habitation">HABITATION</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active text-uppercase" aria-current="page" to="/service/assurance-sante-en-tunisie">SANTÉ</Link>

                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active text-uppercase" aria-current="page" to="/service/assurance-retraite">RETRAITE</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active text-uppercase" aria-current="page" to="/service/assurance-rc-professionnelle">RC PRO</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active text-uppercase" aria-current="page" to="/service/assurance-voyage">VOYAGE</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active text-uppercase" aria-current="page" to="/service/assurance-bateau">BATEAU</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active text-uppercase" aria-current="page" to="/blog/">BLOG</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active text-uppercase" aria-current="page" to="/contact">CONTACT</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    );
}

export default HeaderComponent;