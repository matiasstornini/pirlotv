var dt=[
    "1618138800", "1618146300", "1618155000","1618072200", 
    "1618142400", "1618150500", "1618158600","1618081200", 
     "1618137000", "1618146000","1618146000",
    "1618150500", "1618160400", "1618160400", "1618168500", "1618176600", "1618185600",
    "1618173000", "1618173000", "1618180800", "1618189200", 
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