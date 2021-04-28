let Match=[    
" Athletic Club - Real Valladolid ",
 " PSG - Manchester City ",
  " Cerro Porteño - Deportivo La Guaira "," Defensa y Justicia - Universitario "," Nacional - Atlético Nacional "," River Plate - Junior "," Santa Fe - Fluminense "," Barcelona - The Strongest "," Olimpia - Always Ready ",
   " Athletico-PR - Metropolitanos "," Independiente - Torque "," Deportes Tolima - Talleres Córdoba "," Emelec - RB Bragantino "," Melgar - Aucas "," Rosario Central - San Lorenzo ",
];

let Est=[
'https://pirlotv3.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/3757515/athletic-club-vs-real-valladolid/ ',
'https://pirlotv3.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/3978413/psg-vs-manchester-city/ ',
'https://pirlotv3.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/3976238/cerro-porteno-vs-deportivo-la-guaira/ ','https://pirlotv3.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/3976228/defensa-y-justicia-vs-universitario/ ','https://pirlotv3.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/3979268/nacional-vs-atletico-nacional/ ','https://pirlotv3.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/3980370/river-plate-vs-junior/ ','https://pirlotv3.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/3976232/santa-fe-vs-fluminense/ ','https://pirlotv3.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/3976231/barcelona-vs-the-strongest/ ','https://pirlotv3.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/3976229/olimpia-vs-always-ready/ ',
'https://pirlotv3.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/3976199/athletico-pr-vs-metropolitanos/ ','https://pirlotv3.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/3978989/independiente-vs-torque/ ','https://pirlotv3.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/3976204/deportes-tolima-vs-talleres-cordoba/ ','https://pirlotv3.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/3976203/emelec-vs-rb-bragantino/ ','https://pirlotv3.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/3976200/melgar-vs-aucas/ ','https://pirlotv3.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/3980366/rosario-central-vs-san-lorenzo/ ',

];

let Enl = [
    AEsp[0],
    AUcl[0],
    "","","","","","","",
    "","","","","",""
];

let Title=[
    /*"Premier League <b>(Inglaterra)</b>","Premier League <b>(Inglaterra)</b>",/*"Premier League <b>(Inglaterra)</b>","Premier League <b>(Inglaterra)</b>",*/

    "LaLiga <b>(España)</b>",/*"LaLiga <b>(España)</b>","LaLiga <b>(España)</b>","LaLiga <b>(España)</b>","LaLiga <b>(España)</b>",/*"LaLiga <b>(España)</b>",/*"LaLiga <b>(España)</b>","LaLiga <b>(España)</b>",/*"LaLiga <b>(España)</b>",*/

    /*"Serie A <b>(Italia)</b>","Serie A <b>(Italia)</b>",/*"Serie A <b>(Italia)</b>","Serie A <b>(Italia)</b>","Serie A <b>(Italia)</b>",/*"Serie A <b>(Italia)</b>",/*"Serie A <b>(Italia)</b>","Serie A <b>(Italia)</b>","Serie A <b>(Italia)</b>",*/

    /*"Bundesliga <b>(Alemania)</b>","Bundesliga <b>(Alemania)</b>","Bundesliga <b>(Alemania)</b>","Bundesliga <b>(Alemania)</b>","Bundesliga <b>(Alemania)</b>",/*"Bundesliga <b>(Alemania)</b>",*/
    
    /*"Liga Profesional <b>(Argentina)</b>","Liga Profesional <b>(Argentina)</b>","Liga Profesional <b>(Argentina)</b>","Liga Profesional <b>(Argentina)</b>","Liga Profesional <b>(Argentina)</b>","Liga Profesional <b>(Argentina)</b>",/*"Liga Profesional <b>(Argentina)</b>",*/
    
    /*"Liga BetPlay <b>(Colombia)</b>","Liga BetPlay <b>(Colombia)</b>","Liga BetPlay <b>(Colombia)</b>","Liga BetPlay <b>(Colombia)</b>","Liga BetPlay <b>(Colombia)</b>","Liga BetPlay <b>(Colombia)</b>","Liga BetPlay <b>(Colombia)</b>","Liga BetPlay <b>(Colombia)</b>",*/

    "Champions League <b>(Semifinal)</b>",/*"Champions League <b>(Cuartos)</b>",*/
    "Conmebol Libertadores","Conmebol Libertadores","Conmebol Libertadores","Conmebol Libertadores","Conmebol Libertadores","Conmebol Libertadores","Conmebol Libertadores",/*"Conmebol Libertadores",*/
    "Conmebol Sudamericana","Conmebol Sudamericana","Conmebol Sudamericana","Conmebol Sudamericana","Conmebol Sudamericana","Conmebol Sudamericana","Conmebol Sudamericana","Conmebol Sudamericana","Conmebol Sudamericana",/*"Conmebol Sudamericana","Conmebol Sudamericana",*/
    
    
    "RECOPA Sudamericana (VUELTA)",
    "Copa Argentina",/*"Copa Argentina","Copa Argentina",*/
    



    "EFL CARABAO CUP <b>(Inglaterra)</b>",/*"FA CUP <b>(Inglaterra)</b>",*/
    "Copa del Rey <b>(España)</b>",
    "Europa League <b>(Cuartos)</b>","Europa League <b>(Cuartos)</b>","Europa League <b>(Cuartos)</b>","Europa League <b>(Cuartos)</b>",/*"Europa League <b>(Octavos)</b>","Europa League <b>(Octavos)</b>","Europa League <b>(Octavos)</b>","Europa League <b>(Octavos)</b>",*/
    "Premier League","LaLiga","Conmebol Libertadores","Liga Argentina",
    "Clasificatorio para la Copa del Mundo","Clasificatorio para la Copa del Mundo","Clasificatorio para la Copa del Mundo","Clasificatorio para la Copa del Mundo","Clasificatorio para la Copa del Mundo",
    "Primera Division <b>(Chile)</b>",
    // "Serie A <b>(Italia)</b>",





];
//console.log<b>(Est)</b></b>;
