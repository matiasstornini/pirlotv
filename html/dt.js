var dt=["1610794800",  "1610794800",  "1610794800",  "1610809200",  "1610816400",  "1610823600", "1610800200",  "1610809200",  "1610809200",  "1610818200",  "1610827200", "1610807400",  "1610807400",  "1610807400",  "1610807400",  "1610807400",  "1610818200", "1610839800", "1610845800","1610834400",  "1610843400"];

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