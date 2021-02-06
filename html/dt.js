var dt=[
"1612614600", "1612623600", "1612623600", "1612632600", "1612641600", 

"1612616400", "1612624500", "1612632600", "1612641600", 

 "1612620000", "1612620000", "1612630800", "1612640700", 

 "1612621800", "1612621800", "1612621800", "1612621800", "1612621800", "1612632600", 

 "1612642500", "1612650600", "1612659600", " Once Caldas - Envigado "
];

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