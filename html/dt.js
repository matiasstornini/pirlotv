// var dt = [
// "1601724600","1601733600","1601742600","1601751600"
// ];
var dt=[/*MX*/ "1604107800",  "1604113560",  "1604115000",/*ING*/ "1604147400",  "1604156400",  "1604165400",/*ESP*/ "1604149200",  "1604157300",  "1604165400",  "1604174400",/*ITA*/  "1604152800",  "1604163600",  "1604173500",/*ALE*/  "1604154600",  "1604154600",  "1604154600",  "1604154600",  "1604165400",/*FRA*/"1604174400",  "1604232000",/*ARG*/"1604163600",  "1604171700",  "1604180700",  "1604189700",/*COL*/"1604176200",  "1604185200",  "1604193000"];
var dta = [];
for (var i = 0; i <= 55; i++) {

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