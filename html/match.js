let Match=[    
" Wolverhampton Wanderers - Burnley "," Leeds United - Manchester United ",
" Manchester City - Tottenham Hotspur ",
" Huesca - Getafe "," Villarreal - Barcelona "," Celta de Vigo - Osasuna "," Sevilla - Granada "," Athletic Club - Atlético Madrid ",
" Benevento - Udinese "," Fiorentina - Juventus "," Internazionale - Hellas Verona "," Cagliari - Roma "," Atalanta - Bologna ",
" Lanús - Vélez Sarsfield "," Defensa y Justicia - Arsenal "," Racing Club - Colón "," River Plate - San Lorenzo "," Atlético Tucumán - Talleres Córdoba "," Rosario Central - Estudiantes ",
 " Junior - Santa Fe "," Deportes Tolima - Deportivo Cali "," La Equidad - Atlético Nacional ",

];

let Est=[
'https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/3757164/wolverhampton-wanderers-vs-burnley/ ','https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/3757158/leeds-united-vs-manchester-united/ ',

'https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/3887100/manchester-city-vs-tottenham-hotspur/ ',
'https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/3757507/huesca-vs-getafe/ ','https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/3757512/villarreal-vs-barcelona/ ','https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/3757505/celta-de-vigo-vs-osasuna/ ','https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/3757509/sevilla-vs-granada/ ','https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/3757504/athletic-club-vs-atletico-madrid/ ',
'https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/3777257/benevento-vs-udinese/ ','https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/3777251/fiorentina-vs-juventus/ ','https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/3777258/internazionale-vs-hellas-verona/ ','https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/3777254/cagliari-vs-roma/ ','https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/3777249/atalanta-vs-bologna/ ',
'https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/3917390/lanus-vs-velez-sarsfield/ ','https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/3917393/defensa-y-justicia-vs-arsenal/ ','https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/3917381/racing-club-vs-colon/ ','https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/3917383/river-plate-vs-san-lorenzo/ ','https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/3917388/atletico-tucuman-vs-talleres-cordoba/ ','https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/3917386/rosario-central-vs-estudiantes/ ',
'https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/3983491/junior-vs-santa-fe/ ','https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/3982830/deportes-tolima-vs-deportivo-cali/ ','https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/3982828/la-equidad-vs-atletico-nacional/ ',

];

let Enl = [
    "","",
    "",
    "","","","","",
    "","","","","",
    "","","","",AArg[0],AArg[1],
    "","",ACol[0],
];

let Title=[
    "Premier League <b>(Inglaterra)</b>","Premier League <b>(Inglaterra)</b>",/*"Premier League <b>(Inglaterra)</b>","Premier League <b>(Inglaterra)</b>",*/
    "EFL CARABAO CUP <b>(Inglaterra)</b>",/*"FA CUP <b>(Inglaterra)</b>",*/

    "LaLiga <b>(España)</b>","LaLiga <b>(España)</b>","LaLiga <b>(España)</b>","LaLiga <b>(España)</b>","LaLiga <b>(España)</b>",/*"LaLiga <b>(España)</b>",/*"LaLiga <b>(España)</b>","LaLiga <b>(España)</b>",/*"LaLiga <b>(España)</b>",*/

    "Serie A <b>(Italia)</b>","Serie A <b>(Italia)</b>","Serie A <b>(Italia)</b>","Serie A <b>(Italia)</b>","Serie A <b>(Italia)</b>",/*"Serie A <b>(Italia)</b>",/*"Serie A <b>(Italia)</b>","Serie A <b>(Italia)</b>","Serie A <b>(Italia)</b>",*/

    /*"Bundesliga <b>(Alemania)</b>","Bundesliga <b>(Alemania)</b>","Bundesliga <b>(Alemania)</b>","Bundesliga <b>(Alemania)</b>","Bundesliga <b>(Alemania)</b>",/*"Bundesliga <b>(Alemania)</b>",*/
    
    "Liga Profesional <b>(Argentina)</b>","Liga Profesional <b>(Argentina)</b>","Liga Profesional <b>(Argentina)</b>","Liga Profesional <b>(Argentina)</b>","Liga Profesional <b>(Argentina)</b>","Liga Profesional <b>(Argentina)</b>",/*"Liga Profesional <b>(Argentina)</b>",*/
    
    "Liga BetPlay <b>(Colombia)</b>","Liga BetPlay <b>(Colombia)</b>","Liga BetPlay <b>(Colombia)</b>","Liga BetPlay <b>(Colombia)</b>","Liga BetPlay <b>(Colombia)</b>","Liga BetPlay <b>(Colombia)</b>","Liga BetPlay <b>(Colombia)</b>","Liga BetPlay <b>(Colombia)</b>",

    "Conmebol Libertadores","Conmebol Libertadores","Conmebol Libertadores",/*"Conmebol Libertadores","Conmebol Libertadores","Conmebol Libertadores","Conmebol Libertadores",*/
    "Conmebol Sudamericana","Conmebol Sudamericana","Conmebol Sudamericana","Conmebol Sudamericana","Conmebol Sudamericana","Conmebol Sudamericana","Conmebol Sudamericana","Conmebol Sudamericana","Conmebol Sudamericana",/*"Conmebol Sudamericana","Conmebol Sudamericana",*/
    
    
    "RECOPA Sudamericana (VUELTA)",
    "Copa Argentina",/*"Copa Argentina","Copa Argentina",*/
    



    "Copa del Rey <b>(España)</b>",
    "Europa League <b>(Cuartos)</b>","Europa League <b>(Cuartos)</b>","Europa League <b>(Cuartos)</b>","Europa League <b>(Cuartos)</b>",/*"Europa League <b>(Octavos)</b>","Europa League <b>(Octavos)</b>","Europa League <b>(Octavos)</b>","Europa League <b>(Octavos)</b>",*/
    "Premier League","LaLiga","Conmebol Libertadores","Liga Argentina",
    "Clasificatorio para la Copa del Mundo","Clasificatorio para la Copa del Mundo","Clasificatorio para la Copa del Mundo","Clasificatorio para la Copa del Mundo","Clasificatorio para la Copa del Mundo",
    "Champions League <b>(Cuartos)</b>","Champions League <b>(Cuartos)</b>",
    "Primera Division <b>(Chile)</b>",
    // "Serie A <b>(Italia)</b>",





];
//console.log<b>(Est)</b></b>;
