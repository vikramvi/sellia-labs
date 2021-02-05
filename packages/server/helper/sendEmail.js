import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "", //TOD: setup account
    pass: "",
  },
});

export const sendEmail = ({ to, from, subject, message }) => {
  const mailOptions = {
    to,
    from,
    subject,
    html: message,
  };

  return transporter.sendMail(mailOptions);
};
