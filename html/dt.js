var dt=["1607171400",  "1607180400",  "1607189400",  "1607198400", "1607173200",  "1607181300",  "1607189400",  "1607198400", "1607176800",  "1607187600",  "1607197500", "1607178600",  "1607178600",  "1607178600",  "1607178600",  "1607189400", "1607184000",  "1607198400",   "1607199000",  "1607199000","1607206800",  "1607206800","1607128200", "1607216400"];

var dtprox=[];

var dta = [];
for (var i = 0; i <= 25; i++) {

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