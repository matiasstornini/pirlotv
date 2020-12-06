var dt=["1607256000",  "1607264100",  "1607272200",  "1607282100", "1607259600",  "1607267700",  "1607275800",  "1607284800", "1607254200",  "1607263200",  "1607263200",  "1607263200",  "1607274000",  "1607283900", "1607292600",  "1607301000",  "1607301000", "1607302800"];

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