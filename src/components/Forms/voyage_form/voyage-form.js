import React, { useState } from 'react';
import FirstForm from './first-form';
import SecondForm from './second-form';
import { BsFillStarFill } from "react-icons/bs";


function VieForm() {
    const [step, setStep] = useState(1);
    const [formDataVoyage, setformDataVoyage] = useState({
        subject: "ASSURANCE VOYAGE"
    })

    function nextStep() {
        setStep(step + 1)
    }

    function prevStep() {
        setStep(step - 1)
    }

    function clearFormData() {
        setformDataVoyage({
            // offreMontatnt: offreNumbr,
            subject: "ASSURANCE VOYAGE"
        })
    }

    function handledInputData(e) {

        const value = e.target.value;
        setformDataVoyage({
            ...formDataVoyage,
            [e.target.name]: value,
            // offreMontatnt: offreNumbr
        });
    }

    switch (step) {
        case 1:
            return (
                <>
                    <p className="custom-p pt-2">
                        COMPARATEUR ASSURANCE VOYAGE
                    </p>
                    <FirstForm nextStep={nextStep} formDataVoyage={handledInputData} />
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
                        COMPARATEUR ASSURANCE VOYAGE
                    </p>
                    <SecondForm nextStep={nextStep} prevStep={prevStep}
                        formDataVoyage={handledInputData} values={formDataVoyage}
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





