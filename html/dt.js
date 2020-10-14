// var dt = [
// "1601724600","1601733600","1601742600","1601751600"
// ];
var dt=[/*UNL*/ "1602691200",  "1602691200",  "1602701100",  "1602701100",  "1602701100",  "1602701100",  "1602701100",  "1602701100",  "1602701100",  "1602701100",  "1602701100",  "1602701100",  "1602701100",  "1602701100",  "1602701100",  "1602701100",  "1602701100",  "1602701100",  "1602701100",  "1602701100",/*COL*/ "1602691200",  "1602702000",  "1602709200",  "1602716700",  "1602724200"];
var dta = [];
for (var i = 0; i <= 24; i++) {

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