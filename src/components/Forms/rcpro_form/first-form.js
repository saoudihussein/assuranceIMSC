import React, { useState } from 'react';

export default function FirstForm(props) {

    const [sepec, isSpec] = useState(false)
    const [prof, isProf] = useState(false)

    function nextStep() {

        props.nextStep();

    }

    function selectEvent(e) {
        props.formDataRcPro(e);
        switch (e.target.value) {
            case "Medicale et Paramedicale":
                isSpec(true)
                isProf(false)
                break;
            case "Autre":
                isProf(true)
                isSpec(false)
                break;

            default:
                break;
        }
        
    }

    return (
        <>
            <form onSubmit={nextStep}>
                <div className="row mb-3">
                    <div className="col-md-12">
                        <div className="form-group">
                            <label htmlFor="company">Profession *</label>
                            <select onChange={selectEvent} name="professionRC"
                                required className="form-select input-style" aria-label="Default select example">
                                <option defaultValue value="" >Veuillez Choisir votre profession </option>
                                <option value="Medicale et Paramedicale">Medicale et Paramedicale</option>
                                <option value="Autre">Autre</option>
                            </select>
                        </div>
                    </div>
                </div>


                {sepec && <div className="row mb-3">
                    <div className="col-md-12">
                        <div className="form-group">
                            <select onChange={props.formDataRcPro} name="specialite" required className="form-select input-style" aria-label="Default select example">
                                <option defaultValue value="" >Veuillez choisir votre spécialité </option>
                                <option value="Médecin généraliste">Médecin généraliste</option>
                                <option value="Chirurgien et médecin spécialiste avec pratique d'actes chirurgicaux KC> 40">Chirurgien et médecin spécialiste avec pratique d'actes chirurgicaux KC{">"} 40</option>
                                <option value="Médecin spécialiste avec pratique d'actes chirurgicaux dont Kc≤40">Médecin spécialiste avec pratique d'actes chirurgicaux dont Kc≤40</option>
                                <option value="Médecin spécialiste sans pratique d'actes chirurgicaux">Médecin spécialiste sans pratique d'actes chirurgicaux</option>
                                <option value="Dentiste ">Dentiste </option>
                                <option value="Radiologue  ">Radiologue  </option>
                                <option value="Urologue">Urologue</option>
                                <option value="Sage femme">Sage femme</option>
                                <option value="Pharmacien ">Pharmacien </option>
                                <option value="Technicien en kinésithérapie ">Technicien en kinésithérapie </option>
                                <option value="Prothésiste ">Prothésiste </option>
                                <option value="Opticien">Opticien</option>
                                <option value="Diététicien ">Diététicien </option>
                                <option value="Chirurgien esthétique">Chirurgien esthétique</option>                            </select>
                        </div>
                    </div>
                </div>}

                {prof && <div className="row mb-3">
                    <div className="col-md-12">
                        <div className="form-group">
                            <select onChange={props.formDataRcPro} name="profession2" required className="form-select input-style" aria-label="Default select example">
                                <option defaultValue value="" >Veuillez Choisir votre profession </option>
                                <option value="Avocat">Avocat</option>
                                <option value="Agent Immobilier">Agent Immobilier  </option>
                            </select>
                        </div>
                    </div>
                </div>}


                <div className="row mb-3">
                    <div className="col-md-4">
                        <div className="form-group">
                            <label htmlFor="company">Offre 1</label>
                            <input onChange={props.formDataRcPro} name="offre1" readOnly type="text" value={3000 + " 0TND / Par An"} required className="form-control input-style" placeholder="0TND / Par An" />
                        </div>
                    </div>

                    <div className="col-md-4 mb-3">
                        <div className="form-group">
                            <label htmlFor="company">Offre 2</label>
                            <input onChange={props.formDataRcPro} name="offre2" readOnly type="text" value={3000 + " 0TND / Par An"} required className="form-control input-style" placeholder="0TND / Par An" />
                        </div>
                    </div>

                    <div className="col-md-4 mb-3">
                        <div className="form-group">
                            <label htmlFor="company">Offre 3</label>
                            <input onChange={props.formDataRcPro} name="offre3" readOnly type="text" value={3000 + " 0TND / Par An"} required className="form-control input-style" placeholder="0TND / Par An" />
                        </div>
                    </div>
                </div>
                <div className="text-center">
                    <button type="submit" className="btn btn-default step-button">Suivant →</button>
                </div>
            </form>
        </>)
}