const nodemailer = require("nodemailer");
const originEmail = require("./credentials/credentials.json").originEmail;
const originName = require("./credentials/credentials.json").originName;
const emailPassword = require("./credentials/credentials.json").emailPassword;
const mailOptions = require("./mailOptions");
const mailContent = require("./mailContent");

async function sender() {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: originEmail,
      pass: emailPassword,
    },
  });

  const mailQuestions = await mailOptions.askMailOptions();
  const contentForEmail = await mailContent.askContent(mailQuestions.content);
  const mailOptionsSender = {
    from: `${originName} <${originEmail}>`,
    to: [mailQuestions.emailTo],
    subject: mailQuestions.subject,
    ...contentForEmail,
  };

  transporter.sendMail(mailOptionsSender, function (error, info) {
    if (error) {
      console.error(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
}

module.exports = sender;
