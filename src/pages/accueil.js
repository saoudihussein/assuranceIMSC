import './accueil.css';
import React, { useState } from 'react';
import Layout from '../layout/layout';
import { Link } from 'gatsby';
import auto from '../images/AUTO-4.png';
import vie from '../images/vie.png';
import habitation from '../images/habitation.png';
import sante from '../images/sante.png';
import retraite from '../images/retraite.png';
import rcPro from '../images/RC-PRO.png';
import voyage from '../images/voyage.png';
import bateau from '../images/BATEAU-1.png';
import homePic from '../images/homePage.webp';
import autoService from '../images/service-auto.png';
import vieService from '../images/Assurance-vie-1.png';
import habitationService from '../images/service_habitation.png';
import retraiteService from '../images/retraite-service.png';
import rcProfService from '../images/rc-profess.png';
import santeService from '../images/service_sante.png';
import voyageService from '../images/travel-service.png';
import bateauService from '../images/boat-service.png';
import { BiCalendarAlt } from "react-icons/bi";
import quote from '../images/quote_image.webp';
import Lloyd from '../images/Lloyd-assurance.webp';
import carte from '../images/carte-750x465.webp';
import automobile from '../images/ass-automobile.webp';
import AssuranceVie from '../images/Assurance-vie-300x248.webp';
import hab from '../images/hab-300x200.jpg';
import santeass from '../images/sante-300x200.jpg';
import retraiteass from '../images/retraite-300x200.jpg';
import doctorass from '../images/doctors-300x177.jpg';
import voyageass from '../images/voyage-300x200.jpg';
import boatass from '../images/boat-300x200.jpg';
import favicon from '../images/favicon.ico';
import { FiPhoneCall } from "react-icons/fi";
import DemandeForm from '../components/Forms/demande_form/demande-form';
import Helmet from 'react-helmet';
import { sendEmail } from '../services/email';
import { BiBuildings, BiPhone, BiEnvelope, BiUser } from "react-icons/bi";
import parse from 'html-react-parser';



