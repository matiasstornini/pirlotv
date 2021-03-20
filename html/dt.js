var dt=[
"1616242500", "1616261400", 

"1616338800", 

"1616245200", "1616253300", "1616261400", "1616270400", 

"1616250600", "1616250600", "1616250600", "1616250600", "1616261400", 

"1616346000", "1616259600", "1616267700", "1616275800", "1616284800", 

"1616358600", "1616280000", "1616288400", 
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