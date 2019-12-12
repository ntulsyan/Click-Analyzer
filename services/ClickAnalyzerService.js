const ClicksGroupByHour = require('../models/ClicksGroupByHour');
const ClicksGroupByIP = require('../models/ClicksGroupByIP');

class ClickAnalyzerService {
    constructor(){
        this.groupClicksByHourMap = {};
        this.groupClicksByIPMap = {};
    }

    analyzeClicks(clicks){
        if(!Array.isArray(clicks)) throw new Error('Invalid Clicks data. Expected to be an array');

        clicks.forEach(click => this._addClickToGroupMaps(click));
        let resultClicks = this._getClicksWithMaxAmountPerHour().filter(this._isClickIpEligible.bind(this));

        this._resetGroupsMap();
        return resultClicks;
    }

    _addClickToGroupMaps(click){
        if(this._isValidClick(click)){
            this._addClickToGroupByHour(click);
            this._addClickToGroupByIP(click);
        }
    }

    _addClickToGroupByHour(click){
        let hour = new Date(click.timestamp).getHours();
        if (!this.groupClicksByHourMap[hour]) {
            this.groupClicksByHourMap[hour] = new ClicksGroupByHour(hour);
        }
        this.groupClicksByHourMap[hour].addClick(click);
    }

    _addClickToGroupByIP(click) {
        let { ip } = click;
        if (!this.groupClicksByIPMap[ip]) {
            this.groupClicksByIPMap[ip] = new ClicksGroupByIP(ip);
        }
        this.groupClicksByIPMap[ip].addClick(click);
    }

    _getClicksWithMaxAmountPerHour(){
        let clicksWithMaxAmount = [];
        Object.values(this.groupClicksByHourMap).forEach(group => {
            let click = group.getClickWithMaxAmount();
            if (click !== null) {
                clicksWithMaxAmount.push(click);
            }
        });

        return clicksWithMaxAmount;
    }

    _isClickIpEligible(click) {
        return this.groupClicksByIPMap[click.ip].isEligibleForMaxClicksResult();
    }

    _isValidClick(click){
        if(typeof click !== 'object' || Array.isArray(click) || click === null)
            return false;

        if(typeof click.ip !== 'string' || typeof click.timestamp !== 'string' || typeof click.amount !== 'number')
            return false;

        return true;
    }

    _resetGroupsMap() {
        this.groupClicksByHourMap = {};
        this.groupClicksByIPMap = {};
    }
}

module.exports = new ClickAnalyzerService();