var dt=[
"1614429000", "1614438000", "1614447000", "1614456000", 

"1614430800", "1614438900", "1614447000", "1614456000",

"1614434400", "1614445200", "1614455100", 

"1614436200", "1614436200", "1614436200", "1614436200", "1614447000", 

"1614456600", "1614456600", "1614464400", "1614472200", 

"1614465000", "1614474000"
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