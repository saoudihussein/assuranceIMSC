import React, { useState } from 'react';
import FirstForm from './first-form';
import SecondForm from './second-form';
import ThirdForm from './third-form';
import CountUp from 'react-countup';
import { BsFillStarFill } from "react-icons/bs";


function AutoForm() {
    const [step, setStep] = useState(1);
    const [offreNumbr, setCount] = useState(225.308);
    const [formDataAuto, setformDataAuto] = useState({
        assuType: "basique",
        verifAssu: "Oui",
        subject: "ASSURANCE AUTO"
    })

    function nextStep() {
        setStep(step + 1)
    }

    function prevStep() {
        setStep(step - 1)
    }

    function clearFormData() {
        setformDataAuto({
            assuType: "basique",
            verifAssu: "Oui",
            offreMontatnt: offreNumbr,
            subject: "ASSURANCE AUTO"
        })
    }

    function handledInputData(e) {

        const value = e.target.value;
        setformDataAuto({
            ...formDataAuto,
            [e.target.name]: value,
            offreMontatnt: offreNumbr
        });
    }

    switch (step) {
        case 1:
            return (
                <>
                    <p className="custom-p pt-2">
                        COMPARATEUR ASSURANCE AUTO TOURISME
                    </p>
                    <FirstForm nextStep={nextStep} formDataAuto={handledInputData}
                        setCount={setCount} />
                    <div className='row mt-4'>
                        <div className='col-12'>
                            <p className='best-offre'> Meilleure Offre</p>
                        </div>
                        <div className='col-12'>
                            <p className='numbre-offre'>
                                <CountUp
                                    style={{ marginRight: "10px" }}
                                    end={offreNumbr}
                                    separator=" " decimals={3}
                                    decimal=","
                                    duration={1} />
                                <span>TND</span>
                            </p>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-12' >
                            <BsFillStarFill size={14} color={'yellow'} />
                            <BsFillStarFill style={{ marginLeft: "10px" }} size={14} color={'yellow'} />
                            <BsFillStarFill style={{ marginLeft: "10px" }} size={14} color={'yellow'} />
                            <BsFillStarFill style={{ marginLeft: "10px" }} size={14} color={'yellow'} />
                            <BsFillStarFill style={{ marginLeft: "10px" }} size={14} color={'yellow'} />
                        </div>

                        <div className='col-12'>
                            <p style={{ color: '#193656', fontSize: '16px', fontWeight: 'bold' }}>
                                22 Avis</p>
                        </div>
                    </div>
                </>
            )
            break;

        case 2:
            return (
                <>
                    <p className="custom-p pt-2">
                        COMPARATEUR ASSURANCE AUTO TOURISME
                    </p>
                    <SecondForm nextStep={nextStep} prevStep={prevStep}
                        formDataAuto={handledInputData} />
                    <div className='row mt-4'>
                        <div className='col-12'>
                            <p className='best-offre'> Meilleure Offre</p>
                        </div>

                        <div className='col-12'>
                            <p className='numbre-offre'>
                                <CountUp
                                    style={{ marginRight: "10px" }}
                                    end={offreNumbr}
                                    separator=" " decimals={3}
                                    decimal=","
                                    duration={1} />
                                <span>TND</span>
                            </p>

                        </div>
                    </div>

                    <div className='row'>
                        <div className='col-12' >
                            <BsFillStarFill size={14} color={'yellow'} />
                            <BsFillStarFill style={{ marginLeft: "10px" }} size={14} color={'yellow'} />
                            <BsFillStarFill style={{ marginLeft: "10px" }} size={14} color={'yellow'} />
                            <BsFillStarFill style={{ marginLeft: "10px" }} size={14} color={'yellow'} />
                            <BsFillStarFill style={{ marginLeft: "10px" }} size={14} color={'yellow'} />
                        </div>

                        <div className='col-12'>
                            <p style={{ color: '#193656', fontSize: '16px', fontWeight: 'bold' }}>22 Avis</p>
                        </div>
                    </div>
                </>
            )
            break;

        case 3:
            return (
                <>
                    <p className="custom-p pt-2">
                        COMPARATEUR ASSURANCE AUTO TOURISME
                    </p>
                    <ThirdForm formDataAuto={handledInputData}
                        values={formDataAuto} clearFormData={clearFormData} />
                    <div className='row mt-4'>
                        <div className='col-12'>
                            <p className='best-offre'> Meilleure Offre</p>
                        </div>

                        <div className='col-12'>
                            <p className='numbre-offre'>
                                <CountUp
                                    style={{ marginRight: "10px" }}
                                    end={offreNumbr}
                                    separator=" " decimals={3}
                                    decimal=","
                                    duration={1}
                                />
                                <span>TND</span>
                            </p>

                        </div>
                    </div>

                    <div className='row'>
                        <div className='col-12' >
                            <BsFillStarFill size={14} color={'yellow'} />
                            <BsFillStarFill style={{ marginLeft: "10px" }} size={14} color={'yellow'} />
                            <BsFillStarFill style={{ marginLeft: "10px" }} size={14} color={'yellow'} />
                            <BsFillStarFill style={{ marginLeft: "10px" }} size={14} color={'yellow'} />
                            <BsFillStarFill style={{ marginLeft: "10px" }} size={14} color={'yellow'} />
                        </div>

                        <div className='col-12'>
                            <p style={{ color: '#193656', fontSize: '16px', fontWeight: 'bold' }}>22 Avis</p>
                        </div>
                    </div>
                </>
            )
            break;

        default:
            break;
    }
}

export default AutoForm;





