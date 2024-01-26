const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "sgarbson@gmail.com",
    pass: "tqmu kltu rscd ufvm",
  },
});

app.post("/enviar-email", async (req, res) => {
  try {
    const { name, email, assunto, text /* Adicione outros campos conforme necessário */ } =
      req.body;

    const mailOptions = {
      from: "sgarbson@gmail.com",
      to: "garbsonsouza2602@gmail.com",
      subject: "Nova mensagem de contato",
      text: `
        Nome: ${name}
        Email: ${email}
        Assunto: ${assunto}
        Text: ${text}
        
        /* Adicione outros campos conforme necessário */
      `,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("E-mail enviado: " + info.response);
    res.status(200).send("E-mail enviado com sucesso.");
  } catch (error) {
    console.error(error);
    res.status(500).send("Erro ao enviar e-mail.");
  }
});

app.get("/", (req, res) => {
  res.send("Bem-vindo ao servidor!");
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
