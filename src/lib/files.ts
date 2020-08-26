import * as fs from 'fs';
import * as path from 'path';


export const getCurrentDirectoryBase = () => {
    return path.basename(process.cwd());
}

export const fileExists = (filePath) => {
  return fs.existsSync(filePath);
}

export const loadFile = (filePath) => {
	return new Promise((resolve, reject)=>{
		if(!fileExists){
			reject('File does not exist')
		} else {
			resolve(fs.readFileSync(filePath, 'utf8'));
		}
	})
}