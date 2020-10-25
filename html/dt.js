// var dt = [
// "1601724600","1601733600","1601742600","1601751600"
// ];
var dt=[/*MEX*/ "1603576800",  "1603587600",  "1603591200",  "1603591200",/*ING*/ "1603634400",  "1603643400",  "1603653300",/*ESP*/ "1603630800",  "1603638000",  "1603647000",  "1603656000",/*ITA*/ "1603625400",  "1603634400",  "1603634400",  "1603645200",  "1603655100",/*ALE*/ "1603636200",  "1603645200",/*FRA*/ "1603634400",  "1603634400",  "1603634400",  "1603634400",  "1603641600",  "1603656000",/*COL*/ "1603643400",  "1603652400",  "1603659600",  "1603667100",  "1603674600",/*MEX*/ "1603674360",  "1603767600",  "1604026800"];
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