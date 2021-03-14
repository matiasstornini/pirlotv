var dt=[
"1615723200", "1615730400", "1615739400", "1615749300", 

"1615726800", "1615734900", "1615743000", "1615752000", 

"1615721400", "1615730400", "1615730400", "1615741200", "1615751100", 

"1615755600", "1615768200", 

"1615761300", "1615770000"
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