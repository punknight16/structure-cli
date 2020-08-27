import Inquirer from 'inquirer';
import * as Chalk from 'chalk';
import * as files from './files';

export const askSnowflakeCredentials = () => {
  const questions = [
    {
      name: 'hasSnowflake',
      type: 'confirm',
      message: 'Have you created a Snowflake account?',
      validate: function( value ) {
        if (value.length) {
          return true;
        } else {
          return 'Exit with ctrl+C, and go create a Snowflake account';
        }
      }
    },
    {
      name: 'account',
      type: 'input',
      message: "Enter your Snowflake account name:",
      validate: function( value ) {
        if (value.length) {
          return true;
        } else {
          return 'Please enter your Snowflake account or press ctrl+C to exit.';
        }
      }
    },
    {
      name: 'username',
      type: 'input',
      message: 'Enter your Snowflake username:',
      validate: function( value ) {
        if (value.length) {
          return true;
        } else {
          return 'Please enter your Snowflake username or press ctrl+C to exit.';
        }
      }
    },
    {
      name: 'password',
      type: 'password',
      message: 'Enter your password:',
      validate: function(value) {
        if (value.length) {
          return true;
        } else {
          return 'Please enter your Snowflake password or press ctrl+C to exit.';
        }
      }
    },
    {
      name: 'destinationDatabase',
      type: 'input',
      message: 'Enter your destinationDB:',
      validate: function(value) {
        if (value.length) {
          return true;
        } else {
          return 'Please enter your destinationDB or press ctrl+C to exit.';
        }
      }
    },
    {
      name: 'destinationSchema',
      type: 'input',
      message: 'Enter your destinationSchema:',
      validate: function(value) {
        if (value.length) {
          return true;
        } else {
          return 'Please enter your destinationSchema or press ctrl+C to exit.';
        }
      }
    }
  ];
  return Inquirer.prompt(questions);
};


export const askStructureFilename = () => {
    const argv = require('minimist')(process.argv.slice(2));

    const questions = [
      {
        type: 'input',
        name: 'name',
        message: 'Enter the filename of your Structure .yml file:',
        default: argv._[0] || files.getCurrentDirectoryBase(),
        validate: function( value ) {
          if (value.length) {
            return true;
          } else {
            return 'Please enter a filename.';
          }
        }
      }
    ];
    return Inquirer.prompt(questions);
}