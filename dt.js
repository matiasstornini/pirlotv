var dt=[
"1615638600", "1615647600", "1615656600", "1615665600", 

"1615640400", "1615648500", "1615656600", "1615665600", 

"1615645800", "1615645800", "1615645800", "1615645800", "1615656600", 

"1615666200","1615666200", "1615674000", "1615674000", "1615681800",

 "1615761300","1615683600"
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