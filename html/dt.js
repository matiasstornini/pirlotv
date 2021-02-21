var dt=[
"1613908800", "1613916300", "1613925000", "1613934000",

"1613912400", "1613920500", "1613928600", "1613937600", 

"1613907000", "1613916000", "1613926800", "1613936700", 

"1613938200", "1613938200", "1613946000", "1613953800", 

"1613934000", "1613941200", "1613948700", "1613956200"
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