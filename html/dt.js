var dt=["1605961800",  "1605970800",  "1605979800",  "1605988800","1605963600",  "1605971700",  "1605979800",  "1605988800", "1605967200",  "1605978000",  "1605987900","1605969000",  "1605969000",  "1605969000",  "1605969000",  "1605969000",  "1605979800",  "1605987000","1605989400",  "1605997200",  "1606005000","1605997800",  "1606006800"];

var dtprox=[];

var dta = [];
for (var i = 0; i <= 25; i++) {

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