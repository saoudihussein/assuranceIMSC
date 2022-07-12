import "./footer.css";
import { format } from 'date-fns'
import React from 'react';
import { Link } from "gatsby";
import assurances from '../images/logo-assurances.png'



const FooterComponent = () => {
    return (<footer className="footer-section">
        <div className="copyright-area">
            <div className="container">
                <div className="row justify-content-md-center">
                    <div className="col col-lg-2 mt-3">
                        <div className="copyright-text">
                            <p>&copy;{format(new Date(), 'yyyy')} assurance.tn</p>
                        </div>
                    </div>
                    <div className="col-md-auto">

                    </div>
                    <div className="col col-lg-2">
                        <div className="copyright-text">
                            <Link aria-current="page" to="/accueil">
                                <img className="footer-image img-fluid" src={assurances} alt="assurance.tn" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>)
}

export default FooterComponent;