const express = require('express');
const nodemailer = require('nodemailer');
const app = express();
const port = 3000;

// Configurações do transporte
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secured: true, // true para 465, false para outras
  auth: {
    user: 'sgarbson@gmail.com',
    pass: 'jbfu idfy dair vtkb',
  },
});

// Detalhes do e-mail
const mailOptions = {
  from: 'garbson.santos@sou.ufac.br',
  to: 'garbsonsouza2602@gmail.com',
  subject: 'sddfasa',
  text: 'ffsafasdadas',
};

// Enviar e-mail
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error(error);
  } else {
    console.log('E-mail enviado: ' + info.response);
  }
});

// Restante do seu código aqui...

