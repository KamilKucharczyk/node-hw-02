import dotenv from "dotenv";
import mailgun from "mailgun-js";

dotenv.config();

const sendVerificationEmail = async (email, verificationToken) => {
  const mg = mailgun({
    apiKey: process.env.API_KEY,
    domain: process.env.DOMAIN,
  });

  const emailData = {
    to: email,
    from: "mikrobstefan@gmail.com",
    subject: "Your verification link!",
    text: "Press link to verify your account",
  };

  mg.messages().send(emailData, function (err, body) {
    if (err) {
      return console.log(err);
    }
    console.log("Email sent", body);
  });
};

export { sendVerificationEmail };
