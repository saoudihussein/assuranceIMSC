import React, { useState } from 'react';

export default function SecondForm(props) {
    const [show, setShowed] = useState(true);
    // const { formDataAuto, setFormData } = useContext(AutoContext);


    function next() {
        props.nextStep();
    }

    function back() {
        props.prevStep();
    }

    function selectEvent(e) {
        setShowed(!show);
        props.formDataAuto(e)
    }




    return (<>
        <form onSubmit={next}>
            <div className="row mb-3">
                <div className="col-md-6">
                    <div className="form-group">
                        <label htmlFor="first">Votre Véhicule est-il assuré actuellement ? *</label>
                        <select onChange={selectEvent} name="verifAssu" required className="form-select input-style" aria-label="Default select example">
                            <option defaultValue value="Oui">Oui</option>
                            <option value="Non">Non</option>
                        </select>
                    </div>
                </div>
                {show ?
                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="last">Mode de paiement *</label>
                            <select onChange={props.formDataAuto} name="modePaiement" required className="form-select input-style"
                                aria-label="Default select example">
                                <option defaultValue value="">Choisir le mode de paiement</option>
                                <option defaultValue value="Annuel">Annuel</option>
                                <option value="Semestriel">Semestriel</option>
                            </select>
                        </div>
                    </div>
                    : null}

            </div>
            {show ?
                <div className="row mb-3">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="company">Date d'échéance du contrat *</label>
                            <input onChange={props.formDataAuto} name="dateEcheance" required type="date" className="form-control input-style" />
                        </div>
                    </div>
                </div>
                : null}

            <div className="text-center">
                <button onClick={back} type="button" className="btn btn-default step-button">← Précédent</button>
                <button type="submit" className="btn btn-default step-button">Suivant →</button>
            </div>
        </form>
    </>)
}







