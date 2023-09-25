

const chalk = require('chalk');

function displayColorfulMessage() {
  console.log(chalk.blue('This is a blue message.'));
  console.log(chalk.green('This is a green message.'));
  console.log(chalk.red('This is a red message.'));
}


module.exports = displayColorfulMessage;
