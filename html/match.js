let Match=[
" Chelsea - West Bromwich Albion "," Leeds United - Sheffield United "," Leicester City - Manchester City "," Arsenal - Liverpool ",
" Granada - Villarreal "," Real Madrid - Eibar "," Osasuna - Getafe ",
 " Athletic Club - Real Sociedad ",
" Milan - Sampdoria "," Atalanta - Udinese "," Napoli - Crotone "," Torino - Juventus "," Bologna - Internazionale ",
" Borussia Dortmund - Eintracht Frankfurt "," RB Leipzig - Bayern München ",
" Talleres Córdoba - Independiente "," Gimnasia La Plata - Lanús "," Sarmiento - Atlético Tucumán "," Boca Juniors - Defensa y Justicia "," Arsenal - River Plate ",
" Atlético Nacional - Envigado "," Millonarios - Deportes Tolima "
];

let Est=[
'https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/3757127/chelsea-vs-west-bromwich-albion/ ','https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/3757129/leeds-united-vs-sheffield-united/ ','https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/3757130/leicester-city-vs-manchester-city/ ','https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/3757125/arsenal-vs-liverpool/ ',
    
'https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/3757477/granada-vs-villarreal/ ','https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/3757480/real-madrid-vs-eibar/ ','https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/3757479/osasuna-vs-getafe/ ',

'https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/3961614/athletic-club-vs-real-sociedad/ ',

'https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/3777215/milan-vs-sampdoria/ ','https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/3777217/atalanta-vs-udinese/ ','https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/3777209/napoli-vs-crotone/ ','https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/3777212/torino-vs-juventus/ ','https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/3777211/bologna-vs-internazionale/ ',

'https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/3734000/borussia-dortmund-vs-eintracht-frankfurt/', 'https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/3734001/rb-leipzig-vs-bayern-m-nchen/ ',
    
'https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/3917353/talleres-cordoba-vs-independiente/ ','https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/3917348/gimnasia-la-plata-vs-lanus/ ','https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/3924459/sarmiento-vs-atletico-tucuman/ ','https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/3917352/boca-juniors-vs-defensa-y-justicia/ ','https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/3917346/arsenal-vs-river-plate/ ',
    
'https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/3887206/atletico-nacional-vs-envigado/ ','https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/3887209/millonarios-vs-deportes-tolima/ ',
];

let Enl = [
    "","","","",
    "","","",
    "",
    "","","","","",
    "","",
    "","","",AArg[0],"",
    ACol[0],"",
];

let Title=[
"Premier League <b>(Inglaterra)</b>","Premier League <b>(Inglaterra)</b>","Premier League <b>(Inglaterra)</b>","Premier League <b>(Inglaterra)</b>",
"LaLiga <b><b>(España)</b>","LaLiga <b><b>(España)</b>","LaLiga <b><b>(España)</b>",/*"LaLiga <b><b>(España)</b>","LaLiga <b><b>(España)</b>",*/
"Copa del Rey <b>(España)</b>",
"Serie A <b><b>(Italia)</b>","Serie A <b><b>(Italia)</b>","Serie A <b><b>(Italia)</b>","Serie A <b><b>(Italia)</b>","Serie A <b><b>(Italia)</b>",/*"Serie A <b><b>(Italia)</b>",*/
"Bundesliga <b><b>(Alemania)</b>","Bundesliga <b><b>(Alemania)</b>",/*"Bundesliga <b><b>(Alemania)</b>","Bundesliga <b><b>(Alemania)</b>","Bundesliga <b><b>(Alemania)</b>",*/
"Liga Profesional <b><b>(Argentina)</b>","Liga Profesional <b><b>(Argentina)</b>","Liga Profesional <b><b>(Argentina)</b>","Liga Profesional <b><b>(Argentina)</b>","Liga Profesional <b><b>(Argentina)</b>",
"Liga BetPlay <b>(Colombia)</b>","Liga BetPlay <b>(Colombia)</b>","Liga BetPlay <b>(Colombia)</b>","Liga BetPlay <b>(Colombia)</b>","Liga BetPlay <b>(Colombia)</b>",

"Copa Argentina",/*"Copa Argentina","Copa Argentina",*/
"FA CUP <b>(Inglaterra)</b>","FA CUP <b>(Inglaterra)</b>",

"Clasificatorio para la Copa del Mundo","Clasificatorio para la Copa del Mundo","Clasificatorio para la Copa del Mundo","Clasificatorio para la Copa del Mundo","Clasificatorio para la Copa del Mundo",
"Europa League <b>(Octavos)</b>","Europa League <b>(Octavos)</b>","Europa League <b>(Octavos)</b>","Europa League <b>(Octavos)</b>","Europa League <b>(Octavos)</b>","Europa League <b>(Octavos)</b>","Europa League <b>(Octavos)</b>","Europa League <b>(Octavos)</b>",
"Conmebol Libertadores",
"Conmebol Sudamericana","Conmebol Sudamericana","Conmebol Sudamericana","Conmebol Sudamericana","Conmebol Sudamericana","Conmebol Sudamericana","Conmebol Sudamericana",
"Champions League <b>(Octavos)</b>","Champions League <b>(Octavos)</b>",
"Primera Division <b>(Chile)</b>",
// "Serie A <b>(Italia)</b>",





];
//console.log<b>(Est)</b></b>;
