import React from 'react';

export default function FirstForm(props) {

    function nextStep() {

        props.nextStep();

    }

    function displayYear() {
        const yearTab = []
        const year = new Date().getFullYear();
        for (let y = year; y > 1974; y--) {
            yearTab.push(y)
        }

        return yearTab;

    }

    return (
        <>
            <form onSubmit={nextStep}>
                <div className="row mb-3">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="company">Situation familiale*</label>
                            <select onChange={props.formDataSante} name="situaFam" required className="form-select input-style" aria-label="Default select example">
                                <option defaultValue value="" >Veuillez indiquer votre situation familiale</option>
                                <option value="Célibataire">Célibataire</option>
                                <option value="Marié(e)">Marié(e)</option>
                                <option value="Divorcé(e)">Divorcé(e)</option>
                                <option value="Veuf(ve)">Veuf(ve)</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="company">Nombre d'enfants à charge*</label>
                            <select onChange={props.formDataSante} name="nbEnf" required className="form-select input-style" aria-label="Default select example">
                                <option defaultValue value="" >Indiquez le nombre d'enfants à charge</option>
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
                <p className="custom-p-1 pt-2">
                    DATE DE NAISSANCE
                </p>
                <div className="row mb-3">
                    <div className="col-md-4">
                        <div className="form-group">
                            <label htmlFor="company">Jour *</label>
                            <select onChange={props.formDataSante} name="jouNaiss" required className="form-select input-style" aria-label="Default select example">
                                <option defaultValue value="" >Jour</option>
                                <option value="01">01</option>
                                <option value="02">02</option>
                                <option value="03">03</option>
                                <option value="04">04</option>
                                <option value="05">05</option>
                                <option value="06">06</option>
                                <option value="07">07</option>
                                <option value="08">08</option>
                                <option value="09">09</option>
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
                                <option value="21">21</option>
                                <option value="22">22</option>
                                <option value="23">23</option>
                                <option value="24">24</option>
                                <option value="25">25</option>
                                <option value="26">26</option>
                                <option value="27">27</option>
                                <option value="28">28</option>
                                <option value="29">29</option>
                                <option value="30">30</option>
                                <option value="31">31</option>
                            </select>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="form-group">
                            <label htmlFor="company">Mois *</label>
                            <select onChange={props.formDataSante} name="moisNaiss" required className="form-select input-style" aria-label="Default select example">
                                <option defaultValue value="" >Mois</option>
                                <option value="1">Janvier</option>
                                <option value="2">Février</option>
                                <option value="3">Mars</option>
                                <option value="4">Avril</option>
                                <option value="5">Mai</option>
                                <option value="6">Juin</option>
                                <option value="7">Juillet</option>
                                <option value="8">Août</option>
                                <option value="9">Septembre</option>
                                <option value="10">Octobre</option>
                                <option value="11">Novembre</option>
                                <option value="12">Décembre</option>
                            </select>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="form-group">
                            <label htmlFor="company">Année *</label>
                            <select onChange={props.formDataSante} name="anneNaiss" required className="form-select input-style" aria-label="Default select example">
                                <option defaultValue value="" >Année</option>
                                {displayYear().map((y) => {
                                    return <option key={y} defaultValue value={y} >{y}</option>
                                })}
                            </select>
                        </div>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-md-4">
                        <div className="form-group">
                            <label htmlFor="company">Offre 1</label>
                            <input onChange={props.formDataSante} name="offre1" readOnly type="text" value={3000 + " 0TND / Par An"} required className="form-control input-style" placeholder="0TND / Par An" />
                        </div>
                    </div>

                    <div className="col-md-4 mb-3">
                        <div className="form-group">
                            <label htmlFor="company">Offre 2</label>
                            <input onChange={props.formDataSante} name="offre2" readOnly type="text" value={3000 + " 0TND / Par An"} required className="form-control input-style" placeholder="0TND / Par An" />
                        </div>
                    </div>

                    <div className="col-md-4 mb-3">
                        <div className="form-group">
                            <label htmlFor="company">Offre 3</label>
                            <input readOnly onChange={props.formDataSante} name="offre3" type="text" value={3000 + " 0TND / Par An"} required className="form-control input-style" placeholder="0TND / Par An" />
                        </div>
                    </div>
                </div>
                <div className="text-center">
                    <button type="submit" className="btn btn-default step-button">Suivant →</button>
                </div>
            </form>
        </>)
}