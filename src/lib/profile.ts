import { Spinner } from 'clui';
import * as Configstore from 'configstore';
import * as Inquirer from './inquirer';

const conf = new Configstore.default('structure-profile');

/*let octokit;
export const getInstance = () => {
  return octokit;
}*/

export const getStoredSnowflakeProfile = () => {
  return {
  	account: conf.get('snowflake.account'),
  	username: conf.get('snowflake.username'),
  	password: conf.get('snowflake.password')
  }

}

export const getSnowflakeProfile = async () => {
    

    try {
      const creds = await Inquirer.askSnowflakeCredentials();
      
      if(creds.hasSnowflake && creds.account && creds.username && creds.password) {
        conf.set('snowflake.account', creds.account);
        conf.set('snowflake.username', creds.username);
        conf.set('snowflake.password', creds.password);
        return creds;
      } else {
        throw new Error("Valdiation Error: Profile was not generated");
      }
    } catch(err) {
    	throw new Error(err);
    }
};