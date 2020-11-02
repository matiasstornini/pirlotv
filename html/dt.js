var dt=[/*COL*/ "1604338200",  "1604347200",/*COL*/ "1604347200",/*COL*/ "1604362500",/*COL*/ "1604358600",  "1604366100"];

var dtprox=[];

var dta = [];
for (var i = 0; i <= 35; i++) {

	var date = new Date(dt[i] * 1000);
	// Hours part from the timestamp
	var hours = date.getHours();
	// Minutes part from the timestamp
	var minutes = "0" + date.getMinutes();
	// Seconds part from the timestamp
	var seconds = "0" + date.getSeconds();

	// Will display time in 10:30:23 format
	var formattedTime = hours + ':' + minutes.substr(-2) /*+ ':' + seconds.substr(-2)*/;
	
	dta.push(formattedTime);

	// console.log(dta[i]);
}