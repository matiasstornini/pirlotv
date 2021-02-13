var dt=[
"1613219400", "1613228400", "1613237400", "1613246400", 

"1613221200", "1613229300", "1613237400", "1613246400", 

"1613224800", "1613235600", "1613245500", 

"1613226600", "1613226600", "1613226600", "1613226600", "1613237400", "1613313000", 

"1613247000", "1613247000", "1613254800", "1613262600", 

"1613247300","1613255400", "1613264400", "1613329200"

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