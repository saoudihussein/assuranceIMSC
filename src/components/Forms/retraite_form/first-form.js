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
                            <label htmlFor="company">Date de naissance *</label>
                            <input onChange={props.formDataRetraite} name="dateNaiss" type="date" required className="form-control input-style" />
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="form-group">
                            <label htmlFor="company">Situation familiale *</label>
                            <select onChange={props.formDataRetraite} name="situationFam" required className="form-select input-style" aria-label="Default select example">
                                <option defaultValue value="" >Veuillez indiquer votre situation familiale</option>
                                <option value="Célibataire">Célibataire</option>
                                <option value="Marié(e)">Marié(e)</option>
                                <option value="Divorcé(e)">Divorcé(e)</option>
                                <option value="Veuf(ve)">Veuf(ve)</option>
                            </select>

                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="form-group">
                            <label htmlFor="company">Enfant(s) à charge *</label>
                            <select onChange={props.formDataRetraite} name="nbEnfant" required className="form-select input-style" aria-label="Default select example">
                                <option value="" defaultValue >Indiquez le nombre d'enfants à charge</option>
                                <option value="0">0</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5 et plus">5 et plus</option>
                            </select>

                        </div>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-md-4">
                        <div className="form-group">
                            <label htmlFor="company">Salaire mensuel Net *</label>
                            <select onChange={props.formDataRetraite} name="samMensuel" required className="form-select input-style" aria-label="Default select example">
                                <option defaultValue value="" >Veuillez indiquer votre salaire</option>
                                <option value="Inferieur - 1 000 DT">Inferieur - 1 000 DT</option>
                                <option value="1 000 DT - 1 500 DT">1 000 DT - 1 500 DT</option>
                                <option value="1 500 DT - 2 000 DT">1 500 DT - 2 000 DT</option>
                                <option value="2 000 DT - 2 500 DT">2 000 DT - 2 500 DT</option>
                                <option value="2 500 DT - 3 000 DT">2 500 DT - 3 000 DT</option>
                                <option value="3 000 DT - 3 500 DT">3 000 DT - 3 500 DT</option>
                                <option value="3 500 DT - 4 000 DT">3 500 DT - 4 000 DT</option>
                                <option value="4 000 DT - 4 500 DT">4 000 DT - 4 500 DT</option>
                                <option value="4 500 DT - 5 000 DT">4 500 DT - 5 000 DT</option>
                                <option value="+5000DT">+5000DT</option>
                            </select>

                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="form-group">
                            <label htmlFor="company">Nombre de salaires/an *</label>
                            <select onChange={props.formDataRetraite} name="nbSalaire" required className="form-select input-style" aria-label="Default select example">
                                <option defaultValue value="" >Veuillez indiquer le nombre de salaires par an</option>
                                <option value="12">12</option>
                                <option value="13">13</option>
                                <option value="14">14</option>
                                <option value="15">15</option>
                                <option value="16">16</option>
                                <option value="17">17</option>
                            </select>

                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="form-group">
                            <label htmlFor="company">Durée du plan (ans) *</label>
                            <select onChange={props.formDataRetraite} name="dureePlan" required className="form-select input-style" aria-label="Default select example">
                                <option value="" defaultValue >Veuillez indiquer la durée du plan désiré</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                                <option value="11">11</option>
                                <option value="12">12</option>
                                <option value="13">13</option>
                                <option value="14">14</option>
                                <option value="15">15</option>
                                <option value="16">16</option>
                                <option value="17">17</option>
                                <option value="18">18</option>
                                <option value="19">19</option>
                                <option value="20">20</option>
                            </select>

                        </div>
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="company">Montant de l'épargne Mensuelle *</label>
                            <input onChange={props.formDataRetraite} name="montantEpargne" type="numbre" placeholder='0TND' required className="form-control input-style" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="company">Fractionnement *</label>
                            <select onChange={props.formDataRetraite} name="fractionnement" required className="form-select input-style" aria-label="Default select example">
                                <option value="" defaultValue >Veuillez indiquer la fréquence de vos versements</option>
                                <option value="Annuel">Annuel</option>
                                <option value="Semestriel">Semestriel</option>
                                <option value="Trimestriel">Trimestriel</option>
                                <option value="Mensuel">Mensuel</option>
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