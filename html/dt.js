// var dt = [
// "1601724600","1601733600","1601742600","1601751600"
// ];
var dt=[/*ING*/ "1603733400",  "1603742400", /*ESP*/ "1603742400", /*ITA*/ "1603655100",/*ALE*/ "1603740600",/*COL*/ "1603753200",  "1603760400"];
var dta = [];
for (var i = 0; i <= 34; i++) {

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