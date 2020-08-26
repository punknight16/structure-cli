import * as Chalk from 'chalk';
import * as Figlet from 'figlet';
import * as Clear from 'clear';
import * as Files from './lib/files';
import * as Inquirer from './lib/inquirer';
import * as Profile from './lib/profile';
import * as Executor from './lib/executor'

Clear.default();

console.log(
  Chalk.default.yellow(
    Figlet.default.textSync('Welcome', { horizontalLayout: 'full' })
  )
);
const welcome_text = `Structure_CLI is an open source command line tool that lets 
any department within a startup (accounting, sales, engineering) easily query 
company-wide analytics data stored in the Snowflake data warehouse. 

To get started, create a Snowflake account at `;

const tooltip_text = `After creating an account, Snowflake generates a url with your account
name. You can find your account name in the url: `;

const exit_text = `You can exit from this tool at any time by using the keyboard command: `;

console.log(
	Chalk.default.white(welcome_text)
);

console.log(
	Chalk.default.yellow("https://trial.snowflake.com/\n\n")
)

console.log(
	Chalk.default.white(tooltip_text)
);

console.log(
	Chalk.default.yellow("https://<Your account name is here>.snowflakecomputing.com\n\n")
)

console.log(
	Chalk.default.white(exit_text)
);

console.log(
	Chalk.default.yellow("ctrl+C\n\n")
)

const run = async () => {
  let profile = Profile.getStoredSnowflakeProfile();
  if(!profile.account || !profile.username || !profile.password) {
    profile = await Profile.getSnowflakeProfile();
  }
  console.log(profile);
  Executor.runJob({});
  
};


run();




/*import {fizzBuzz} from "./FizzBuzz";

const run = (fn, arg)=>{
	if(fn == undefined) {
		console.log('hello world')	
	} else {
		console.log(fn(arg));
	}
	
}

run(fizzBuzz, 2);
*/