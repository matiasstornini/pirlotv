let btn1 = "0";
function formatDate(date) {
    var year = date.getFullYear().toString();
    var month = (date.getMonth() + 101).toString().substring(1);
    var day = (date.getDate() + 100).toString().substring(1);
    return year + "-" + month + "-" + day;
}

//Usage example:
//alert(formatDate(new Date()));
let datef = ormatDate(new Date());
