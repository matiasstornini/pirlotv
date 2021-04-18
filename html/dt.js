var dt=[
"1618749000", "1618758000",
"1618767000",
"1618747200", "1618747200", "1618755300", "1618755300", "1618763400", "1618763400", "1618772400", "1618772400",
"1618741800", "1618750800", "1618750800", "1618750800", "1618761600", "1618771500",
"1618752600",
"1618763400","1618771500","1618779600","1618790400",
"1618777800", "1618777800", "1618777800", "1618777800", "1618777800", "1618777800", "1618777800", "1618777800",
];

var dtprox=[];

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