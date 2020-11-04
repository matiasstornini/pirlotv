var dt=["1604512500",  "1604512500",  "1604520000",  "1604520000",  "1604520000",  "1604520000",  "1604520000",  "1604520000","1604528100",  "1604528100",  "1604528100",  "1604528100",  "1604536200",  "1604536200",  "1604536200"];

var dtprox=[];

var dta = [];
for (var i = 0; i <= 35; i++) {

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