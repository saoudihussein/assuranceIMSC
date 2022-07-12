import React, { useState } from 'react';
import { sendEmail } from '../../../services/email';


export default function ContactForm() {


    const [formDataContact, setformDataContact] = useState({
        subject: "CONTACT"
    })

    function send(e) {
        e.preventDefault();
        sendEmail(formDataContact)
        console.log(formDataContact)
        //props.clearFormData()
    }

    function handledInputData(e) {

        const value = e.target.value;
        setformDataContact({
            ...formDataContact,
            [e.target.name]: value,
        });
    }

    return (
        <div className='col-md-6 col-sm-12'>
            <form id="contactForm" onSubmit={send}>
                <div className="mb-3">
                    <input className="form-control contactInput" onChange={handledInputData} name='nomPrenom' type="text" placeholder="Nom et Prénom " required />
                </div>
                <div className="mb-3">
                    <input className="form-control contactInput" onChange={handledInputData} name="email" type="email" placeholder="e-mail " required />
                </div>
                <div className="mb-3">
                    <input className="form-control contactInput" onChange={handledInputData} name="numTel" type="text" placeholder="Num. Tél" required />
                </div>
                <div className="mb-3">
                    <textarea cols="30" rows="5" className="form-control contactInput" onChange={handledInputData} name="message" placeholder="Message" required></textarea>
                </div>
                <button type="submit" className="btn btn-primary-contact">Envoyer</button>

            </form>
        </div>
    )


}