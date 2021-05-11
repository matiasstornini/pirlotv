var dt=[
"1620752400",
"1620752400", "1620756000", "1620763200", 
"1620771300", "1620771300", "1620771300", "1620779400", "1620779400", "1620779400",
"1620771300", "1620771300", "1620779400", "1620779400",
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