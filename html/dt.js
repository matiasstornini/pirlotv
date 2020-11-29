var dt=["1606658400",  "1606667400",  "1606677300", "1606654800",  "1606662900",  "1606671000",  "1606680000", "1606649400",  "1606658400",  "1606658400",  "1606669200",  "1606679100", "1606680600",  "1606688400",  "1606696200",  "1606696200", "1606689000",  "1606698000"];

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