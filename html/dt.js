var dt=[
"1613304000", "1613311200", "1613320200", "1613329200", 

"1613307600", "1613315700", "1613323800", "1613332800", 

"1613302200", "1613311200", "1613311200", "1613322000", "1613331900", 

"1613333400", "1613427300", "1613435400", 

"1613329200", "1613516400", "1613351400"

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