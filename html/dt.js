var dt=[
"1614275700", "1614275700", "1614275700", "1614275700", "1614275700", "1614275700", "1614275700", "1614283200", "1614283200", "1614283200", "1614283200", "1614283200", "1614283200", "1614283200", "1614283200", 

"1614279600", "1614286800", "1614294300", "1614301800", 

"1614283800"
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