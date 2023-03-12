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
  // send mail with defined transport object
  try {
    const mailOptions = {
      from: `"Senvii 🤖" ${mail.user}`,
      to: email,
      subject: "Por favor, verifica tu dirección de correo electrónico",
      html: `
        <p>Por favor, haz clic en el siguiente enlace para verificar tu dirección de correo electrónico:</p>
        <a href="senvii/api/auth/confirm?token=${token}.com" target="_blank">Confirm Account</a>
        <p>Si no has solicitado esta verificación, puedes ignorar este correo electrónico.</p>
        <p>Saludos,</p>
        <p>Senvii</p>
      `,
    };

    const info = await transporter.sendMail(mailOptions);
    return "Sent email";
  } catch (error) {
    return "Error email";
  }
};

// send mail with defined transport object
const sendEmailToResetPassword = async (email, link) => {
  // send mail with defined transport object
  try {
    const mailOptions = {
      from: `"Senvii 🤖" ${mail.user}`,
      to: email,
      subject: "Cambio de contraseña",
      html: `
        <p>Hola,</p>
        <p>Recibes este correo electrónico porque has solicitado cambiar tu contraseña. Haz clic en el siguiente enlace para ir a la página de cambio de contraseña:</p>
        <a href="${link}" target="_blank">Cambiar Contraseña</a>
        <p>Si no has solicitado cambiar tu contraseña, puedes ignorar este correo electrónico.</p>
        <p>Saludos,</p>
        <p>Senvii</p>
      `,
    };

    const info = await transporter.sendMail(mailOptions);
    return "Sent email";
  } catch (error) {
    return "Error email";
  }
};

// send mail with defined transport object
const sendEmailToNotifyPdf = async (name, email, link) => {
  try {
    const mailOptions = {
      from: `"Senvii 🤖" ${mail.user}`,
      to: email,
      subject: "Diagnóstico vial generado",
      html: `
        <html>
          <head>
            <meta charset="utf-8" />
            <title>Diagnóstico vial generado</title>
          </head>
          <body>
            <p>Hola ${name},</p>
            <p>Le informamos que se ha generado un diagnóstico vial en formato PDF para su consulta.</p>
            <p>Puede descargar el PDF en el siguiente enlace:</p>
            <a href="${link}" target="_blank">Descargar PDF</a>
            <p>Saludos,</p>
            <p>Senvii</p>
          </body>
        </html>
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
  sendEmailToResetPassword,
  sendEmailToNotifyPdf,
};
