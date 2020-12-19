var dt=["1608381000",  "1608390000",  "1608399000",  "1608408000", "1608382800",  "1608390900",  "1608399000",  "1608399000",  "1608408000", "1608386400",  "1608397200",  "1608407100", "1608388200",  "1608388200",  "1608388200",  "1608388200",  "1608388200",  "1608399000", "1608408600",  "1608416400",  "1608416400",  "1608424200"];

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