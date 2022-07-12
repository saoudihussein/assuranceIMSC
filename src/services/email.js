import axios from 'axios';
export const sendEmail = async (form_data) => {


    const data = JSON.stringify(form_data);

    axios.post(`http://localhost/sendmail/sendmail.php`,
        {
            data: data
        })
        .then(res => {
            console.log(res);
            console.log(res.data);
        }).catch(error => {
            console.log(error);
        })


};