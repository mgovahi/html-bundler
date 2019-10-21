const fs = require('fs');

class FileManager {
	constructor(){}
	readFile(filePath){
		try{
			return fs.readFileSync(filePath,"utf8");
		}catch(err){
			throw err;
		}
	}
	
	writeFile(data,filePath){
		this.checkCreateDirsForFile(filePath);
		try {
		  fs.writeFileSync(filePath, data);
		  return console.log(`${filePath} file created.`);
		} catch(err) {
		  throw err;
		}
	}
	checkCreateDirsForFile(futureFilePath) {
		const dirsList = futureFilePath.split('/');
		const dirsLength = dirsList.length - 2; // -1 => to have index instead of count. -2 => to exclude filename

		let dirPath = '.';
		for (let i = 0; i <= dirsLength; i++) {
		  dirPath = `${dirPath}/${dirsList[i]}`;
		  try {
			if (!fs.existsSync(dirPath)){
			  fs.mkdirSync(dirPath);
			}
		  } catch (err) {
			throw err;
		  }
		}
	}
}

module.exports = FileManager;