var dt=[
"1616333400", "1616346000", 

"1616338800","1616355000", 

"1616331600", "1616339700", "1616339700", "1616347800", "1616356800", 

"1616326200", "1616335200", "1616335200", "1616335200", "1616346000", "1616355900", 

"1616346000", "1616354100", "1616362200", "1616371200", 

"1616358600", "1616366400","1616374800",  

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