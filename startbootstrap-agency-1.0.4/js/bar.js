var chart = c3.generate({
    bindto: '#bar-chart',
	size: {
        height: 360,
        width: 360
    },
    data: {
        columns: [
            ['iShares ETF Bid/Offer', 30, 200, 100, 400, 150, 250],
            ['Underlying Bid/Offer', 130, 100, 140, 200, 150, 50]
        ],
        type: 'bar'
    },
    bar: {
        width: {
            ratio: 0.5 // this makes bar width 50% of length between ticks
        }
        // or
        //width: 100 // this makes bar width 100px
    }
});

