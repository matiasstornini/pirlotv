var dt=[
    "1618054200", "1618063200", "1618072200", 
    "1618056000", "1618064100", "1618072200", "1618081200",
    "1618059600", "1618070400", "1618080300",
    "1618061400", "1618061400", "1618061400", "1618061400", "1618072200", 
    "1618074000", "1618082100", "1618090200", "1618099200",
    "1618086600", "1618094400", "1618102800",
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