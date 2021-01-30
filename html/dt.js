var dt=["1612009800",  "1612018800",  "1612018800",  "1612018800",  "1612027800",  "1612036800", "1612011600",  "1612019700",  "1612027800",  "1612036800", "1612015200",  "1612026000",  "1612035900", "1612017000",  "1612017000",  "1612017000",  "1612017000",  "1612017000",  "1612027800", "1612036800",  "1612033200","1612040400",  "1612047900",  "1612055400"];

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