const AcceuilPage = (props) => {

    const [formDataNewsletter, setformDataNewsletter] = useState({
        subject: "NEWSLETTER"
    })

    function clearFormDataNewsLetter() {
        setformDataNewsletter({
            // offreMontatnt: offreNumbr,
            subject: "NEWSLETTER"
        })
    }


    function sendNewsLetter(e) {
        e.preventDefault();
        sendEmail(formDataNewsletter)
        //console.log(props.values)
        clearFormDataNewsLetter()
    }

    function handledInputDataNewsLetter(e) {

        const value = e.target.value;
        setformDataNewsletter({
            ...formDataNewsletter,
            [e.target.name]: value,
            // offreMontatnt: offreNumbr
        });
    }


    const [formDataDemande, setformDataDemande] = useState({
        subject: "Demandez ?? ??tre rappel??(e)"
    })


    function clearFormDataDemande() {
        setformDataDemande({
            // offreMontatnt: offreNumbr,
            subject: "Demandez ?? ??tre rappel??(e)"
        })
    }


    function sendDemande(e) {
        e.preventDefault();
        sendEmail(formDataDemande)
        //console.log(formDataDemande)
        clearFormDataDemande()
    }

    function handledInputDataDemande(e) {

        const value = e.target.value;
        setformDataDemande({
            ...formDataDemande,
            [e.target.name]: value,
            // offreMontatnt: offreNumbr
        });
    }

    return (
        <Layout>
            <Helmet htmlAttributes={{
                lang: 'fr-FR',
            }}>
                <link rel="icon" type="image/x-icon" href={favicon} />
                <title>Comparateur d&#039;assurances en tunisie - Assurance.tn</title>
                <meta name="description" content="Comparateur d'assurances en tunisie En quelques clics seulement, assurance.tn vous permet d'obtenir la meilleure offre du march??." />
                <meta name="robots" content="index, follow" />
            </Helmet>






            <div className='container-fluid-backgroundI-image'>

                <div className='container transparentImage'>
                    <div className='pl-3'>
                        <div className='container pl-5 pt-5 pb-5'>
                            <div className="container">
                                <div className="row">
                                    <div className="col align-self-start ">
                                        <div className='textSlide rotateInUpLeft '>
                                            comparez maintenant et commencez ?? faire
                                        </div>

                                        <div className='textSlide rotateInUpLeft  pt-4'>
                                            des ??conomies sur vos contrats d'assurances
                                        </div>

                                        <div className='textSlide-2 pt-4'>

                                            <div className="vl pl-2 fadeInUp ">
                                                <div className='margin'>
                                                    <div >La grantie des meilleurs prix parmi les compagnies</div>
                                                    <div>d'assurances les plus s??rieuses</div>

                                                </div>

                                            </div>

                                            <div className="container pb-5 pt-2 d-none d-lg-block ">

                                                <div className="row ">
                                                    <div className="col">
                                                        <Link aria-current="page"
                                                            to="/service/assurance-auto-tunisie">
                                                            <img src={auto} className="craousel-Links"
                                                                alt='Assurance Auto' />
                                                        </Link>
                                                    </div>
                                                    <div className="col">
                                                        <Link aria-current="page"
                                                            to="/service/assurance-vie">
                                                            <img src={vie} className="craousel-Links"
                                                                alt='Assurance Vie' />
                                                        </Link>
                                                    </div>
                                                    <div className="col">
                                                        <Link aria-current="page" to="/service/assurance-habitation">
                                                            <img src={habitation} className="craousel-Links"
                                                                alt='Assurance Habitation' />
                                                        </Link>

                                                    </div>
                                                    <div className="col">
                                                        <Link aria-current="page" to="/service/assurance-sante-en-tunisie">
                                                            <img src={sante} className="craousel-Links"
                                                                alt='Assurance Sant??' />
                                                        </Link>

                                                    </div>
                                                    <div className="col">

                                                    </div>
                                                    <div className="col">

                                                    </div>
                                                    <div className="col">

                                                    </div>
                                                    <div className="col">

                                                    </div>
                                                </div>


                                                <div className="row pt-2">
                                                    <div className="col">
                                                        <Link aria-current="page" to="/service/assurance-retraite">
                                                            <img src={retraite} className="craousel-Links"
                                                                alt='Assurance Retraite' />
                                                        </Link>

                                                    </div>
                                                    <div className="col">
                                                        <Link aria-current="page" to="/service/assurance-rc-professionnelle">
                                                            <img src={rcPro} className="craousel-Links"
                                                                alt='Assurance RC Pro' />
                                                        </Link>
                                                    </div>
                                                    <div className="col">
                                                        <Link aria-current="page" to="/service/assurance-voyage">
                                                            <img src={voyage} className="craousel-Links"
                                                                alt='Assurance Voyage' />
                                                        </Link>

                                                    </div>
                                                    <div className="col">
                                                        <Link aria-current="page" to="/service/assurance-bateau">
                                                            <img src={bateau} className="craousel-Links"
                                                                alt='Assurance Bateau' />
                                                        </Link>

                                                    </div>
                                                    <div className="col">

                                                    </div>
                                                    <div className="col">

                                                    </div>
                                                    <div className="col">

                                                    </div>
                                                    <div className="col">

                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>

            <div className="container pt-4 pb-5 zoomInUp">
                <div className="row justify-content-md-center">
                    <div className="col-lg-2 col-md-12 paiment">
                        VOUS PAYEZ TROP CHER POUR VOS CONTRATS D'ASSURANCE ?</div>
                    <div className="col-lg-4 d-none d-lg-block d-xl-block d-xxl-block">
                        <div className="vl-paiment pl-2 mt-5">
                        </div>
                    </div>

                    <div className="col-lg-4 d-block d-lg-none d-xl-none d-xxl-none ">
                        La garantie des meilleurs prix avec le plus large choix du march??.
                    </div>
                </div>
            </div>



            <div className='container-fluid pb-5 d-block d-lg-none d-xl-none d-xxl-none'>

                <div className='row pb-5'>
                    <div className='col-sm-12 col-md-6'>
                        <div className="card text-center h-100 border-style" >
                            <div className="text-center">
                                <img src={automobile} className="rounded img-fluid home-service-mobile" alt="ASSURANCE AUTO" />
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">ASSURANCE AUTO</h5>
                                <p className="card-text p-style">Pour choisir la formule la plus adapt??e ?? vos besoins, comparez les offres d???assurances auto avec <a href="http://assurance.tn/service/assurance-rc-professionnelle/">Assurances.tn</a></p>
                                <Link aria-current="page"
                                    to="/service/assurance-auto-tunisie">
                                    <button className="btn btn-style">Comparez</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className='col-sm-12 col-md-6'>
                        <div className="card h-100 text-center border-style" >
                            <div className="text-center">
                                <img src={AssuranceVie} className="rounded img-fluid home-service-mobile" alt="ASSURANCE VIE" />
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">ASSURANCE VIE</h5>
                                <p className="card-text p-style">
                                    Que vous pensez ?? contracter un cr??dit, ou tout simplement vous voulez
                                    vous prot??ger contre les al??as de la vie,
                                    assurance.tn vous simplifie la vie en vous trouvant la meilleure offre du march??.
                                </p>
                                <Link aria-current="page"
                                    to="/service/assurance-vie">
                                    <button className="btn btn-style">Comparez</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='row pb-5'>
                    <div className='col-sm-12 col-md-6'>
                        <div className="card text-center h-100 border-style" >
                            <div className="text-center">
                                <img src={hab} className="rounded img-fluid home-service-mobile" alt="ASSURANCE HABITATION" />
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">ASSURANCE HABITATION</h5>
                                <p className="card-text p-style">Que vous soyez locataire ou propri??taire, prot??gez votre maison ainsi que vos meubles qui vous sont chers. </p>
                                <Link aria-current="page"
                                    to="/service/assurance-habitation">
                                    <button className="btn btn-style">Comparez</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className='col-sm-12 col-md-6'>
                        <div className="card h-100 text-center border-style" >
                            <div className="text-center">
                                <img src={santeass} className="rounded img-fluid home-service-mobile" alt="ASSURANCE SANT??" />
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">ASSURANCE SANT??</h5>
                                <p className="card-text p-style">
                                    Parce que votre sant?? et celle de vos proches sont importantes, et que les d??penses relatives aux soins sont de plus en plus ??lev??s pensez ?? souscrire une assurance sant??.
                                </p>
                                <Link aria-current="page"
                                    to="/service/assurance-sante-en-tunisie">
                                    <button className="btn btn-style">Comparez</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='row pb-5'>
                    <div className='col-sm-12 col-md-6'>

                        <div className="card text-center h-100 border-style" >
                            <div className="text-center">
                                <img src={retraiteass} className="rounded img-fluid home-service-mobile" alt="ASSURANCE RETRAITE" />
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">ASSURANCE RETRAITE</h5>
                                <p className="card-text p-style">
                                    Parce qu???une retraite se pr??pare ?? l???avance et qu???il est pr??f??rable de commencer ?? ??pargner d??s les premi??res ann??es de sa carri??re, pensez ?? souscrire un contrat d?????pargne retraite le plus t??t possible.
                                </p>
                                <Link aria-current="page"
                                    to="/service/assurance-retraite">
                                    <button className="btn btn-style">Comparez</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className='col-sm-12 col-md-6'>
                        <div className="card h-100 text-center border-style" >
                            <div className="text-center">
                                <img src={doctorass} className="rounded img-fluid home-service-mobile" alt="ASSURANCE RC PROFESSIONNELLE" />
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">ASSURANCE RC PROFESSIONNELLE</h5>
                                <p className="card-text p-style">
                                    <a href="https://assurance.tn">Assurances.tn</a> vous oriente vers l???assureur le plus apte ?? couvrir votre responsabilit?? professionnelle au meilleur prix.
                                </p>
                                <Link aria-current="page"
                                    to="/service/assurance-rc-professionnelle">
                                    <button className="btn btn-style">Comparez</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='row pb-5'>
                    <div className='col-sm-12 col-md-6'>
                        <div className="card text-center h-100 border-style" >
                            <div className="text-center">
                                <img src={voyageass} className="rounded img-fluid home-service-mobile" alt="ASSURANCE VOYAGE" />
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">ASSURANCE VOYAGE</h5>
                                <p className="card-text p-style">
                                    Afin de vous permettre de voyager en toute s??r??nit??, pensez ?? souscrire un contrat d???assurance voyage avant votre d??part.
                                </p>
                                <Link aria-current="page"
                                    to="/service/assurance-bateau">
                                    <button className="btn btn-style">Comparez</button>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className='col-sm-12 col-md-6'>
                        <div className="card text-center h-100 border-style" >
                            <div className="text-center">
                                <img src={boatass} className="rounded img-fluid home-service-mobile" alt="ASSURANCE BATEAU" />
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">ASSURANCE BATEAU</h5>
                                <p className="card-text p-style">
                                    Avant de prendre la mer, il faut se pr??munir contre les risques des dommages que peut subir votre bateau ainsi que des dommages que vous pourriez occasionner aux autres.
                                </p>
                                <Link aria-current="page"
                                    to="/service/assurance-bateau">
                                    <button className="btn btn-style">Comparez</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>


            </div>



            <div className='container-fluid-offre mb-5  '>
                <div className="container mb-5">
                    <div className="row object ">


                        <div className="col-sm-12 d-block d-lg-none d-xl-none fadeInUp d-flex justify-content-center">
                            <div className="col">
                                <img src={homePic}
                                    className="home-pic img-fluid rounded "
                                    alt="assurance" />
                            </div>
                        </div>

                        <div className="col-sm-12 d-none d-lg-block d-xl-block d-xxl-block col-lg-6 col-xl-6 border fadeInUp">
                            <div className="col">
                                <img src={homePic}
                                    className="img-fluid img rounded home-pic"
                                    alt="assurance" />
                            </div>
                        </div>

                        <div className="  col-sm-12  col-lg-6 col-xl-6 mt-5 fadeInUp-2">
                            <p className="text-start text-offre">OBTENEZ RAPIDEMENT</p>

                            <div className='text-offre'>
                                L'OFFRE LA PLUS ADAPT??E ??
                            </div>

                            <div className='text-offre'>
                                VOS BESOINS
                            </div>

                            <div className='text-offre-p'>
                                Le comparateur d'assurance assurance.tn vous permet d'obtenir la meilleure offre du march?? en quelques clics seulement.
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container w-75 pb-4 d-none d-lg-block d-xl-block d-xxl-block fadeInUp-3'>
                <div className='row'>

                    <div className='col'>
                        <div className="card shadow">
                            <div className="card-body">
                                <h5 className="card-title font-weight-bold">ASSURANCE AUTO</h5>
                                <div className='row '>
                                    <div className='col-3'>
                                        <img src={autoService} className="rounded float-start assurance-service-lg" alt="ASSURANCE AUTO" />
                                    </div>
                                    <div className='col customP'>
                                        Pour choisir la formule la plus adapt??e ?? vos besoins, comparez les offres d'assurances auto gr??ce ?? assurance.tn
                                        <div className='pt-2'>
                                            <Link aria-current="page"
                                                to="/service/assurance-auto-tunisie" className="customLink">COMPAREZ MAINTENANT</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className='col'>
                        <div className="card shadow">
                            <div className="card-body">
                                <h5 className="card-title font-weight-bold">ASSURANCE VIE</h5>

                                <div className='row '>
                                    <div className='col-3'>
                                        <img src={vieService} className="rounded float-start assurance-service-lg" alt="ASSURANCE VIE" />
                                    </div>

                                    <div className='col customP'>
                                        Vous cherchez le meilleur tarif pour une assurance vie, assurance.tn vous aide ?? trouver la meilleure offre du march??.
                                        <div className='pt-2'>
                                            <Link aria-current="page"
                                                to="/service/assurance-vie/" className="customLink">COMPAREZ MAINTENANT</Link>
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>

                <div className='row pt-5'>

                    <div className='col'>
                        <div className="card shadow">
                            <div className="card-body">
                                <h5 className="card-title font-weight-bold">ASSURANCE HABITATION</h5>
                                <div className='row '>
                                    <div className='col-3'>
                                        <img src={habitationService} className="rounded float-start assurance-service-lg" alt="ASSURANCE HABITATION" />
                                    </div>
                                    <div className='col customP'>
                                        Que vous soyez locataire ou propri??taire, prot??gez votre maison ainsi que vos meubles qui vous sont chers.
                                        <div className='pt-2'>
                                            <Link aria-current="page"
                                                to="/service/assurance-habitation/" className="customLink">COMPAREZ MAINTENANT</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className='col'>
                        <div className="card shadow">
                            <div className="card-body">
                                <h5 className="card-title font-weight-bold">ASSURANCE SANT??</h5>

                                <div className='row '>
                                    <div className='col-3'>
                                        <img src={santeService} className="rounded float-start assurance-service-lg" alt="ASSURANCE SANT??" />
                                    </div>

                                    <div className='col customP'>
                                        Prot??gez vous ainsi que les membres de votre famille contre toute ??ventuelle d??pense de sant?? impr??visible.
                                        <div className='pt-2'>
                                            <Link aria-current="page"
                                                to="/service/assurance-sante-en-tunisie/" className="customLink">COMPAREZ MAINTENANT</Link>
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>

                <div className='row pt-5'>

                    <div className='col'>
                        <div className="card shadow h-100 pb-3">
                            <div className="card-body">
                                <h5 className="card-title font-weight-bold">ASSURANCE RETRAITE</h5>
                                <div className='row '>
                                    <div className='col-3'>
                                        <img src={retraiteService} className="rounded float-start assurance-service-lg" alt="ASSURANCE RETRAITE" />
                                    </div>
                                    <div className='col customP'>
                                        Pensez ?? ??pargner pour votre retraite d??s les premi??res ann??es de votre carri??re.
                                        <div className='pt-2'>
                                            <Link aria-current="page"
                                                to="/service/assurance-retraite/" className="customLink">COMPAREZ MAINTENANT</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className='col'>
                        <div className="card shadow">
                            <div className="card-body">
                                <h5 className="card-title font-weight-bold">ASSURANCE RC PROFESSIONNELLE</h5>

                                <div className='row '>
                                    <div className='col-3'>
                                        <img src={rcProfService} className="rounded float-start assurance-service-lg" alt="ASSURANCE RC PROFESSIONNELLE" />
                                    </div>

                                    <div className='col customP'>
                                        assurance.tn vous oriente vers l'assureur le plus apte ?? couvrir votre responsabilit?? professionnelle au meilleur prix.
                                        <div className='pt-2'>
                                            <Link aria-current="page"
                                                to="/service/assurance-rc-professionnelle/" className="customLink">COMPAREZ MAINTENANT</Link>
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>

                <div className='row pt-5'>

                    <div className='col'>
                        <div className="card shadow">
                            <div className="card-body">
                                <h5 className="card-title font-weight-bold">ASSURANCE VOYAGE</h5>
                                <div className='row '>
                                    <div className='col-3'>
                                        <img src={voyageService} width="70" height="70" className="rounded float-start" alt="ASSURANCE VOYAGE" />
                                    </div>
                                    <div className='col customP'>
                                        Afin de vous permettre de voyager en toute s??r??nit??, n'oubliez pas de souscrire une assurance voyage avant votre d??part.
                                        <div className='pt-2'>
                                            <Link aria-current="page"
                                                to="/service/assurance-voyage/" className="customLink">COMPAREZ MAINTENANT</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='col'>
                        <div className="card shadow">
                            <div className="card-body">
                                <h5 className="card-title font-weight-bold">ASSURANCE BATEAU</h5>

                                <div className='row '>
                                    <div className='col-3'>
                                        <img src={bateauService} className="rounded img-fluid float-start assurance-service-lg" alt="ASSURANCE BATEAU" />
                                    </div>

                                    <div className='col customP'>
                                        Avant de prendre la mer, il faut se pr??munir contre les risques de dommages que peut subir votre bateau.
                                        <div className='pt-2'>
                                            <Link aria-current="page"
                                                to="/service/assurance-bateau/" className="customLink">COMPAREZ MAINTENANT</Link>
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container-fluid contact-us'>
                <div className="d-flex justify-content-center pt-5 ">

                    <h2 className="contact-us-title text-center align-middle">
                        Contactez nous  <br /> et souscrivez ?? notre newsletter
                    </h2>
                </div>

                <div className='container w-75 pb-5 pt-5  '>
                    <div className='row'>
                        <div className='col-sm-12 col-md-12 col-lg-6 col-xl-6'>
                            <div className="card shadow contactBox h-100">
                                <div className="card-body">
                                    <div className="d-flex align-items-center justify-content-center pt-5">
                                        <div className='col-3 ' style={{ color: 'white' }}>
                                            <FiPhoneCall size={50} />
                                        </div>
                                        <div className='col-8'>

                                            <div className='contactText'>Contactez Nous</div>
                                            <div className='phoneNumb'>+216 71 892 000</div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-sm-12 col-md-12 col-lg-6 col-xl-6 pt-1'>
                            <div className="card shadow contactBox h-100">
                                <div className="card-body">
                                    <div className="page-hero d-flex align-items-center justify-content-center">
                                        <div className='col'>
                                            <form onSubmit={sendNewsLetter}>
                                                <div className="controls">
                                                    <div className="row">
                                                        <div className="col-md-7">
                                                            <div className="form-group">
                                                                <label htmlFor="form_name" className='pb-4 youEmail'>Votre email</label>
                                                                <input onChange={handledInputDataNewsLetter} name="email" id="form_name" type="email" className="form-control " placeholder="Votre email" required="required" data-error="Firstname is required." />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row pt-4">
                                                        <div className="col-md-12">
                                                            <button type="submit" className="btn btn-send pt-2 btn-block sendMail">Envoyer</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>



            </div>

            <div className="container pt-4 pb-5 center">
                <div className="d-flex justify-content-center">
                    <div className="row">
                        <div className='comp-title col-12 comp col-lg-6 pt-4 d-flex justify-content-end'>
                            <p className='w-75'>COMPARATEUR D'ASSURANCES 100% GRATUIT</p>
                        </div>
                        <div className='col-1 d-none d-lg-block'>
                            <div className="vl-paiment-comp  pl-1 mt-4"></div>
                        </div>
                        <div className='col-12 col-lg-3 pt-4 textComparateur'>
                            <a href="https://www.assurances.tn">Assurance.tn</a>, un Comparateur d'assurance 100% gratuit et sans engagement. Pour choisir la formule la plus adapt??e ?? vos besoins.
                        </div>
                    </div>
                </div>
            </div>

            <div className='container-fluid demande'>
                <div className='container w-75 pb-5 pt-5  '>
                    <div className='row'>
                        <div className='col-sm-12 col-md-12 col-lg-6 col-xl-6'>
                            <div className="card shadow  h-100">
                                <div className="card-body">
                                    <div className=" justify-content-center pt-4">
                                        <form onSubmit={sendDemande}>
                                            <p className="custom-p">
                                                Demandez ?? ??tre rappel??(e)
                                                <input type="hidden" id="custId" name="object" value="Demandez ?? ??tre rappel??(e)" />
                                            </p>
                                            <div className="input-group mb-3 border-input shadow">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text icon">
                                                        <BiUser />
                                                    </span>
                                                </div>
                                                <input onChange={handledInputDataDemande} name="nomPrenom" required type="text" className="form-control input" placeholder='NOM & PR??NOM' />
                                            </div>

                                            <div className="input-group mb-3 border-input shadow">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text icon">
                                                        <BiEnvelope />
                                                    </span>
                                                </div>
                                                <input onChange={handledInputDataDemande} name="email" required type="email" className="form-control input" placeholder='EMAIL' />
                                            </div>

                                            <div className="input-group mb-3 border-input shadow">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text icon">
                                                        <BiPhone />
                                                    </span>
                                                </div>
                                                <input onChange={handledInputDataDemande} name="telephone" type="text" className="form-control input" placeholder='T??L' />
                                            </div>

                                            <div className="input-group mb-3 border-input shadow">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text icon-selet">
                                                        <BiBuildings />
                                                    </span>
                                                </div>
                                                <select onChange={handledInputDataDemande} name="typeAssurance" required className="form-select select" >
                                                    <option value="" defaultValue>TYPE D'ASSURANCE</option>
                                                    <option value="ASSURANCE AUTO">ASSURANCE AUTO</option>
                                                    <option value="ASSURANCE VIE">ASSURANCE VIE</option>
                                                    <option value="ASSURANCE HABITATION">ASSURANCE HABITATION</option>
                                                    <option value="ASSURANCE SANT??">ASSURANCE SANT??</option>
                                                    <option value="ASSURANCE RETRAITE">ASSURANCE RETRAITE</option>
                                                    <option value="ASSURANCE RC PROFESSIONNELLE">ASSURANCE RC PROFESSIONNELLE</option>
                                                    <option value="ASSURANCE VOYAGE">ASSURANCE VOYAGE</option>
                                                    <option value="ASSURANCE BATEAU">ASSURANCE BATEAU</option>
                                                </select>
                                            </div>
                                            <div className="d-grid gap-2">
                                                <button className="btn btn-primary" type="submit">
                                                    ECONOMISEZ MAINTENANT</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-sm-12 col-md-12 col-lg-6 col-xl-6'>
                            <div className=" h-100">
                                <div className="card-body">
                                    <div className="page-hero d-flex align-items-center justify-content-center">
                                        <p className='commence w-75'>
                                            COMMENCEZ ?? ??CONOMISER D??S MAINTENANT
                                        </p>
                                    </div>
                                    <div className="page-hero d-flex align-items-center justify-content-center">
                                        <p className='commence-min w-75'>
                                            <a href="https://www.assurance.tn/">assurance.tn</a> le comparateur
                                            d'assurance avis??.
                                        </p>
                                    </div>


                                    <div className="page-hero d-flex align-items-center justify-content-center">
                                        <p className='commence-min w-75'>
                                            <img src={quote} className="img-fluid home-pic-1" alt="Comparateur" />
                                        </p>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container blog  mt-3 pb-3 '>
                <div className="container">
                    <div className="row text-center align-middle">
                        <div className="col-lg-8  col-md-12 col-sm-12  ">
                            <div className="txt-blog mt-4">
                                <p>D??couvrez notre blog et suivez l???actualit?? de l???assurance en Tunisie</p>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-12 col-sm-12 mt-4 txt-blog">
                            <a href="#link" className="btn btn-outline-primary " role="button">VOIR LE BLOG</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container mt-3 pb-2'>
                <div className="row align-middle">
                    <div className='col-sm-12 col-md-6 col-lg-4 col-xl-4 animation-test'>
                        <div className="card h-100">
                            <div className='text-center'>
                                <img src={automobile} className="card-img-top rounded img-fluid" alt="ASSURANCE AUTOMOBILE" />
                            </div>
                            <div className="card-body" >
                                <p className="card-text-style"><span><BiCalendarAlt /></span>  <span>1 JUILLET 2020</span></p>
                                <p className='last-style'>ASSURANCE AUTOMOBILE : AUGMENTATION DES TARIFS VOL ET INCENDIE</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-sm-12 col-md-6 col-lg-4 col-xl-4 animation-test'>
                        <div className="card h-100">
                            <div className='text-center'>
                                <img src={carte} className="card-img-top rounded img-fluid" alt="CARTE ASSURANCES" />
                            </div>
                            <div className="card-body">
                                <p className="card-text-style"><span><BiCalendarAlt /></span>  <span> 19 JUIN 2020</span></p>
                                <p className='last-style'>CARTE ASSURANCES : LA SIGNATURE ??LECTRONIQUE AU C??UR DE LA</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-sm-12 col-md-6 col-lg-4 col-xl-4 animation-test'>
                        <div className="card h-100">
                            <div className='text-center'>
                                <img src={Lloyd} className="card-img-top rounded img-fluid" alt="LLOYD ASSURANCES" />
                            </div>
                            <div className="card-body">
                                <p className="card-text-style"><span><BiCalendarAlt /></span>  <span> 11 AVRIL 2020</span></p>
                                <p className='last-style'>COVID-19: LLOYD ASSURANCES FAIT DON DE 1,5 MD AU FONDS</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </Layout >
    )
}

export default AcceuilPage;