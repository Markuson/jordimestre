const validate = require('../utils/validate')
const axios = require('axios')

const logic = {
    sendEmail(email, subject, text) {
        validate.email(email)

        validate.arguments([
            { name: 'subject', value: subject, type: 'string', notEmpty: true },
            { name: 'text', value: text, type: 'string', notEmpty: true }
        ])

        return (async () => {
            let url = `/api/contact` //FOR PRODUCTION
            // let url = `http://localhost:3000/api/contact` // FOR TESTING
            try {
                const response = await axios({
                    method: 'post',
                    url,
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    data: {
                        email,
                        subject,
                        text
                    }
                })
                return response.data
            }
            catch (e) {
                return e.message
            }
        })();

        return response;
    }
}

//TESTING
module.exports = logic

//REACT
// export default logic