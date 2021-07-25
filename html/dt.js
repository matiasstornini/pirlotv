var dt=[
"1627198200", "1627200000", "1627200000", "1627201800", "1627209000", "1627210800", "1627210800", "1627212600",
"1627232400",
"1627230600", "1627230600", "1627238700", "1627246800", "1627254900", 
"1627245000", "1627252800", "1627261200", 

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
