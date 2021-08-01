let Match=[
  " Stuttgart - Barcelona",   " Wolfsburg - Atlético Madrid"," Nice - Milan"," Olympique Marseille - Villarreal",
  " Colón - Godoy Cruz "," Lanús - Unión Santa Fe "," Racing Club - Sarmiento "," Platense - Independiente ",
   " Deportes Tolima - Alianza Petrolera "," Deportivo Cali - Atlético Bucaramanga "," Medellín - Junior ",

];

let Est=[
'https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/4075503/stuttgart-vs-barcelona/','https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/4069115/wolfsburg-vs-atletico-madrid/ ','https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/4065082/nice-vs-milan/','https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/4062130/olympique-marseille-vs-villarreal/',
'https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/4043816/colon-vs-godoy-cruz/ ','https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/4043814/lanus-vs-union-santa-fe/ ','https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/4043820/racing-club-vs-sarmiento/ ','https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/4043821/platense-vs-independiente/ ',
'https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/4060711/deportes-tolima-vs-alianza-petrolera/ ','https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/4060713/deportivo-cali-vs-atletico-bucaramanga/ ','https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/4060716/medellin-vs-junior/ ',
];

let Enl = [
    "","","","",
    "","","",AArg[0],
    "","",ACol[0],

    ""];

let HOY = "31/07/2021";
let Abtns = [
1,0,0
];

let Title=[
    /*"Premier League <b>(Inglaterra)</b>","Premier League <b>(Inglaterra)</b>","Premier League <b>(Inglaterra)</b>","Premier League <b>(Inglaterra)</b>","Premier League <b>(Inglaterra)</b>","Premier League <b>(Inglaterra)</b>","Premier League <b>(Inglaterra)</b>","Premier League <b>(Inglaterra)</b>","Premier League <b>(Inglaterra)</b>",/*"Premier League <b>(Inglaterra)</b>",*/
    /*"Coppa Italia <b>(Final)</b>",*/

    /*"LaLiga <b>(España)</b>","LaLiga <b>(España)</b>",/*"LaLiga <b>(España)</b>","LaLiga <b>(España)</b>","LaLiga <b>(España)</b>","LaLiga <b>(España)</b>","LaLiga <b>(España)</b>",/*"LaLiga <b>(España)</b>","LaLiga <b>(España)</b>","LaLiga <b>(España)</b>",/*"LaLiga <b>(España)</b>","LaLiga <b>(España)</b>",/*"LaLiga <b>(España)</b>",*/

    /*"Ligue 1 <b>(Francia)</b>","Ligue 1 <b>(Francia)</b>",*/
    /*"Serie A <b>(Italia)</b>","Serie A <b>(Italia)</b>","Serie A <b>(Italia)</b>","Serie A <b>(Italia)</b>","Serie A <b>(Italia)</b>","Serie A <b>(Italia)</b>","Serie A <b>(Italia)</b>","Serie A <b>(Italia)</b>",/*"Serie A <b>(Italia)</b>","Serie A <b>(Italia)</b>",*/

    /*"Bundesliga <b>(Alemania)</b>","Bundesliga <b>(Alemania)</b>","Bundesliga <b>(Alemania)</b>","Bundesliga <b>(Alemania)</b>","Bundesliga <b>(Alemania)</b>",/*"Bundesliga <b>(Alemania)</b>",*/
    /*"Juegos Olimpicos","Juegos Olimpicos","Juegos Olimpicos","Juegos Olimpicos",/*"Juegos Olimpicos","Juegos Olimpicos","Juegos Olimpicos","Juegos Olimpicos",/**/
   "Amistoso","Amistoso","Amistoso","Amistoso",/**/
    "Liga Profesional <b>(Argentina)</b>","Liga Profesional <b>(Argentina)</b>","Liga Profesional <b>(Argentina)</b>","Liga Profesional <b>(Argentina)</b>",/*"Liga Profesional <b>(Argentina)</b>","Liga Profesional <b>(Argentina)</b>",/*"Liga Profesional <b>(Argentina)</b>","Liga Profesional <b>(Argentina)</b>","Liga Profesional <b>(Argentina)</b>","Liga Profesional <b>(Argentina)</b>","Liga Profesional <b>(Argentina)</b>","Liga Profesional <b>(Argentina)</b>",/*"Liga Profesional <b>(Argentina)</b>",*/
    "Liga BetPlay <b>(Colombia)</b>","Liga BetPlay <b>(Colombia)</b>","Liga BetPlay <b>(Colombia)</b>",/*"Liga BetPlay <b>(Colombia)</b>","Liga BetPlay <b>(Colombia)</b>","Liga BetPlay <b>(Colombia)</b>","Liga BetPlay <b>(Colombia)</b>","Liga BetPlay <b>(Colombia)</b>",*/

    /*"Champions League <b>(Final)</b>",/*"Champions League <b>(Cuartos)</b>",*/
    "Conmebol Libertadores",/*"Conmebol Libertadores","Conmebol Libertadores","Conmebol Libertadores",/*"Conmebol Libertadores","Conmebol Libertadores",/*"Conmebol Libertadores",/*"Conmebol Libertadores",*/
    "Conmebol Sudamericana","Conmebol Sudamericana","Conmebol Sudamericana","Conmebol Sudamericana","Conmebol Sudamericana","Conmebol Sudamericana","Conmebol Sudamericana","Conmebol Sudamericana","Conmebol Sudamericana",/*"Conmebol Sudamericana","Conmebol Sudamericana",*/
    
    
    /*"Clasificatorio para la Copa del Mundo","Clasificatorio para la Copa del Mundo","Clasificatorio para la Copa del Mundo","Clasificatorio para la Copa del Mundo","Clasificatorio para la Copa del Mundo",/*"Clasificatorio para la Copa del Mundo",*/
   /* "RECOPA Sudamericana (VUELTA)",*/
    "Copa Argentina",/*"Copa Argentina","Copa Argentina",*/




    "Eurocopa",/*"Eurocopa",/*"Eurocopa","Eurocopa",/*"Eurocopa",/*"Selecciones <b>(Amistoso)</b>","Selecciones <b>(Amistoso)</b>",/*"Selecciones <b>(Amistoso)</b>","Selecciones <b>(Amistoso)</b>","Selecciones <b>(Amistoso)</b>",/*"Europa League <b>(Semifinal)</b>",/*"Europa League <b>(Cuartos)</b>","Europa League <b>(Cuartos)</b>",/*"Europa League <b>(Octavos)</b>","Europa League <b>(Octavos)</b>","Europa League <b>(Octavos)</b>","Europa League <b>(Octavos)</b>",*/
    "Copa America","Copa America",
    "EFL CARABAO CUP <b>(Inglaterra)</b>",
    "Copa del Rey <b>(España)</b>",
    "Premier League","LaLiga","Conmebol Libertadores","Liga Argentina",
    "Primera Division <b>(Chile)</b>",
    // "Serie A <b>(Italia)</b>",

];
//console.log<b>(Est)</b></b>;
