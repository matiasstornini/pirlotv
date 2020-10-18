// var dt = [
// "1601724600","1601733600","1601742600","1601751600"
// ];
var dt=[/*ESP*/ "1603015200",  "1603022400",  "1603029600",  "1603038600",  "1603038600",  "1603047600", /*ING*/ "1603018800",  "1603026000",  "1603035000",  "1603044900",/*ITA*/ "1603017000",  "1603026000",  "1603026000",  "1603036800",  "1603046700", /*ALE*/ "1603027800",  "1603036800",/*FRA*/ "1603018800",  "1603026000",  "1603026000",  "1603026000",  "1603033200",  "1603047600",/*COL*/ "1603036800",  "1603047600",  "1603054800",  "1603062300",  "1603069800",/*MEX*/ "1603040400",  "1603065960"];
var dta = [];
for (var i = 0; i <= 29; i++) {

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