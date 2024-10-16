const validate = require('../utils/validate')
const {LogicError} = require('../utils/errors')
const nodemailer = require('nodemailer')
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;
require('dotenv').config()

const oauth2Client = new OAuth2(
    process.env.GOOGLE_CLIENT_ID, // ClientID
    process.env.GOOGLE_CLIENT_SECRET, // Client Secret
    "https://developers.google.com/oauthplayground" // Redirect URL
);

oauth2Client.setCredentials({
    refresh_token: process.env.GOOGLE_REFRESH_TOKEN
});

const getAccessToken = (async() => {
    try {
        const accessToken = await oauth2Client.getAccessToken()
        return accessToken
    } catch (error) {
        console.error(error)
    }
});

const accessToken = getAccessToken()

const transporter = nodemailer.createTransport({
    service: "gmail",
     auth: {
          type: "OAuth2",
          user: process.env.EMAIL, 
          clientId: process.env.GOOGLE_CLIENT_ID,
          clientSecret: process.env.GOOGLE_CLIENT_SECRET,
          refreshToken: process.env.GOOGLE_REFRESH_TOKEN,
          accessToken: accessToken,
          tls: {
            rejectUnauthorized: false
          }
     }
});

const logic = {
    nodemailerSend(email, subject, text) {
        validate.arguments([
            { name: 'subject', value: subject, type: 'string', notEmpty: true },
            { name: 'text', value: text, type: 'string', notEmpty: true }
        ])
        validate.email(email)

        const message = {
            from: email,
            to: process.env.EMAIL,
            subject: `SOULMOUNTAIN.CAT --> FROM: ${email}, SUBJECT: ${subject}`,
            text,
            replyTo: email
        };

        // return (async () => {
        //     try {
        //         const response = await transporter.sendMail(message)
        //         if (response.accepted.length > 0 ) return {status:"OK", description: "email sent"}
        //         else return {status:"error", description:"error sending email"}
        //     } catch (error) {
        //         throw new Error(error.message)
        //     }
        // })();
    }
}

module.exports = logic