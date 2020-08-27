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
  	snowflakeAccount: conf.get('snowflake.account'),
  	snowflakeUsername: conf.get('snowflake.username'),
  	snowflakePassword: conf.get('snowflake.password'),
    destinationDatabase: conf.get('snowflake.destinationDatabase'),
    destinationSchema: conf.get('snowflake.destinationSchema')
  }

}

export const getSnowflakeProfile = async () => {
    

    try {
      const creds = await Inquirer.askSnowflakeCredentials();
      
      if(creds.hasSnowflake 
        && creds.account 
        && creds.username 
        && creds.password
        && creds.destinationDatabase
        && creds.destinationSchema) {
        conf.set('snowflake.account', creds.account);
        conf.set('snowflake.username', creds.username);
        conf.set('snowflake.password', creds.password);
        conf.set('snowflake.destinationDatabase', creds.destinationDatabase);
        conf.set('snowflake.destinationSchema', creds.destinationSchema);
        return {
          snowflakeAccount: creds.account,
          snowflakeUsername: creds.username,
          snowflakePassword: creds.password,
          destinationDatabase: creds.destinationDatabase,
          destinationSchema: creds.destinationSchema
         }
      } else {
        throw new Error("Valdiation Error: Profile was not generated");
      }
    } catch(err) {
    	throw new Error(err);
    }
};