const sampleClicks = {
    empty_clicks: [],
    clicks_with_singleIP_moreThan10Times: [
        {"ip": "22.22.22.22", "timestamp": "3/11/2016 02:02:58", "amount": 7.00},
        { "ip": "22.22.22.22", "timestamp": "3/11/2016 03:02:58", "amount": 7.00 },
        { "ip": "22.22.22.22", "timestamp": "3/11/2016 04:02:58", "amount": 7.00 },
        { "ip": "22.22.22.22", "timestamp": "3/11/2016 05:02:58", "amount": 7.00 },
        { "ip": "22.22.22.22", "timestamp": "3/11/2016 06:02:58", "amount": 7.00 },
        { "ip": "22.22.22.22", "timestamp": "3/11/2016 07:02:58", "amount": 7.00 },
        { "ip": "22.22.22.22", "timestamp": "3/11/2016 08:02:58", "amount": 7.00 },
        { "ip": "22.22.22.22", "timestamp": "3/11/2016 09:02:58", "amount": 7.00 },
        { "ip": "22.22.22.22", "timestamp": "3/11/2016 10:02:58", "amount": 7.00 },
        { "ip": "22.22.22.22", "timestamp": "3/11/2016 11:02:58", "amount": 7.00 },
        { "ip": "22.22.22.22", "timestamp": "3/11/2016 12:02:58", "amount": 7.00 },
        { "ip": "22.22.22.22", "timestamp": "3/11/2016 13:02:58", "amount": 7.00 },
        { "ip": "22.22.22.22", "timestamp": "3/11/2016 14:02:58", "amount": 7.00 },
    ],
    valid_clicks_for_one_hour: [
        { "ip": "11.11.11.11", "timestamp": "3/11/2016 02:02:58", "amount": 7.00 },
        { "ip": "22.22.22.22", "timestamp": "3/11/2016 02:03:58", "amount": 6.00 },
        { "ip": "33.33.33.33", "timestamp": "3/11/2016 02:04:58", "amount": 5.00 },
        { "ip": "44.44.44.44", "timestamp": "3/11/2016 02:05:58", "amount": 4.00 },
    ]
}

module.exports = sampleClicks;