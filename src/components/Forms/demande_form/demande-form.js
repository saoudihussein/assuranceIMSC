import React, { useState } from 'react';
import { BiBuildings, BiPhone, BiEnvelope, BiUser } from "react-icons/bi";
import { sendEmail } from '../../../services/email';

export default function DemandeForm() {
    const [formDataDemande, setformDataDemande] = useState({
        subject: "Demandez à être rappelé(e)"
    })


    function clearFormDataDemande() {
        setformDataDemande({
            // offreMontatnt: offreNumbr,
            subject: "Demandez à être rappelé(e)"
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
        <form onSubmit={sendDemande}>
            <p className="custom-p">
                Demandez à être rappelé(e)
                <input type="hidden" id="custId" name="object" value="Demandez à être rappelé(e)" />
            </p>
            <div className="input-group mb-3 border-input shadow">
                <div className="input-group-prepend">
                    <span className="input-group-text icon">
                        <BiUser />
                    </span>
                </div>
                <input onChange={handledInputDataDemande} name="nomPrenom" required type="text" className="form-control input" placeholder='NOM & PRÉNOM' />
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
                <input onChange={handledInputDataDemande} name="telephone" type="text" className="form-control input" placeholder='TÉL' />
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
                    <option value="ASSURANCE SANTÉ">ASSURANCE SANTÉ</option>
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
    )
}
