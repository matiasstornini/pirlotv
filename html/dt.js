var dt=[
"1619348400","1619355600", 
"1621096200", 
"1619352000", "1619360100", "1619368200", "1619368200", "1619377200",
"1619346600", "1619355600", "1619355600", "1619366400", "1619376300",
"1619359200", "1619368200", "1619376300", "1619384400", "1619395200", "1619308800",
"1619382600", "1619390400", "1619398800",

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