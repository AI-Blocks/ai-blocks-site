const nodemailer = require('nodemailer');
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;

exports.handler = async function(event, context, callback) {
    console.log(event);

    const myOAuth2Client = new OAuth2(
        "279479169470-ilb1imlkk7et7jr906ad772b4g8h2esv.apps.googleusercontent.com",
        "Uv2JXlhRTomwvsPUnaLL1fYo",
    );

    myOAuth2Client.setCredentials({
        refresh_token: "1//04INf4Iblbx5JCgYIARAAGAQSNwF-L9Ir6tDD9KOq65hyGxVEcig9Y2CKikI3qWd4QlFzSwBTLZAN2YJK8aQvL-75dgd6-6Pq0vw"
    });

    const myAccessToken = myOAuth2Client.getAccessToken();

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            type: "OAuth2",
            user: "admin@getaiblocks.com",
            clientId: "279479169470-ilb1imlkk7et7jr906ad772b4g8h2esv.apps.googleusercontent.com",
            clientSecret: "Uv2JXlhRTomwvsPUnaLL1fYo",
            refreshToken: "1//04INf4Iblbx5JCgYIARAAGAQSNwF-L9Ir6tDD9KOq65hyGxVEcig9Y2CKikI3qWd4QlFzSwBTLZAN2YJK8aQvL-75dgd6-6Pq0vw",
            accessToken: myAccessToken
        }});

    transporter.verify((error, success) => {
        if (error) {
            console.log("TRANSPORTER ERROR:");
            console.log(error);
        }
    });

    const firstName = event.body.firstName;
    const lastName = event.body.lastName;
    const email = event.body.email;
    const message = event.body.message;
    const content = `first: ${firstName} \n last: ${lastName} \n email: ${email} \n message: ${message} `;

    const mail = {
        from: 'admin@getaiblocks.com',
        to: 'admin@getaiblocks.com',  // Change to email address that you want to receive messages on
        subject: 'New Message from Contact Form',
        text: content
    };

    transporter.sendMail(mail, (err, data) => {
        if (err) {
            return {
                error: err,
                statusCode: 400,
            };
        } else {
            return {
                statusCode: 200,
            }
        }
    })
};
