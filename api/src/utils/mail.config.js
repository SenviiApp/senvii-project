const nodemailer = require("nodemailer");
require("dotenv").config();

const mail = {
  user: process.env.USER_EMAIL,
  password: process.env.PASSWORD_EMAIL,
};

// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 587,
  tls: {
    rejectUnauthorized: false,
  },
  secure: true, // true for 465, false for other ports
  auth: {
    user: mail.user, // generated ethereal user
    pass: mail.password, // generated ethereal password
  },
});

// send mail with defined transport object
const sendEmail = async (email, token) => {
  console.log("🚀 ~ file: mail.config.js:26 ~ sendEmail ~ token", token);
  // send mail with defined transport object
  try {
    const mailOptions = {
      from: `"John Doe 👻" ${mail.user}`,
      to: email,
      subject: "Por favor, verifica tu dirección de correo electrónico",
      html: `
        <p>Por favor, haz clic en el siguiente enlace para verificar tu dirección de correo electrónico:</p>
        <a href="http://localhost:3001/api/auth/confirm/${token}">Confirm Account</a>
        <p>Si no has solicitado esta verificación, puedes ignorar este correo electrónico.</p>
      `,
    };

    const info = await transporter.sendMail(mailOptions);
    return "Sent email";
  } catch (error) {
    return "Error email";
  }
};

module.exports = {
  sendEmail,
};
