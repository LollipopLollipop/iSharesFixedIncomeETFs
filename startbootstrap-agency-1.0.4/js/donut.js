var chart = c3.generate({
    bindto: '#donut-chart',
	size: {
        height: 360,
        width: 360
    },
	padding: {
  		right: 0
	},
    data: {
        columns: [
            ['MBS', 28.9],
            ['CRED', 29.5],
            ['SHY', 14.6],
            ['IEI', 13.2],
            ['CRED', 29.5],
            ["CMBS", 13.8],
        ],
        type : 'donut',
        onclick: function (d, i) { console.log("onclick", d, i); },
        onmouseover: function (d, i) { console.log("onmouseover", d, i); },
        onmouseout: function (d, i) { console.log("onmouseout", d, i); }
    },
    donut: {
        title: "iShares AGG"
    }
});

