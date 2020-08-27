import * as Chalk from 'chalk';
import * as Figlet from 'figlet';
import * as Clear from 'clear';
import * as Files from './lib/files';
import * as Inquirer from './lib/inquirer';
import * as Profile from './lib/profile';
import * as Executor from './lib/executor'

process.env.NODE_ENV = 'cli';
require('store');


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
  //get profile stuff
  let profile = Profile.getStoredSnowflakeProfile();
  if(!profile.snowflakeAccount || !profile.snowflakeUsername || !profile.snowflakePassword) {
    profile = await Profile.getSnowflakeProfile();
  }
  console.log("profile: ", JSON.stringify(profile, null, 4));
  //get ymlData stuff
  let file;
  if(Files.fileExists('data.yml')){
  	file = {name: 'data.yml'}
  } else {
  	file = await Inquirer.askStructureFilename();
	  console.log("file: ", JSON.stringify(file, null, 4));
	  if (!Files.fileExists(file.name)) {
		  console.log(Chalk.default.red('File does not exist'));
		  process.exit();
		} 
  }
  
	const ymlFile = await Files.loadFile(file.name);
	const partialUserState = Executor.transformYmlDataToUserStateData(ymlFile);
	const tasks = {
		1: profile
	};
	const userState = Object.assign(
		{}, 
		{userConfig: profile}, 
		{tasks: tasks},
		partialUserState);
	console.log('userState: ', userState);
	Executor.runJob(userState)
	.then((jobState)=>{
		console.log("jobState: ", jobState);
		process.exit();
	})
	.catch((err)=>{
		console.log(err);
		process.exit();
	})

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