var dt=["1606566600",  "1606575600",  "1606584600",  "1606593600", "1606568400",  "1606576500",  "1606584600",  "1606593600", "1606572000",  "1606582800",  "1606592700", "1606573800",  "1606573800",  "1606573800",  "1606573800",  "1606573800",  "1606584600", "1606579200",  "1606593600", "1606594200",  "1606602000",  "1606602000",  "1606609800",  "1606609800", "1606689000", "1606611600"];

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