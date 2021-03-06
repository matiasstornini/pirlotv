var dt=[
"1615033800", "1615042800", "1615051800", "1615060800", 

"1615035600", "1615043700", "1615051800", "1615060800", 

"1615039200", "1615050000", "1615059900", 

"1615041000", "1615041000", "1615041000", "1615041000", "1615041000", "1615051800", 

"1615061400","1615061400", "1615069200", "1615069200", "1615077000", 

"1615069800", "1615078800"

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