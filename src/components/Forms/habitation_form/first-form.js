import React from 'react';
export default function FirstForm(props) {

    function nextStep() {
        props.nextStep();
    }
    return (
        <>
            <form onSubmit={nextStep}>
                <div className="row mb-3">
                    <div className="col-md-4">
                        <div className="form-group">
                            <label htmlFor="company">Type d'habitation *</label>
                            <select onChange={props.formDataHabitation} name='typeHab' required className="form-select input-style" aria-label="Default select example">
                                <option defaultValue value="" >Veuillez indiquer votre type d'habitation</option>
                                <option value="Appartement">Appartement</option>
                                <option value="Villa">Villa</option>
                                <option value="Villa Jumelée">Villa Jumelée</option>
                                <option value="Duplex">Duplex</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="form-group">
                            <label htmlFor="company">Nombre de pièces *</label>
                            <select onChange={props.formDataHabitation} name='nbPiece' required className="form-select input-style" aria-label="Default select example">
                                <option defaultValue value="" >Veuillez indiquer le nombre de pièces</option>
                                <option value="S+0">S+0</option>
                                <option value="S+1">S+1</option>
                                <option value="S+2">S+2</option>
                                <option value="S+3">S+3</option>
                                <option value="S+4">S+4</option>
                                <option value="S+5">S+5</option>
                                <option value="S+6">S+6</option>
                                <option value="S+7">S+7</option>
                                <option value="S+8">S+8</option>
                                <option value="S+9">S+9</option>
                                <option value="S+10">S+10</option>
                            </select>

                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="form-group">
                            <label htmlFor="company">Capital Mobilier *</label>
                            <select onChange={props.formDataHabitation} name='captMobilier' required className="form-select input-style" aria-label="Default select example">
                                <option value="" defaultValue >Veuillez indiquer le montant du capital immobilier</option>
                                <option value="5 000">5 000</option>
                                <option value="10 000">10 000</option>
                                <option value="15 000">15 000</option>
                                <option value="20 000">20 000</option>
                                <option value="25 000">25 000</option>
                                <option value="30 000">30 000</option>
                                <option value="40 000">40 000</option>
                                <option value="50 000">50 000</option>
                                <option value="60 000">60 000</option>
                                <option value="70 000">70 000</option>
                                <option value="80 000">80 000</option>
                                <option value="90 000">90 000</option>
                                <option value="100 000">100 000</option>
                            </select>

                        </div>
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col-md-4">
                        <div className="form-group">
                            <label htmlFor="company">Offre 1</label>
                            <input onChange={props.formDataHabitation} name='offre1' readOnly type="text" value={3000 + " 0TND / Par An"} required className="form-control input-style" placeholder="0TND / Par An" />
                        </div>
                    </div>

                    <div className="col-md-4 mb-3">
                        <div className="form-group">
                            <label htmlFor="company">Offre 2</label>
                            <input onChange={props.formDataHabitation} name='offre2' readOnly type="text" value={3000 + " 0TND / Par An"} required className="form-control input-style" placeholder="0TND / Par An" />
                        </div>
                    </div>

                    <div className="col-md-4 mb-3">
                        <div className="form-group">
                            <label htmlFor="company">Offre 3</label>
                            <input onChange={props.formDataHabitation} name='offre3' readOnly type="text" value={3000 + " 0TND / Par An"} required className="form-control input-style" placeholder="0TND / Par An" />
                        </div>
                    </div>
                </div>
                <div className="text-center">
                    <button type="submit" className="btn btn-default step-button">Suivant →</button>
                </div>
            </form>
        </>)
}