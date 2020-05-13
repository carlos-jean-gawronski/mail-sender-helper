const inquirer = require("inquirer");

module.exports = {
  askMailOptions: () => {
    const questions = [
      {
        name: "subject",
        type: "input",
        message: "Enter the email subject:",
        validate: function (value) {
          if (value.length) {
            return true;
          } else {
            return "Please enter a subject.";
          }
        },
      },
      {
        name: "emailTo",
        type: "input",
        message: "Enter the email address:",
        validate: function (value) {
          if (value.length) {
            return true;
          } else {
            return "Please enter an address.";
          }
        },
      },
      {
        type: "checkbox",
        name: "content",
        message: "Select the fields you wish to put in the email:",
        choices: ["html", "text", "attachments"],
      },
    ];

    return inquirer.prompt(questions);
  },
};
