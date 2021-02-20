var dt=[
"1613824200", "1613833200", "1613842200", "1613851200", 

"1613826000", "1613834100", "1613842200", "1613851200", 

"1613831400", "1613831400", "1613831400", "1613831400", "1613842200", 

"1613851800", "1613851800", "1613859600", "1613867400", 

"1613852100", "1613860200", "1613869200"
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