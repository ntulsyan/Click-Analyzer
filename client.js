const ClickAnalyzerModule = require('./index');
const path = require('path')

const CLICKS_SOURCE_PATH = path.join(__dirname, 'clicks.json');
const CLICKS_TARGET_PATH = path.join(__dirname, 'resultset.json');

ClickAnalyzerModule.getMaxAmountClicks(CLICKS_SOURCE_PATH, CLICKS_TARGET_PATH);