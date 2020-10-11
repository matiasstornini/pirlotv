// var dt = [
// "1601724600","1601733600","1601742600","1601751600"
// ];
var dt=[/*UNL "1602334800",  "1602334800",  "1602345600",  "1602345600",  "1602355500",  "1602355500",  "1602355500",*//*COL*/ "1602442800",  "1602450000",  "1602457500",  "1602465000"];
var dta = [];
for (var i = 0; i <= 3; i++) {

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

	console.log(dta[i]);
}