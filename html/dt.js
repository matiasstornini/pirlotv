var dt=["1604752200",  "1604761200",  "1604770200",  "1604779200","1604754000",  "1604762100",  "1604770200",  "1604779200","1604764800",  "1604779200","1604759400",  "1604759400",  "1604759400",  "1604759400",  "1604759400",  "1604770200","1604775600",  "1604784600",  "1604794500", "1604784600",  "1604791800",  "1604799000",  "1604869200"];

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