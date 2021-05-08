var dt=[
"1620473400", "1620482400", "1620491400", "1620501300",
"1620475200", "1620483300", "1620491400", "1620500400",
"1620478800", "1620478800", "1620489600", "1620499500", 
"1620480600", "1620480600", "1620480600", "1620480600", "1620491400",
"1620489600", "1620498600", "1620498600", "1620507600",

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