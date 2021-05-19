var dt=[
"1621443600", "1621443600", "1621443600", "1621447200", "1621451700", "1621451700", 
"1621450800",
"1621461600", "1621461600", "1621462500", "1621462500", "1621462500", "1621468800",
"1621462500", "1621462500", "1621462500", "1621470600", "1621470600", "1621470600", 
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
