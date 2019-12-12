const config = require('../config');

class ClicksGroupByIP {
    constructor(ip) {
        this.ip = ip;
        this.clicks = [];
    }

    addClick(click) {
        this.clicks.push(click);
    }

    isEligibleForMaxClicksResult(){
        return this.clicks.length <= config.MAX_CLICKS_ALLOWED_PER_IP;
    }
}

module.exports = ClicksGroupByIP;