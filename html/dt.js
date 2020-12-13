var dt=["1607860800",  "1607868900",  "1607877000",  "1607886900",  "1607886900", "1607864400",  "1607872500",  "1607880600",  "1607889600", "1607859000",  "1607868000",  "1607868000",  "1607868000",  "1607878800",  "1607888700", "1607860800",  "1607868000",  "1607868000",  "1607868000",  "1607868000",  "1607875200",  "1607889600", "1607890200",  "1607890200",  "1607898000",  "1607905800", "1607907600"];

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