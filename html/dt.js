var dt=[
"1612699200", "1612706400", "1612715400", "1612725300", 

"1612702800", "1612710900", "1612719000", "1612728000", 

"1612706400", "1612706400", "1612717200", "1612727100",

"1612720800", 

"1612724400", "1612731600", "1612739100", "1612746600",

"1612738800"
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