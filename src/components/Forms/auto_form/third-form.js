import React from 'react';
import './third-form.css';
import { sendEmail } from '../../../services/email';


function ThirdForm(props) {

    function back() {
        props.prevStep();
    }

    function send(e) {
        e.preventDefault();
        props.clearFormData()
        //console.log(props.values)
        sendEmail(props.values)
    }

    return (<>
        <form onSubmit={send}>
            <div className="row mb-3">
                <div className="col-md-6">
                    <div className="form-group">
                        <label htmlFor="first pb-1">Nom et Prénom *</label>
                        <input onChange={props.formDataAuto} name="nomPrenom" required type="text" className="form-control input-style" />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form-group">
                        <label htmlFor="first">Profession (pour rabais supplémentaire, si éligible) *</label>
                        <input onChange={props.formDataAuto} name="profession" required type="text" className="form-control input-style" />
                    </div>
                </div>
            </div>
            <div className="row mb-3">
                <div className="col-md-6">
                    <div className="form-group">
                        <label htmlFor="company">Email *</label>
                        <input onChange={props.formDataAuto} name="email" required type="email" className="form-control input-style" />
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="form-group">
                        <label htmlFor="company">Num. de Telephone *</label>
                        <input onChange={props.formDataAuto} name="telephone" required type="text" className="form-control input-style" />
                    </div>
                </div>
            </div>


            <div className="row mb-3">
                <div className="col-md-6">
                    <div className="form-group">
                        <label htmlFor="company">Gouvernorat *</label>
                        <select onChange={props.formDataAuto} name="gouvernorat" required className="form-select input-style" aria-label="Default select example">
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

                <div className="col-md-6">
                    <div className="form-group">
                        <label htmlFor="company">Tranche d'âge *</label>
                        <select onChange={props.formDataAuto} name="age" required className="form-select input-style" aria-label="Default select example">
                            <option defaultValue value="">Choisissez votre tranche d'âge</option>
                            <option value="18 - 25">18 - 25</option>
                            <option value="26 - 29">26 - 29</option>
                            <option value="30 - 35">30 - 35</option>
                            <option value="36 - 40">36 - 40</option>
                            <option value="41 - 45">41 - 45</option>
                            <option value="46 - 50">46 - 50</option>
                            <option value="51 - 55">51 - 55</option>
                            <option value="56 - 60">56 - 60</option>
                            <option value="61 - 64">61 - 64</option>
                            <option value="65 +">65 +</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="text-left">
                <button type="submit" className="btn btn-send-style step-button">Envoyer</button>
            </div>
        </form>

        <div className="text-center">
            <button onClick={back} type="button" className="btn btn-default step-button">← Précédent</button>
        </div>

    </>)
}

export default ThirdForm;





