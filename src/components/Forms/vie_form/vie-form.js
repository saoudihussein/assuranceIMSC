import React, { useState } from 'react';
import FirstForm from './first-form';
import SecondForm from './second-form';
import { BsFillStarFill } from "react-icons/bs";

function VieForm() {
    const [step, setStep] = useState(1);
    const [formDataVie, setformDataVie] = useState({
        subject: "ASSURANCE VIE"
    })

    function nextStep() {
        setStep(step + 1)
    }

    function prevStep() {
        setStep(step - 1)
    }

    function clearFormData() {
        setformDataVie({
            // offreMontatnt: offreNumbr,
            subject: "ASSURANCE VIE"
        })
    }

    function handledInputData(e) {

        const value = e.target.value;
        setformDataVie({
            ...formDataVie,
            [e.target.name]: value,
            // offreMontatnt: offreNumbr
        });
    }
 
    switch (step) {
        case 1:
            return (
                <>
                    <p className="custom-p pt-2">
                        COMPARATEUR ASSURANCE VIE
                    </p>
                    <FirstForm nextStep={nextStep} formDataVie={handledInputData} />
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
                        COMPARATEUR ASSURANCE VIE
                    </p>
                    <SecondForm nextStep={nextStep} prevStep={prevStep}
                        formDataVie={handledInputData} values={formDataVie}
                        clearFormData={clearFormData} />
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
export default VieForm;





