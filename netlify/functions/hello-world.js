const chalk = require('chalk');
const { DateTime } = require('luxon');

exports.handler = async function () {
  const date = DateTime.now();
  console.log(chalk.magentaBright(`${date}: Hello World`));
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Hello world!',
    }),
  };
};
