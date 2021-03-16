const nodemailer = require('nodemailer');
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;

function sendMail(transporter, mailOptions) {
    return new Promise(function (resolve, reject){
        transporter.sendMail(mailOptions, (err, info) => {
            if (err) {
                console.log("error: ", err);
                reject({
                    "body": err,
                    "statusCode": 400,
                });
            } else {
                console.log(`Mail sent successfully!`);
                resolve({
                    "statusCode": 200
                });
            }
        });
    });

}

exports.handler = async function(event, context, callback) {
    try {
        console.log("Trying to send message...")
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
            }
        });

        transporter.verify((error, success) => {
            if (error) {
                console.log(`[ERROR] TRANSPORTER ERROR: ${error}`);
            }
        });
        const body = JSON.parse(event.body)
        const firstName = body["firstName"];
        const lastName = body["lastName"];
        const email = body["email"];
        const message = body["message"];
        const ip = event.multiValueHeaders["Client-Ip"] || "None";
        const loc = event.headers['x-country'] || "None";
        const msg = `first: ${firstName} \n last: ${lastName} \n country: ${loc} \n ip: ${ip} \n email: ${email} \n message: ${message}`;
        const content = msg + `\n headers: ${event}`

        const mail = {
            from: 'admin@getaiblocks.com',
            to: 'admin@getaiblocks.com',  // Change to email address that you want to receive messages on
            subject: 'New Message from Contact Form',
            text: content
        };
        return await sendMail(transporter, mail);
    } catch (e) {
        console.log(`[ERR] ${e}.`)
        return {
            "body": e,
            "statusCode": 400
        }
    }
};
