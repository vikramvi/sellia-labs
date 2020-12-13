import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "bnshah.dev@gmail.com",
    pass: "Bnshah@1234",
  },
});

export const sendEmail = ({ to, from, subject, message }) => {
  const mailOptions = {
    to,
    from,
    subject,
    text: message,
  };

  return transporter.sendMail(mailOptions);
};
