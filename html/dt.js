// var dt = [
// "1601724600","1601733600","1601742600","1601751600"
// ];
var dt=[/*COL*/ "1602777600",  "1602788400",  "1602795600",  "1602803100",  "1602810600", "1602813600"];
var dta = [];
for (var i = 0; i <= 5; i++) {

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