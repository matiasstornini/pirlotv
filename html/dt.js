// var dt = [
// "1601724600","1601733600","1601742600","1601751600"
// ];
var dt=[/*ING*/ "1603539000",  "1603548000",  "1603557000",  "1603566000",/*ESP*/ "1603548000",  "1603557000",  "1603557000",  "1603566000",/*ITA*/ "1603544400",  "1603555200",  "1603565100",/*ALE*/ "1603546200",  "1603546200",  "1603546200",  "1603546200",  "1603557000",/*FRA*/ "1603551600",  "1603566000",/*COL*/ "1603573200",  "1603584300",  "1603588200",/*MEX*/ "1603576800",  "1603587600",  "1603591200",  "1603591200" ];
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