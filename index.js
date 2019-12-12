const AnalyzerService = require('./services/ClickAnalyzerService');
const FileService = require('./services/FileService');

const getMaxAmountClicks = (sourcePath, targetPath) => {
    FileService.readClicksFromFile(sourcePath)
        .then(clicks => {
            let results = AnalyzerService.analyzeClicks(clicks);
            FileService.writeClicksToFile(results, targetPath);
        })
        .catch(err => {
            throw new Error('Unable to read file : ', err);
        });
}

module.exports = {
    getMaxAmountClicks
}