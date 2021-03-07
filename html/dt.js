var dt=[
"1615118400", "1615125600", "1615134600", "1615144500", 

"1615122000", "1615130100", "1615138200", "1615147200", 

"1615116600", "1615125600", "1615125600", "1615125600", "1615136400", "1615146300", 

"1615147800","1615155600", "1615155600", "1615163400",  

"1615149000", "1615156800", "1615165200"

];

var dtprox=[];

var dta = [];
for (var i = 0; i <= 30; i++) {

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