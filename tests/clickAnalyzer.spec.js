let clickAnalyzerService = require('../services/ClickAnalyzerService');
const sampleClicks = require('./support/sampleClicks');

describe('Click Analyzer service tests', () => {
    it('should return the click with maximum amount for single hour', () => {
        let inputClicks = sampleClicks.valid_clicks_for_one_hour;
        let expectedOutputClick = inputClicks[0];
        let result = clickAnalyzerService.analyzeClicks(inputClicks);
        expect(result.length).toEqual(1);
        expect(result[0]).toBe(expectedOutputClick);
    });

    it('should return an empty array if there is no input data', () => {
        let inputClicks = sampleClicks.empty_clicks;
        let result = clickAnalyzerService.analyzeClicks(inputClicks);
        expect(result).toEqual([]);
    });

    it('should throw error when clicks data is not an array', () => {
        let inputClicks = {};
        expect(clickAnalyzerService.analyzeClicks.bind(null, inputClicks)).toThrow();
    });

    it('should not include an IP if it is more than 10 times', () => {
        let inputClicks = sampleClicks.clicks_with_singleIP_moreThan10Times;
        let result = clickAnalyzerService.analyzeClicks(inputClicks);
        expect(result).toEqual([]);
    });
});