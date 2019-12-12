class ClicksGroupByHour {
    constructor(hour){
        this.hour = hour;
        this.clickWithMaxAmount = null;
        this.clicks = [];
    }

    addClick(click){
        this._updateClickWithMaxAmount(click);
        this.clicks.push(click);
    }

    _updateClickWithMaxAmount(click){
        this.clickWithMaxAmount = 
                this.clickWithMaxAmount !== null && this.clickWithMaxAmount.amount >= click.amount 
                ? this.clickWithMaxAmount : click;

    }

    getClickWithMaxAmount(){
        return this.clickWithMaxAmount;
    }
}

module.exports = ClicksGroupByHour;