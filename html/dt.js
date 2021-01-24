var dt=["1611489600",  "1611498600",  "1611498600",  "1611507600",  "1611518400", "1611493200",  "1611501300",  "1611509400",  "1611518400", "1611487800",  "1611496800",  "1611496800",  "1611507600",  "1611517500", "1611498600",  "1611507600", "1611522000","1611522000",  "1611529500",  "1611537000",  "1611709200"];

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