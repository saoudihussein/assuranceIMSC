import React, { useState } from 'react';
import Layout from '../../layout/layout';
import AutoForm from "../../components/Forms/auto_form/auto-form";
import BateauForm from '../../components/Forms/bateau_form/bateau-form';
import HabitationForm from '../../components/Forms/habitation_form/habitation-form';
import RcProForm from '../../components/Forms/rcpro_form/rcpro-form';
import RetraiteForm from '../../components/Forms/retraite_form/retraite_form';
import SanteForm from '../../components/Forms/sante_form/sante-form';
import VieForm from "../../components/Forms/vie_form/vie-form";
import VoyageForm from '../../components/Forms/voyage_form/voyage-form';

import './assurance-auto-tunisie.css';
import './assurance-bateau.css';
import './assurance-habitation.css';
import './assurance-rc-professionnelle.css';
import './assurance-retraite.css';
import './assurance-sante-en-tunisie.css';
import './assurance-vie.css';
import './assurance-voyage.css';

import Helmet from 'react-helmet';
import favicon from '../../images/favicon.ico';
import parse from 'html-react-parser';

const TempalteAssurance = (props) => {
    const { content } = props.pageContext;
    const { title } = props.pageContext;
    const { titleMeta } = props.pageContext;
    const { metaDesc } = props.pageContext;

    return (
        <Layout>

            <Helmet htmlAttributes={{
                lang: 'fr-FR',
            }}>
                <link rel="icon" type="image/x-icon" href={favicon} />
                <title>{titleMeta}</title>
                <meta name="description" content={metaDesc} />
                <meta name="robots" content="index, follow" />
            </Helmet>

            <div className="container-fluid banner mt-3 mb-3 pb-5 pt-5">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <div className="text-center text-uppercase">
                            <h1>{title}</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className='form-container pt-5 pb-5'>

                <div className='container w-75 mb-5 pt-4 mt-3 form-style '>
                    {(() => {

                        switch (title) {
                            case 'ASSURANCE AUTO':
                                return (
                                    <AutoForm />
                                )
                            case 'ASSURANCE BATEAU':
                                return (
                                    <BateauForm />
                                )

                            case 'ASSURANCE HABITATION':
                                return (
                                    <HabitationForm />
                                )
                            case 'ASSURANCE RC PROFESSIONNELLE':
                                return (
                                    <RcProForm />
                                )
                            case 'ASSURANCE RETRAITE':
                                return (
                                    <RetraiteForm />
                                )
                            case 'ASSURANCE SANTÉ':
                                return (
                                    <SanteForm />
                                )
                            case 'ASSURANCE VIE':
                                return (
                                    <VieForm />
                                )
                            case 'ASSURANCE VOYAGE':
                                return (
                                    <VoyageForm />
                                )
                            default:
                        }

                    })()}

                </div>
            </div>

            {parse(content)}

        </Layout>
    )
}

export default TempalteAssurance;