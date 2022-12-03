const nodeMailer = require("nodemailer");
const handlebars = require("handlebars");
const fs = require("fs");
const path = require("path");
const sendEmail = async (options) => {
  console.log(path.join(__dirname, "../utils/comfirmOrder.html"));

  const filePath = path.join(__dirname, "../utils/comfirmOrder.html");
  const source = fs.readFileSync(filePath, "utf-8").toString();
  const template = handlebars.compile(source);
  const replacements = {
    username: "Umut YEREBAKMAZ",
  };
  const htmlToSend = template(replacements);
  const transporter = nodeMailer.createTransport({
    host: process.env.SMPT_HOST,
    port: process.env.SMPT_PORT,
    service: process.env.SMPT_SERVICE,
    secure: true,
    auth: {
      user: process.env.SMPT_MAIL,
      pass: process.env.SMPT_PASSWORD,
    },
  });
  mailOptions = {
    from: process.env.SMPT_MAIL,
    to: options.email,
    subject: options.subject,
    text: options.message,
    html: htmlToSend,
  };
  await transporter.sendMail(mailOptions);
};
module.exports = sendEmail;
