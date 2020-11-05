var dt=["1604598900",  "1604598900",  "1604598900",  "1604598900",  "1604598900",  "1604598900",  "1604598900",  "1604598900",  "1604598900",  "1604598900",  "1604598900",  "1604598900",  "1604606400",  "1604606400",  "1604606400",  "1604606400",  "1604606400",  "1604606400",  "1604606400",  "1604606400",  "1604606400",  "1604606400",  "1604606400", "1604606400", "1604614500","1604614500",  "1604622600",  "1604622600",  "1604622600",  "1604622600",/*COL*/ "1604623200"];

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