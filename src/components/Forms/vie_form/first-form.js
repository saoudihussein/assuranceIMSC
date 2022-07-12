import React from 'react';

export default function FirstForm(props) {

    //const [offreNumbre, setCount] = useState(225.308);


    function nextStep() {

        props.nextStep();

    }

    return (
        <>
            <form onSubmit={nextStep}>
                <div className="row mb-3">
                    <div className="col-md-4">
                        <div className="form-group">
                            <label htmlFor="company">Date de naissance*</label>
                            <input onChange={props.formDataVie} name="dateNaiss" required type="date" min='1899-01-01' max='2000-13-13' className="form-control input-style" id="company" />
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="form-group">
                            <label htmlFor="company">Durée du crédit en années *</label>
                            <select onChange={props.formDataVie} name="dureeCredit" required className="form-select input-style" aria-label="Default select example">
                                <option defaultValue value="" >Veuillez indiquer la durée du crédit</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="">8</option>
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
                                <option value="21">21</option>
                                <option value="22">22</option>
                                <option value="23">23</option>
                                <option value="24">24</option>
                                <option value="25">25</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="form-group">
                            <label htmlFor="company">TMM+*</label>
                            <select onChange={props.formDataVie} name="TMM+" required className="form-select input-style" aria-label="Default select example">
                                <option value="" defaultValue >Taux auquel vous empruntez</option>
                                <option value="TMM+0">TMM+0</option>
                                <option value="TMM+0.25">TMM+0.25</option>
                                <option value="TMM+0.5">TMM+0.5</option>
                                <option value="TMM+0.75">TMM+0.75</option>
                                <option value="TMM+1">TMM+1</option>
                                <option value="TMM+1.5">TMM+1.5</option>
                                <option value="TMM+1.75">TMM+1.75</option>
                                <option value="TMM+2">TMM+2</option>
                                <option value="TMM+2.5">TMM+2.5</option>
                                <option value="TMM+3">TMM+3</option>
                                <option value="TMM+3.25">TMM+3.25</option>
                                <option value="TMM+3.5">TMM+3.5</option>
                                <option value="TMM+4">TMM+4</option>
                                <option value="TMM+4.25">TMM+4.25</option>
                                <option value="TMM+4.5">TMM+4.5</option>
                                <option value="TMM+4.75">TMM+4.75</option>
                                <option value="TMM+5">TMM+5</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="company">Banque *</label>
                            <select onChange={props.formDataVie} name="banque" required className="form-select input-style" aria-label="Default select example">
                                <option defaultValue value="" >Veuillez indiquer l'organisme préteur</option>
                                <option value="ABC BANK">ABC BANK</option>
                                <option value="ALBARAKA BANK">ALBARAKA BANK</option>
                                <option value="AMEN BANK">AMEN BANK</option>
                                <option value="ATB">ATB</option>
                                <option value="ATTIJARI BANK">ATTIJARI BANK</option>
                                <option value="BFPME">BFPME</option>
                                <option value="BFT">BFT</option>
                                <option value="BH">BH</option>
                                <option value="BIAT">BIAT</option>
                                <option value="BNA">BNA</option>
                                <option value="BT">BT</option>
                                <option value="BTE">BTE</option>
                                <option value="BTK">BTK</option>
                                <option value="BTL">BTL</option>
                                <option value="BTS">BTS</option>
                                <option value="CITIBANK">CITIBANK</option>
                                <option value="NAIB">NAIB</option>
                                <option value="QNB">QNB</option>
                                <option value="STB">STB</option>
                                <option value="UBCI">UBCI</option>
                                <option value="UIB">UIB</option>
                                <option value="WIFAK BANK">WIFAK BANK</option>
                                <option value="ZITOUNA BANQUE">ZITOUNA BANQUE</option>
                            </select>
                        </div>
                    </div>

                    <div className="col-md-6 mb-3">
                        <div className="form-group">
                            <label htmlFor="company">Montant du crédit *</label>
                            <input onChange={props.formDataVie} name="montantCredit" type="number" required min={10000} className="form-control input-style" placeholder="0TND" id="company" />
                        </div>
                    </div>
                </div>
                <div className="text-center">
                    <button type="submit" className="btn btn-default step-button">Suivant →</button>
                </div>
            </form>
        </>)
}