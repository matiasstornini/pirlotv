let Match=[    
" Leeds United - Tottenham Hotspur "," Sheffield United - Crystal Palace "," Manchester City - Chelsea "," Liverpool - Southampton ",
" Deportivo Alavés - Levante "," Barcelona - Atlético Madrid "," Cádiz - Huesca "," Athletic Club - Osasuna ",
 " Spezia - Napoli "," Udinese - Bologna "," Internazionale - Sampdoria "," Fiorentina - Lazio ",
  " Borussia Dortmund - RB Leipzig "," Hoffenheim - Schalke 04 "," Werder Bremen - Bayer Leverkusen "," Wolfsburg - Union Berlin "," Bayern München - Borussia M'gladbach ",
   " Godoy Cruz - Banfield "," Atlético Tucumán - Defensa y Justicia "," Gimnasia La Plata - Vélez Sarsfield "," Patronato - Boca Juniors ",
];

let Est=[
'https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/3757178/leeds-united-vs-tottenham-hotspur/ ','https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/3757182/sheffield-united-vs-crystal-palace/ ','https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/3757181/manchester-city-vs-chelsea/ ','https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/3757180/liverpool-vs-southampton/ ',
'https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/3757534/deportivo-alaves-vs-levante/ ','https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/3757536/barcelona-vs-atletico-madrid/ ','https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/3757539/cadiz-vs-huesca/ ','https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/3757535/athletic-club-vs-osasuna/ ',
'https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/3777275/spezia-vs-napoli/ ','https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/3777270/udinese-vs-bologna/ ','https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/3777276/internazionale-vs-sampdoria/ ','https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/3777273/fiorentina-vs-lazio/ ',
'https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/3734046/borussia-dortmund-vs-rb-leipzig/ ','https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/3734047/hoffenheim-vs-schalke-04/ ','https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/3734052/werder-bremen-vs-bayer-leverkusen/ ','https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/3734048/wolfsburg-vs-union-berlin/ ','https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/3734045/bayern-m-nchen-vs-borussia-mgladbach/ ',
'https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/3917409/godoy-cruz-vs-banfield/ ','https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/3917413/atletico-tucuman-vs-defensa-y-justicia/ ','https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/3917417/gimnasia-la-plata-vs-velez-sarsfield/ ','https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/3917416/patronato-vs-boca-juniors/ ',
];

let Enl = [
    "","",AIng[0],"",
    "",AEsp[0],"","",
    "","",AIta[0],"",
    "","","","",AAle[0],
    AArg[0],"","","",
];

let Title=[
    "Premier League <b>(Inglaterra)</b>","Premier League <b>(Inglaterra)</b>","Premier League <b>(Inglaterra)</b>","Premier League <b>(Inglaterra)</b>",/*"Premier League <b>(Inglaterra)</b>",*/

    "LaLiga <b>(España)</b>","LaLiga <b>(España)</b>","LaLiga <b>(España)</b>","LaLiga <b>(España)</b>",/*"LaLiga <b>(España)</b>",/*"LaLiga <b>(España)</b>",/*"LaLiga <b>(España)</b>","LaLiga <b>(España)</b>",/*"LaLiga <b>(España)</b>",*/

    "Serie A <b>(Italia)</b>","Serie A <b>(Italia)</b>","Serie A <b>(Italia)</b>","Serie A <b>(Italia)</b>",/*"Serie A <b>(Italia)</b>","Serie A <b>(Italia)</b>",/*"Serie A <b>(Italia)</b>",/*"Serie A <b>(Italia)</b>","Serie A <b>(Italia)</b>","Serie A <b>(Italia)</b>",*/

    "Bundesliga <b>(Alemania)</b>","Bundesliga <b>(Alemania)</b>","Bundesliga <b>(Alemania)</b>","Bundesliga <b>(Alemania)</b>","Bundesliga <b>(Alemania)</b>",/*"Bundesliga <b>(Alemania)</b>",*/
    
    "Liga Profesional <b>(Argentina)</b>","Liga Profesional <b>(Argentina)</b>","Liga Profesional <b>(Argentina)</b>","Liga Profesional <b>(Argentina)</b>",/*"Liga Profesional <b>(Argentina)</b>","Liga Profesional <b>(Argentina)</b>","Liga Profesional <b>(Argentina)</b>","Liga Profesional <b>(Argentina)</b>","Liga Profesional <b>(Argentina)</b>","Liga Profesional <b>(Argentina)</b>",/*"Liga Profesional <b>(Argentina)</b>",*/
    
    /*"Liga BetPlay <b>(Colombia)</b>","Liga BetPlay <b>(Colombia)</b>",/*"Liga BetPlay <b>(Colombia)</b>","Liga BetPlay <b>(Colombia)</b>","Liga BetPlay <b>(Colombia)</b>","Liga BetPlay <b>(Colombia)</b>","Liga BetPlay <b>(Colombia)</b>","Liga BetPlay <b>(Colombia)</b>",*/

    /*"Champions League <b>(Semifinal)</b>",/*"Champions League <b>(Cuartos)</b>",*/
    /*"Europa League <b>(Semifinal)</b>","Europa League <b>(Semifinal)</b>",/*"Europa League <b>(Cuartos)</b>","Europa League <b>(Cuartos)</b>",/*"Europa League <b>(Octavos)</b>","Europa League <b>(Octavos)</b>","Europa League <b>(Octavos)</b>","Europa League <b>(Octavos)</b>",*/
    /*"Conmebol Libertadores","Conmebol Libertadores","Conmebol Libertadores","Conmebol Libertadores","Conmebol Libertadores",/*"Conmebol Libertadores",/*"Conmebol Libertadores",/*"Conmebol Libertadores",*/
    "Conmebol Sudamericana","Conmebol Sudamericana","Conmebol Sudamericana","Conmebol Sudamericana","Conmebol Sudamericana","Conmebol Sudamericana","Conmebol Sudamericana","Conmebol Sudamericana","Conmebol Sudamericana",/*"Conmebol Sudamericana","Conmebol Sudamericana",*/
    
    
    "RECOPA Sudamericana (VUELTA)",
    "Copa Argentina",/*"Copa Argentina","Copa Argentina",*/
    



    "EFL CARABAO CUP <b>(Inglaterra)</b>",/*"FA CUP <b>(Inglaterra)</b>",*/
    "Copa del Rey <b>(España)</b>",
    "Premier League","LaLiga","Conmebol Libertadores","Liga Argentina",
    "Clasificatorio para la Copa del Mundo","Clasificatorio para la Copa del Mundo","Clasificatorio para la Copa del Mundo","Clasificatorio para la Copa del Mundo","Clasificatorio para la Copa del Mundo",
    "Primera Division <b>(Chile)</b>",
    // "Serie A <b>(Italia)</b>",





];
//console.log<b>(Est)</b></b>;
