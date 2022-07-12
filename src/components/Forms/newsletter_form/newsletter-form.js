import React, { useState } from "react";
import { sendEmail } from '../../../services/email';

export default function NewsletterForm() {
    const [formDataNewsletter, setformDataNewsletter] = useState({
        subject: "NEWSLETTER"
    })


    function clearFormData() {
        setformDataNewsletter({
            // offreMontatnt: offreNumbr,
            subject: "NEWSLETTER"
        })
    }


    function send(e) {
        e.preventDefault();
        sendEmail(formDataNewsletter)
        //console.log(props.values)
        clearFormData()
    }

    function handledInputData(e) {

        const value = e.target.value;
        setformDataNewsletter({
            ...formDataNewsletter,
            [e.target.name]: value,
            // offreMontatnt: offreNumbr
        });
    }
    return (
        <form onSubmit={send}>
            <div className="controls">
                <div className="row">
                    <div className="col-md-7">
                        <div className="form-group">
                            <label htmlFor="form_name" className='pb-4 youEmail'>Votre email</label>
                            <input onChange={handledInputData} name="email" id="form_name" type="email" className="form-control " placeholder="Votre email" required="required" data-error="Firstname is required." />
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
    )
}