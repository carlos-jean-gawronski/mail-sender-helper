const inquirer = require("inquirer");

module.exports = {
  askContent: (option) => {
    var questions = [];
    for (var i = 0; i < option.length; i++) {
      questions.push({
        name: `${option[i]}`,
        type: "input",
        message: `Enter the content for ${option[i]}:`,
        validate: function (value) {
          if (value.length) {
            return true;
          } else {
            return "Please enter the content.";
          }
        },
      });
    }
    return inquirer.prompt(questions);
  },
};
