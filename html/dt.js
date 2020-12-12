var dt=["1607776200",  "1607785200",  "1607794200",  "1607803200", "1607778000",  "1607786100",  "1607794200",  "1607803200", "1607783400",  "1607783400",  "1607783400",  "1607783400",  "1607783400",  "1607794200", "1607803800",  "1607803800",  "1607811600",  "1607819400", "1607819400"];

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