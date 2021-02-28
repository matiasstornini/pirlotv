var dt=[
"1614513600", "1614513600", "1614520800", "1614529800", "1614539700", 

"1614517200", "1614525300", "1614533400", "1614542400", 

"1614511800", "1614520800", "1614520800", "1614520800", "1614531600", "1614541500", 

"1614515400", "1614522600", "1614531600", 

"1614543000", "1614550800", "1614558600", 

"1614538800", "1614546000", "1614553500", "1614561000", 

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