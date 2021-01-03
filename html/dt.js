var dt=["1609675200",  "1609683300",  "1609691400", "1609678800",  "1609686900",  "1609695000",  "1609695000",  "1609704000", "1609673400",  "1609682400",  "1609682400",   "1609682400",  "1609693200",  "1609703100",  "1609684200",  "1609693200", "1609704600",  "1609712400",  "1609712400",  "1609720200"];

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