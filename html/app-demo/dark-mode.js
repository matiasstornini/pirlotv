function fuctiondarkmode() {
   var element = document.body;
   element.classList.toggle("dark-mode");

   if (document.body.classList.contains('dark-mode')) {
    localStorage.setItem('dark-mode','true');
   }else{
    localStorage.setItem('dark-mode','false');
   }
}
if (localStorage.getItem('dark-mode') === 'true') {
  document.body.classList.add('dark-mode');
  document.getElementById("buton").innerHTML = "<span onclick='fuctiondarkmode(); location.reload();' class='waves-effect waves-light btnoutline' style='background-color: #ffffff00;''><b>Modo oscuro: ON</b></span>";
}else{
  document.body.classList.remove('dark-mode');
  document.getElementById("buton").innerHTML = "<span onclick='fuctiondarkmode(); location.reload();' class='waves-effect waves-light btnoutline' style='background-color: #ffffff00;''><b>Modo claro: ON</b>";
}


// 
let openScreen = (screenName) => {
  // any other stuff you may need to do before opening the screen.
  window.AppInventor.setWebViewString(screenName);
}

