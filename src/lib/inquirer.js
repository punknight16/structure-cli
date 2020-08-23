"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.askSnowflakeCredentials = void 0;
const inquirer_1 = __importDefault(require("inquirer"));
exports.askSnowflakeCredentials = () => {
    const questions = [
        {
            name: 'hasSnowflake',
            type: 'confirm',
            message: 'Have you created a Snowflake account?',
            validate: function (value) {
                if (value.length) {
                    return true;
                }
                else {
                    return 'Exit with ctrl+C, and go create a Snowflake account';
                }
            }
        },
        {
            name: 'account',
            type: 'input',
            message: "Enter your Snowflake account name:",
            validate: function (value) {
                if (value.length) {
                    return true;
                }
                else {
                    return 'Please enter your Snowflake account or press ctrl+C to exit.';
                }
            }
        },
        {
            name: 'username',
            type: 'input',
            message: 'Enter your Snowflake username:',
            validate: function (value) {
                if (value.length) {
                    return true;
                }
                else {
                    return 'Please enter your Snowflake username or press ctrl+C to exit.';
                }
            }
        },
        {
            name: 'password',
            type: 'password',
            message: 'Enter your password:',
            validate: function (value) {
                if (value.length) {
                    return true;
                }
                else {
                    return 'Please enter your Snowflake password or press ctrl+C to exit.';
                }
            }
        }
    ];
    return inquirer_1.default.prompt(questions);
};
//# sourceMappingURL=inquirer.js.map