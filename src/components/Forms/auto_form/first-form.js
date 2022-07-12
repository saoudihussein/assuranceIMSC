import React, { useState } from 'react';



export default function FirstForm(props) {
    const [newVh, setnewVh] = useState(false);

    function nextStep() {
        
        props.nextStep();

    }

    function typeClacul(event) {

        switch (event.target.value) {
            case "basique":
                props.setCount(225.308)
                setnewVh(false)
                break;

            case "collision":
                props.setCount(225.308 * 10)
                setnewVh(false)
                break;

            case "tousrisques":
                props.setCount(225.308 * 100)
                setnewVh(true)
                break;

            default:
                break;
        }
    }





    function typeSelect(e) {
        typeClacul(e)
        props.formDataAuto(e)
    }

    return (

        <>
            <form onSubmit={nextStep}>
                <div className="row mb-3">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="first">Type d'assurance *</label>
                            <select name='assuType' required onChange={typeSelect} className="form-select input-style" aria-label="Default select example">
                                <option defaultValue value="basique">Basique</option>
                                <option value="collision">Collision</option>
                                <option value="tousrisques">Tous risques</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="last">Valeur actuelle du véhicule *</label>
                            <input onChange={props.formDataAuto} name='valAct' required type="number" className="form-control input-style" placeholder="0TND" min="5000" max="100000" />
                        </div>
                    </div>
                </div>

                {newVh ?
                    <div className="row mb-3">
                        <div className="col-md-12">
                            <div className="form-group">
                                <label htmlFor="company">Valeur à neuf du Véhicule *</label>
                                <input onChange={props.formDataAuto} name='valNeuf' required type="number" className="form-control input-style" placeholder="0TND" id="company" />
                            </div>
                        </div>
                    </div> : null}

                <div className="row mb-3">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="company">Puissance fiscale *</label>
                            <select onChange={props.formDataAuto} name='puissFisc' required className="form-select input-style" aria-label="Default select example">
                                <option defaultValue value="" >Indiquez la puissance fiscale</option>
                                <option value="5-6 CV">5-6 CV</option>
                                <option value="7-10 CV">7-10 CV</option>
                                <option value="11-14 CV">11-14 CV</option>
                                <option value="15+ CV">15+ CV</option>
                            </select>
                        </div>
                    </div>

                    <div className="col-md-6 mb-3">
                        <div className="form-group">
                            <label htmlFor="company">Classe Bonus/Malus *</label>
                            <select onChange={props.formDataAuto} required name='bounus' className="form-select input-style" aria-label="Default select example">
                                <option value="" defaultValue >Indiquez la classe Bonus/Malus</option>
                                <option value="Classe 1">Classe 1</option>
                                <option value="Classe 2">Classe 2</option>
                                <option value="Classe 3">Classe 3</option>
                                <option value="Classe 4">Classe 4</option>
                                <option value="Classe 5">Classe 5</option>
                                <option value="Classe 6">Classe 6</option>
                                <option value="Classe 7">Classe 7</option>
                                <option value="Classe 8">Classe 8</option>
                                <option value="Classe 9">Classe 9</option>
                                <option value="Classe 10">Classe 10</option>
                                <option value="Classe 11">Classe 11</option>
                            </select>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="company">Age du véhicule *</label>
                            <select onChange={props.formDataAuto} required name='ageVh' className="form-select input-style" aria-label="Default select example">
                                <option value="" defaultValue >Indiquez l'âge du véhicule</option>
                                <option value="1">1</option>
                                <option value="2"> 2</option>
                                <option value="3"> 3</option>
                                <option value="4"> 4</option>
                                <option value="5"> 5</option>
                                <option value="6"> 6</option>
                                <option value="7"> 7</option>
                                <option value="8"> 8</option>
                                <option value="9"> 9</option>
                                <option value="10"> 10</option>
                                <option value="11"> 11</option>
                                <option value="12"> 12</option>
                                <option value="13"> 13</option>
                                <option value="14"> 14</option>
                                <option value="15"> 15</option>
                                <option value="+15">+ 15</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="text-center">
                    <button type="submit" className="btn btn-default step-button">Suivant →</button>
                </div>
            </form>

        </>)
}