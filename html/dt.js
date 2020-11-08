var dt=["1604836800",  "1604844000",  "1604853000",  "1604862900","1604840400",  "1604848500",  "1604856600",  "1604856600",  "1604865600",  "1604835000",  "1604844000",  "1604844000",  "1604844000",  "1604854800",  "1604864700", "1604844000", "1604862900",  "1604871900",  "1604880900", "1604869200",  "1604876700",  "1604884200",];

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