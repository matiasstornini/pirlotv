var dt=["1610197200",  "1610205300",  "1610213400",  "1610222400", "1610200800",  "1610211600",  "1610221500", "1610202600",  "1610202600",  "1610202600",  "1610202600",  "1610202600",  "1610213400", "1610223000",  "1610223000",  "1610230800",  "1610230800",  "1610238600",  "1610238600"];

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