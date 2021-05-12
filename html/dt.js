var dt=[
"1620846900",
"1620925200","1620842400", "1620842400", "1620849600", 
"1620837000", "1620845100", "1620845100", "1620845100", "1620845100", "1620845100", "1620845100", "1620845100",
"1620856800", "1620856800", "1620864000", "1620864000", "1620864000","1620871200", "1620871200", 
"1620857700", "1620857700", "1620865800", "1620865800", "1620865800",
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