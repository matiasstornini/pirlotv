var dt=["1606046400",  "1606053600",  "1606062600",  "1606072500", "1606050000",  "1606058100",  "1606066200",  "1606075200","1606044600",  "1606053600",  "1606053600",  "1606053600",  "1606053600",  "1606064400",  "1606074300","1606075800",  "1606083600",  "1606091400", "1606086300",  "1606093800"];

var dtprox=[];

var dta = [];
for (var i = 0; i <= 25; i++) {

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