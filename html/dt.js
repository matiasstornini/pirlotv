var dt=[
"1619960400", "1619969400", "1619979300",
"1619956800", "1619964900", "1619973000", "1619982000",
"1619951400", "1619960400", "1619960400", "1619960400", "1619971200", "1619981100",
"1619960400", "1619968200", "1619968200", "1619976000", "1619976000", "1619983800", "1619991600", "1619991600", "1620000000",
"1619978400", "1619987400",

];

var dtprox=["1618763400","1618771500","1618779600","1618790400",];

var dta = [];
for (var i = 0; i <= 30; i++) {

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