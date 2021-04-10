let Match=[
    " Manchester City - Leeds United "," Liverpool - Aston Villa "," Crystal Palace - Chelsea ",
     " Getafe - Cádiz "," Athletic Club - Deportivo Alavés "," Eibar - Levante "," Real Madrid - Barcelona ",
     " Spezia - Crotone "," Parma - Milan "," Udinese - Torino ",
    " Bayern München - Union Berlin "," Eintracht Frankfurt - Wolfsburg "," Hertha BSC - Borussia M'gladbach "," Werder Bremen - RB Leipzig "," Stuttgart - Borussia Dortmund ",
     " Godoy Cruz - Arsenal "," Estudiantes - Aldosivi "," Defensa y Justicia - Talleres Córdoba "," Racing Club - Independiente ",
     " Medellín - Alianza Petrolera "," Jaguares de Córdoba - América de Cali "," Deportivo Cali - Atlético Nacional ",
    
    
];

let Est=[
    'https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/3757140/manchester-city-vs-leeds-united/ ','https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/3757139/liverpool-vs-aston-villa/ ','https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/3757137/crystal-palace-vs-chelsea/ ',
    'https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/3757488/getafe-vs-cadiz/ ','https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/3757484/athletic-club-vs-deportivo-alaves/ ','https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/3757487/eibar-vs-levante/ ','https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/3757490/real-madrid-vs-barcelona/ ',
    
    'https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/3777222/spezia-vs-crotone/ ','https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/3777225/parma-vs-milan/ ','https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/3777228/udinese-vs-torino/ ',
    
    'https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/3734009/bayern-m-nchen-vs-union-berlin/ ','https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/3734011/eintracht-frankfurt-vs-wolfsburg/ ','https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/3734012/hertha-bsc-vs-borussia-mgladbach/ ','https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/3734015/werder-bremen-vs-rb-leipzig/ ','https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/3734017/stuttgart-vs-borussia-dortmund/ ',
    
    'https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/3917355/godoy-cruz-vs-arsenal/ ','https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/3917360/estudiantes-vs-aldosivi/ ','https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/3917361/defensa-y-justicia-vs-talleres-cordoba/ ','https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/3917367/racing-club-vs-independiente/ ',
    
    'https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/3887215/medellin-vs-alianza-petrolera/ ','https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/3887211/jaguares-de-cordoba-vs-america-de-cali/ ','https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/3887217/deportivo-cali-vs-atletico-nacional/ ',
];

let Enl = [
    "",AIng[0],"",
    AEsp[0],"","","",
    "","","",
    
    AAle[0],"","","","",
    "","","","",
    "","","",


];

let Title=[
    "Premier League <b>(Inglaterra)</b>","Premier League <b>(Inglaterra)</b>","Premier League <b>(Inglaterra)</b>",/*"Premier League <b>(Inglaterra)</b>",*/
    "LaLiga <b><b>(España)</b>","LaLiga <b><b>(España)</b>","LaLiga <b><b>(España)</b>","LaLiga <b><b>(España)</b>",/*"LaLiga <b><b>(España)</b>",*/
    "Serie A <b><b>(Italia)</b>","Serie A <b><b>(Italia)</b>","Serie A <b><b>(Italia)</b>",/*"Serie A <b><b>(Italia)</b>","Serie A <b><b>(Italia)</b>","Serie A <b><b>(Italia)</b>",*/
    "Bundesliga <b><b>(Alemania)</b>","Bundesliga <b><b>(Alemania)</b>","Bundesliga <b><b>(Alemania)</b>","Bundesliga <b><b>(Alemania)</b>","Bundesliga <b><b>(Alemania)</b>",
    "Liga Profesional <b><b>(Argentina)</b>","Liga Profesional <b><b>(Argentina)</b>","Liga Profesional <b><b>(Argentina)</b>","Liga Profesional <b><b>(Argentina)</b>",/*"Liga Profesional <b><b>(Argentina)</b>",*/
    "Liga BetPlay <b>(Colombia)</b>","Liga BetPlay <b>(Colombia)</b>","Liga BetPlay <b>(Colombia)</b>","Liga BetPlay <b>(Colombia)</b>","Liga BetPlay <b>(Colombia)</b>",
    
    "RECOPA Sudamericana (IDA)",
    "Conmebol Libertadores","Conmebol Libertadores",
    "Conmebol Sudamericana","Conmebol Sudamericana","Conmebol Sudamericana","Conmebol Sudamericana","Conmebol Sudamericana",/*"Conmebol Sudamericana","Conmebol Sudamericana",*/

    "Copa del Rey <b>(España)</b>",

    "Champions League <b>(Cuartos)</b>","Champions League <b>(Cuartos)</b>",
    "Copa Argentina",/*"Copa Argentina","Copa Argentina",*/
    "FA CUP <b>(Inglaterra)</b>","FA CUP <b>(Inglaterra)</b>",

    "Premier League","LaLiga","Conmebol Libertadores","Liga Argentina",
    "Clasificatorio para la Copa del Mundo","Clasificatorio para la Copa del Mundo","Clasificatorio para la Copa del Mundo","Clasificatorio para la Copa del Mundo","Clasificatorio para la Copa del Mundo",
    "Europa League <b>(Octavos)</b>","Europa League <b>(Octavos)</b>","Europa League <b>(Octavos)</b>","Europa League <b>(Octavos)</b>","Europa League <b>(Octavos)</b>","Europa League <b>(Octavos)</b>","Europa League <b>(Octavos)</b>","Europa League <b>(Octavos)</b>",
    "Primera Division <b>(Chile)</b>",
    // "Serie A <b>(Italia)</b>",





];
//console.log<b>(Est)</b></b>;
