import React, { useState } from "react";
import Layout from "../layout/layout";

import { BiRightArrowAlt } from "react-icons/bi";
import './service.css';
import { Link } from "gatsby";
import PaginationTem from "../components/paginations/paginationTem";
import autoService from '../images/service-auto.png';
import vieService from '../images/Assurance-vie-1.png';
import habitationService from '../images/service_habitation.png';
import retraiteService from '../images/retraite-service.png';
import rcProfService from '../images/rc-profess.png';
import santeService from '../images/service_sante.png';
import voyageService from '../images/travel-service.png';
import bateauService from '../images/boat-service.png';




export default function ServicePage(props) {
    const services = [
        {
            "id": 1,
            "title": "ASSURANCE BATEAU",
            "text": "Avant de prendre la mer, il faut se prémunir contre les risques de dommages que peut subir votre bateau.",
            "pic": bateauService,
            "path": "/service/assurance-bateau"
        },

        {
            "id": 2,
            "title": "ASSURANCE VOYAGE",
            "text": "Afin de vous permettre de voyager en toute sérénité, n'oubliez pas de souscrire une assurance voyage avant votre départ.",
            "pic": voyageService,
            "path": "/service/assurance-voyage"
        },

        {
            "id": 3,
            "title": "ASSURANCE RC PROFESSIONNELLE",
            "text": "assurance.tn vous oriente vers l'assureur le plus apte à couvrir votre responsabilité professionnelle au meilleur prix.",
            "pic": rcProfService,
            "path": "/service/assurance-rc-professionnelle"
        },

        {
            "id": 4,
            "title": "ASSURANCE RETRAITE",
            "text": "Pensez à épargner pour votre retraite dès les premières années de votre carrière.",
            "pic": retraiteService,
            "path": "/service/assurance-retraite"
        },
        {
            "id": 5,
            "title": "ASSURANCE SANTÉ",
            "text": "Protégez vous ainsi que les membres de votre famille contre toute éventuelle dépense de santé imprévisible.",
            "pic": santeService,
            "path": "/service/assurance-sante-en-tunisie"
        },
        {
            "id": 6,
            "title": "ASSURANCE HABITATION",
            "text": "Que vous soyez locataire ou propriétaire, protégez votre maison ainsi que vos meubles qui vous sont chers.",
            "pic": habitationService,
            "path": "/service/assurance-habitation"
        },
        {
            "id": 7,
            "title": "ASSURANCE VIE",
            "text": "Vous cherchez le meilleur tarif pour une assurance vie, assurance.tn vous aide à trouver la meilleure offre du marché.",
            "pic": vieService,
            "path": "/service/assurance-vie"
        },
        {
            "id": 8,
            "title": "ASSURANCE AUTO",
            "text": "Pour choisir la formule la plus adaptée à vos besoins, comparez les offres d'assurances auto grâce à assurance.tn",
            "pic": autoService,
            "path": "/service/assurance-auto-tunisie"
        }

    ]

    


    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(3);



    const pageNumber = [];

    for (let index = 1; index <= Math.ceil(services.length / postsPerPage); index++) {
        pageNumber.push(index);

    }

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;

    const currentPosts = services.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = number => {

        setCurrentPage(number)
    }

    const nextPage = () => {

        if (currentPage < Math.ceil(services.length / postsPerPage)) {
            setCurrentPage(currentPage + 1)
        }
    }

    const previousPage = () => {

        if (currentPage > 1) {
            setCurrentPage(currentPage - 1)
        }
    }


    return (
        <Layout>
            <div className="container-fluid banner mt-3 mb-1 pb-5 pt-5">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <div className="text-center text-uppercase">
                            <h1><span className="col-sm-6">ARCHIVES :</span> SERVICES</h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid mb-5 pb-5">
                <div className="d-flex justify-content-center pb-5">
                    <div className="card serviceCard">
                        {currentPosts.map((item) => {
                            return (

                                <div key={item.id} className="row no-gutters mt-5">
                                    <div className="col-auto">
                                        <Link to={item.path}><img src={item.pic} className="img-fluid service-img" alt={item.title} /></Link>
                                    </div>
                                    <div className="col">
                                        <div className="card-block px-2">
                                            <Link className="btn" to={item.path}><h4 className="card-title">{item.title}</h4></Link>
                                            <p className="card-text customP w-75">{item.text}</p>
                                            <Link to={item.path} className="btn btn-learn-more text-uppercase">Learn more <BiRightArrowAlt /></Link>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
            <div className="container-fluid mb-5 pb-5">


                <PaginationTem pageNumber={pageNumber} previousPage={previousPage} paginate={paginate} nextPage={nextPage} />
            </div>

        </Layout>
    )

}