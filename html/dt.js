// var dt = [
// "1601724600","1601733600","1601742600","1601751600"
// ];
var dt=[/*ESP*/"1601805600","1601812800","1601820000","1601829000","1601838000",/*Premier*/"1601809200","1601809200","1601816400","1601816400","1601825400","1601835300", /*Serie A*/"1601807400","1601816400","1601816400","1601816400","1601827200","1601837100", /*Bundes*/ "1601818200","1601827200",/*Francia*/"1601809200","1601816400","1601816400","1601816400","1601816400","1601823600","1601838000", /*Col*/"1601845200","1601852700","1601860200", /*MEX*/"1601830800","1601762400","1601769600","1601776800"];
var dta = [];
for (var i = 0; i <= 32; i++) {

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
