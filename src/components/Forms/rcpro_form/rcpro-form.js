import React, { useState } from 'react';
import FirstForm from './first-form';
import SecondForm from './second-form';
import { BsFillStarFill } from "react-icons/bs";
// export default class RcProForm extends Component {
//     state = {
//         step: 1,
//         name: '',
//         lastname: ''
//     }


//     nextStep = () => {
//         const { step } = this.state;
//         this.setState({ step: step + 1 })
//     }

//     prevStep = () => {
//         const { step } = this.state;
//         this.setState({ step: step - 1 })
//     }

//     render() {
//         const { step } = this.state;
//         switch (step) {
//             case 1:
//                 return (
//                     <>
//                         <p className="custom-p pt-2">
//                             ASSURANCE RC PROFESSIONNELLE
//                         </p>
//                         <FirstForm nextStep={this.nextStep} />
//                     </>

//                 )
//                 break;

//             case 2:
//                 return (
//                     <>
//                         <p className="custom-p pt-2">
//                             ASSURANCE RC PROFESSIONNELLE
//                         </p>
//                         <SecondForm nextStep={this.nextStep} prevStep={this.prevStep} />
//                     </>
//                 )
//                 break;

//             default:
//                 break;
//         }
//     }
// }




function RcProForm() {
    const [step, setStep] = useState(1);
    const [formDataRcPro, setformDataRcPro] = useState({
        subject: "ASSURANCE RC PROFESSIONNELLE"
    })

    function nextStep() {
        setStep(step + 1)
    }

    function prevStep() {
        setStep(step - 1)
    }

    function clearFormData() {
        setformDataRcPro({
            // offreMontatnt: offreNumbr,
            subject: "ASSURANCE RC PROFESSIONNELLE"
        })
    }

    function handledInputData(e) {

        const value = e.target.value;
        setformDataRcPro({
            ...formDataRcPro,
            [e.target.name]: value,
            // offreMontatnt: offreNumbr
        });
    }

    switch (step) {
        case 1:
            return (
                <>
                    <p className="custom-p pt-2">
                        COMPARATEUR ASSURANCE RC PROFESSIONNELLE
                    </p>
                    <FirstForm nextStep={nextStep} formDataRcPro={handledInputData} />
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
                        COMPARATEUR ASSURANCE RC PROFESSIONNELLE
                    </p>
                    <SecondForm nextStep={nextStep} prevStep={prevStep}
                        formDataRcPro={handledInputData} values={formDataRcPro}
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
export default RcProForm;






