var dt=[
"1619024400", "1619032500",
"1619024400", "1619024400", "1619028000", "1619031600", "1619031600", "1619035200", 
"1619022600", "1619030700", "1619030700", "1619030700", "1619030700", "1619030700",
"1619029800", "1619029800", "1619029800", "1619029800",
"1619042400", "1619042400", "1619049600", "1619049600", "1619049600", "1619056800", "1619056800", 
"1619129700","1619129700","1619051400", "1619051400", 
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
