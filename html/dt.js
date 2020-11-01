var dt=[/*ING*/ "1604232000",  "1604239200",  "1604248200",  "1604258100",/*ESP*/ "1604235600",  "1604242800",  "1604251800",  "1604260800",/*ITA*/ "1604230200",  "1604239200",  "1604239200",  "1604250000",  "1604250000",  "1604259900",/*ALE*/ "1604241000",  "1604250000",/*ALE*/ "1604232000",  "1604239200",  "1604239200",  "1604239200",  "1604239200",  "1604246400",  "1604260800",/*ARG*/ "1604239200",  "1604250000",  "1604258100",  "1604267100",/*COL*/"1604257200", "1604264400",  "1604271900",  "1604279400",  "1604358600",/*COL*/ "1604199960",  "1604273400"];

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