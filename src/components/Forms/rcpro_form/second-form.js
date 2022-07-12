import React from 'react';
import './second-form.css';
import { sendEmail } from '../../../services/email';

export default function SecondForm(props) {
    function send(e) {
        e.preventDefault();
        sendEmail(props.values)
        //console.log(props.values)
        props.clearFormData()
    }
    function back() {
        props.prevStep();
    }


    return (<>
        <form onSubmit={send}>
            <div className="row mb-3">
                <div className="col-md-6">
                    <div className="form-group">
                        <label htmlFor="first pb-1">Votre Nom *</label>
                        <input onChange={props.formDataRcPro} name="nom" required type="text" className="form-control input-style" placeholder="" id="company" />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form-group">
                        <label htmlFor="first">Votre Prénom *</label>
                        <input onChange={props.formDataRcPro} name="prenom" required type="text" className="form-control input-style" placeholder="" id="company" />
                    </div>
                </div>
            </div>
            <div className="row mb-3">
                <div className="col-md-6">
                    <div className="form-group">
                        <label htmlFor="company">Num. de Telephone *</label>
                        <input onChange={props.formDataRcPro} name="telephone" required type="text" className="form-control input-style" placeholder="" id="company" />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form-group">
                        <label htmlFor="company">Votre Email *</label>
                        <input onChange={props.formDataRcPro} name="email" required type="email" className="form-control input-style" placeholder="" id="company" />
                    </div>
                </div>
            </div>


            <div className="row mb-3">
                <div className="col-md-12">
                    <div className="form-group">
                        <label htmlFor="company">Gouvernorat *</label>
                        <select onChange={props.formDataRcPro} name="gouvernorat" required className="form-select input-style" aria-label="Default select example">
                            <option defaultValue value="">Indiquez votre gouvernorat</option>
                            <option value="Tunis">Tunis</option>
                            <option value="Ariana">Ariana</option>
                            <option value="Ben Arous">Ben Arous</option>
                            <option value="La Manouba">La Manouba</option>
                            <option value="Nabeul">Nabeul</option>
                            <option value="Béja">Béja</option>
                            <option value="Bizerte">Bizerte</option>
                            <option value="Gabès">Gabès</option>
                            <option value="Gafsa">Gafsa</option>
                            <option value="Jendouba">Jendouba</option>
                            <option value="Kairouan">Kairouan</option>
                            <option value="Kasserine">Kasserine</option>
                            <option value="Kébili">Kébili</option>
                            <option value="Le Kef">Le Kef</option>
                            <option value="Mahdia">Mahdia</option>
                            <option value="Médenine">Médenine</option>
                            <option value="Monastir">Monastir</option>
                            <option value="Sidi Bouzid">Sidi Bouzid</option>
                            <option value="Siliana">Siliana</option>
                            <option value="Sousse">Sousse</option>
                            <option value="Tataouine">Tataouine</option>
                            <option value="Tozeur">Tozeur</option>
                            <option value="Zaghouan">Zaghouan</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="text-center">
                <button onClick={back} type="button" className="btn btn-default step-button">← Précédent</button>
            </div>
            <div className="text-left">
                <button type="submit" className="btn btn-send-style">Economisez maintenant</button>
            </div>
        </form>
    </>)
}





