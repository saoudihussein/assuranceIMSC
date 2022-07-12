import React from 'react';

export default function FirstForm(props) {

    function nextStep() {

        props.nextStep();

    }

    return (
        <>
            <form onSubmit={nextStep}>
                <div className="row mb-3">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="company">Durée de séjour *</label>
                            <select onChange={props.formDataVoyage} name="dureeSejour" required className="form-select input-style" aria-label="Default select example">
                                <option defaultValue value="" >Choisissez la durée de votre séjour</option>
                                <option value="8 jours">8 jours</option>
                                <option value="15 jours">15 jours</option>
                                <option value="30 jours">30 jours</option>
                                <option value="45 jours">45 jours</option>
                                <option value="60 jours">60 jours</option>
                                <option value="90 jours">90 jours</option>
                                <option value="1 an">1 an</option>
                            </select>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="company">Destination(s) *</label>
                            <input onChange={props.formDataVoyage} name="destination" type="text" required className="form-control input-style" />
                        </div>
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col-md-4">
                        <div className="form-group">
                            <label htmlFor="company">Offre 1</label>
                            <input onChange={props.formDataVoyage} name="offre1" readOnly type="text" value={3000 + " 0TND / Par An"} required className="form-control input-style" placeholder="0TND / Par An" />
                        </div>
                    </div>

                    <div className="col-md-4 mb-3">
                        <div className="form-group">
                            <label htmlFor="company">Offre 2</label>
                            <input onChange={props.formDataVoyage} name="offre2" readOnly type="text" value={3000 + " 0TND / Par An"} required className="form-control input-style" placeholder="0TND / Par An" />
                        </div>
                    </div>

                    <div className="col-md-4 mb-3">
                        <div className="form-group">
                            <label htmlFor="company">Offre 3</label>
                            <input onChange={props.formDataVoyage} name="offre3" readOnly type="text" value={3000 + " 0TND / Par An"} required className="form-control input-style" placeholder="0TND / Par An" />
                        </div>
                    </div>
                </div>
                <div className="text-center">
                    <button type="submit" className="btn btn-default step-button">Suivant →</button>
                </div>
            </form>
        </>)
}