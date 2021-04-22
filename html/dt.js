var dt=[
"1619118000",
"1619110800", "1619118000", "1619118000", "1619121600",
 "1619109000","1619030700",
"1619042400","1619049600","1619056800", 
"1619118000", "1619129700", "1619129700", "1619129700", "1619129700", "1619137800", "1619137800", "1619137800",
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
