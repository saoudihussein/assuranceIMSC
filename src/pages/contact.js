import React from 'react';
import Layout from '../layout/layout';
import './contact.css';
import { HiMailOpen } from "react-icons/hi";
import { IoCallOutline } from "react-icons/io5";
import ContactForm from '../components/Forms/contact_form/contact-form';
import Helmet from 'react-helmet';
import favicon from '../images/favicon.ico';


function ContactPage() {

    return (
        <Layout>
            <Helmet htmlAttributes={{
                lang: 'fr-FR',
            }}>
                <link rel="icon" type="image/x-icon" href={favicon} />
                <title>Contact - www.assurance.tn</title>
                <meta name="description" content="+216 71 892 000 Contactez nous comparateur@assurances.tn écrivez nous" />
                <meta name="robots" content="index, follow" />
            </Helmet>
            <div className="container-fluid banner mt-3 mb-3 pb-5 pt-5">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <div className="text-center text-uppercase">
                            <h1>CONTACT</h1>
                        </div>
                    </div>
                </div>
            </div>


            <div className="container pt-5 pb-5 center d-none d-md-block">
                <div className="d-flex justify-content-center shadow pt-3 pb-3">
                    <div className='row stylePhoneNumber '>
                        <div className='col-2 pt-'>
                            <IoCallOutline size={30} color="#003478" />
                        </div>
                        <div className='col'>
                            <span className='contactP'>+216 71 892 000</span>
                            <div className='pt-2'>
                                <span className='contactSpan'>Contactez nous</span>
                            </div>
                        </div>
                    </div>
                    <div className="vrContact"></div>
                    <div className='row styleEmail'>
                        <div className='col-2 pt-2'>
                            <HiMailOpen size={30} color="#003478" />
                        </div>
                        <div className='col'>
                            <span className='contactP'>comparateur@assurances.tn</span>
                            <div className='pt-2'>
                                <span className='contactSpan'>écrivez nous</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid pt-5 pb-5 center d-block d-md-none">
                <div className=" justify-content-center shadow contactSM">
                    <div className='row stylePhoneNumber '>
                        <div className='col-12 pt-2'>
                            <IoCallOutline size={30} color="#003478" />
                            <span className='contactP'>+216 71 892 000</span>
                            <div className='pt-2'>
                                <span className='contactSpan'>Contactez nous</span>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-12 pt-2'>
                            <HiMailOpen size={30} color="#003478" />
                            <span className='contactP'>comparateur@assurances.tn</span>
                            <div className='pt-2'>
                                <span className='contactSpan'>écrivez nous</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className='container mb-5'>
                <div className='row'>
                    <ContactForm />

                    <div className="col-md-6 col-sm-12">
                        <iframe height="450"
                            title='MAP'
                            src="https://maps.google.com/maps?q=Tunisie&amp;t=m&amp;z=6&amp;output=embed&amp;iwloc=near"
                            aria-label="Tunisie" data-rocket-lazyload="fitvidscompatible"
                            className="lazyloaded responsive-iframe" data-ll-status="loaded">
                        </iframe>
                    </div>
                </div>
            </div>
        </Layout>
    )

}

export default ContactPage;