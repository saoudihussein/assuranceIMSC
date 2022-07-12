import React from 'react';

export default function FirstForm(props) {

    function nextStep() {

        props.nextStep();

    }

    function yearsConstructor() {
        const years = []
        for (let y = 2020; y > 1954; y--) {
            years.push(y)
        }
        return years;

    }

    return (
        <>
            <form onSubmit={nextStep}>
                <div className="row mb-3">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="company">Capital RC tiers non passagers *</label>
                            <select required onChange={props.formDataBateau} name='capitalRC' className="form-select input-style" aria-label="Default select example">
                                <option defaultValue value="" >Choisissez le capital à assurer</option>
                                <option value="5000 DT">5000 DT</option>
                                <option value="10000 DT">10000 DT</option>
                                <option value="15000 DT">15000 DT</option>
                                <option value="20000 DT">20000 DT</option>
                                <option value="25000 DT">25000 DT</option>
                                <option value="30000 DT">30000 DT</option>
                                <option value="40000 DT">40000 DT</option>
                                <option value="50000 DT">50000 DT</option>
                                <option value="100000 DT">100000 DT</option>

                            </select>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="company">Année de construction du bateau *</label>
                            <select onChange={props.formDataBateau} name='anneConstruc' required className="form-select input-style" aria-label="Default select example">
                                <option defaultValue value="" >Indiquez l'année de construction</option>
                                {yearsConstructor().map((year) => {
                                    return <option key={year} value={year}>{year}</option>
                                })}

                            </select>
                        </div>
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="company">Type unité *</label>
                            <select onChange={props.formDataBateau} name='typeUnite' required className="form-select input-style" aria-label="Default select example">
                                <option defaultValue value="" >Indiquez le type d'unité</option>
                                <option value="Voilier monocoque">Voilier monocoque</option>
                                <option value="Voiliers multicoques">Voiliers multicoques</option>
                                <option value="Bateau à moteur coque rigide">Bateau à moteur coque rigide</option>
                                <option value="Bateau à moteur semi-rigide ou pneumatique">Bateau à moteur semi-rigide ou pneumatique</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="company">Matériau *</label>
                            <select onChange={props.formDataBateau} name='mat' required className="form-select input-style" aria-label="Default select example">
                                <option defaultValue value="" >Veuillez indiquer le matériau de construction</option>
                                <option defaultValue value="Bois" >Bois</option>
                                <option defaultValue value="Polyester" >Polyester</option>
                                <option defaultValue value="Alu" >Alu</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col-md-4">
                        <div className="form-group">
                            <label htmlFor="company">Constructeur *</label>
                            <input onChange={props.formDataBateau} name='constructeur' type="text" required className="form-control input-style" />
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="form-group">
                            <label htmlFor="company">Puissance des moteurs *</label>
                            <input onChange={props.formDataBateau} name='puissMoteur' type="text" required className="form-control input-style" />
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="form-group">
                            <label htmlFor="company">Valeur de l'unité *</label>
                            <input onChange={props.formDataBateau} name='valeurUnite' type="text" required className="form-control input-style" />
                        </div>
                    </div>

                </div>

                <div className="row mb-3">
                    <div className="col-md-4">
                        <div className="form-group">
                            <label htmlFor="company">Offre 1</label>
                            <input onChange={props.formDataBateau} name='offre1' readOnly type="text" value={3000 + " 0TND / Par An"} required className="form-control input-style" placeholder="0TND / Par An" />
                        </div>
                    </div>

                    <div className="col-md-4 mb-3">
                        <div className="form-group">
                            <label htmlFor="company">Offre 2</label>
                            <input onChange={props.formDataBateau} name='offre2' readOnly type="text" value={3000 + " 0TND / Par An"} required className="form-control input-style" placeholder="0TND / Par An" />
                        </div>
                    </div>

                    <div className="col-md-4 mb-3">
                        <div className="form-group">
                            <label htmlFor="company">Offre 3</label>
                            <input onChange={props.formDataBateau} name='offre3' readOnly type="text" value={3000 + " 0TND / Par An"} required className="form-control input-style" placeholder="0TND / Par An" />
                        </div>
                    </div>
                </div>
                <div className="text-center">
                    <button type="submit" className="btn btn-default step-button">Suivant →</button>
                </div>
            </form>
        </>)
}