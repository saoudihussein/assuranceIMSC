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
        <form onSubmit={send} >
            <div className="row mb-3">
                <div className="col-md-6">
                    <div className="form-group">
                        <label htmlFor="first pb-1">Votre Nom *</label>
                        <input onChange={props.formDataVoyage} name="nom" required type="text" className="form-control input-style" placeholder="" id="company" />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form-group">
                        <label htmlFor="first">Votre Prénom *</label>
                        <input onChange={props.formDataVoyage} name="prenom" required type="text" className="form-control input-style" placeholder="" id="company" />
                    </div>
                </div>
            </div>
            <div className="row mb-3">
                <div className="col-md-6">
                    <div className="form-group">
                        <label htmlFor="company">Num. de Telephone *</label>
                        <input onChange={props.formDataVoyage} name="telephone" required type="text" className="form-control input-style" placeholder="" id="company" />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form-group">
                        <label htmlFor="company">Votre Email *</label>
                        <input required onChange={props.formDataVoyage} name="email" type="email" className="form-control input-style" placeholder="" id="company" />
                    </div>
                </div>
            </div>


            <div className="row mb-3">
                <div className="col-md-6">
                    <div className="form-group">
                        <label htmlFor="company">Gouvernorat *</label>
                        <select onChange={props.formDataVoyage} name="gouvernorat" required className="form-select input-style" aria-label="Default select example">
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
                        <label htmlFor="company">Tranche d'Age (une surprime supplémentaire est applicable à partir de 65 ans) *</label>
                        <select onChange={props.formDataVoyage} name="trancheAge" required className="form-select input-style" aria-label="Default select example">
                            <option defaultValue value="">Veuillez choisir votre tranche d'âge</option>
                            <option value="18 - 25">18 - 25</option>
                            <option value="26 - 29">26 - 29</option>
                            <option value="30 - 35">30 - 35</option>
                            <option value="36 - 40">36 - 40</option>
                            <option value="41 - 45">41 - 45</option>
                            <option value="46 - 50">46 - 50</option>
                            <option value="51 - 55">51 - 55</option>
                            <option value="56 - 60">56 - 60</option>
                            <option value="61 - 64">61 - 64</option>
                            <option value="65 - 69">65 - 69</option>
                            <option value="70 - 74">70 - 74</option>
                            <option value="75 - 79">75 - 79</option>
                            <option value="80 +">80 +</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="col-md-12">
                <div className="form-group">
                    <label htmlFor="company">Profession (pour rabais supplémentaire, si éligible) *</label>
                    <input onChange={props.formDataVoyage} name="profession" required type="text" className="form-control input-style" placeholder="" />
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





