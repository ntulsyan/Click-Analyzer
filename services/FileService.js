const fs = require('fs');

class FileService {
    readClicksFromFile(sourcePath){
        return new Promise((resolve, reject) => {
            fs.readFile(sourcePath, (err, data) => {
                if(err) reject(err);
                resolve(JSON.parse(data));
            });
        });     
    }

    writeClicksToFile(clicks, targetPath){
        let data = JSON.stringify(clicks);
        fs.writeFile(targetPath, data, err => {
            if(err) {
                console.log('Error while writing clicks to File');
            }
        })
    }
}

module.exports = new FileService();