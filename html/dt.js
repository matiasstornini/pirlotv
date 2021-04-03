var dt=[
"1617449400", "1617458400", "1617467400", "1617476400", 
"1617451200", "1617459300", "1617467400", 
"1617478200",
"1617445800", "1617454800","1617454800", "1617465600", "1617475500",
"1617456600", "1617467400", 
"1617469200", "1617477300", "1617477300", "1617485400", "1617494400",
"1617491100", "1617498600"
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