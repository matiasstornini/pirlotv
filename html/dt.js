var dt=[
"1620558000", "1620565500", "1620574200", "1620583200",
"1620561600", "1620569700", "1620577800", "1620586800",
"1620585900", 
"1620565200", "1620573000", "1620581400", "1620581400",  "1620581400","1620507600", "1620507600", "1620507600", "1620604800"

];

var dtprox=["1618763400","1618771500","1618779600","1618790400",];

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