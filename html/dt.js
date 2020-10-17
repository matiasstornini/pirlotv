// var dt = [
// "1601724600","1601733600","1601742600","1601751600"
// ];
var dt=[/*MAN*//*ESP*/ "1602932400",  "1602943200",  "1602952200",  "1602961200",/*ING*/ "1602934200",  "1602943200",  "1602952200",  "1602961200",/*ITA*/ "1602939600",  "1602950400",  "1602950400",  "1602960300",/*ALE*/ "1602941400",  "1602941400",  "1602941400",  "1602941400",  "1602941400",  "1602952200",  "1602959400",/*FRA*/ "1602946800",  "1602961200", /*COL*/ "1602968400",  "1602975900",  "1602983400",/*MEX*/ "1602972360",  "1602979200",  "1602986400"];
var dta = [];
for (var i = 0; i <= 27; i++) {

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