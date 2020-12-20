var dt=["1608465600",  "1608473700",  "1608481800",  "1608491700", "1608469200",  "1608477300",  "1608485400",  "1608494400", "1608463800",  "1608472800",  "1608472800",  "1608472800",  "1608472800",  "1608483600",  "1608493500", "1608495000",  "1608502800",  "1608502800",  "1608510600", "1608505200"];

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