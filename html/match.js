let Match=[    
" Newcastle United - Arsenal "," Manchester United - Liverpool (Susp.)"," Tottenham Hotspur - Sheffield United ",
" Real Valladolid - Real Betis "," Villarreal - Getafe "," Granada - Cádiz "," Valencia - Barcelona ",
" Lazio - Genoa "," Bologna - Fiorentina "," Napoli - Cagliari "," Sassuolo - Atalanta "," Udinese - Juventus "," Sampdoria - Roma ",
" Boca Juniors - Lanús "," Defensa y Justicia - Unión Santa Fe "," Independiente - Atlético Tucumán "," San Lorenzo - Godoy Cruz "," Talleres Córdoba - Huracán "," Banfield - River Plate "," Aldosivi - Argentinos Juniors "," Central Córdoba SdE - Racing Club "," Rosario Central - Newell's Old Boys ",
" Santa Fe - Junior "," Atlético Nacional - La Equidad ",
];

let Est=[
'https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/3757171/newcastle-united-vs-arsenal/ ','https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/3757170/manchester-united-vs-liverpool/ ','https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/3757173/tottenham-hotspur-vs-sheffield-united/ ',
'https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/3757531/real-valladolid-vs-real-betis/ ','https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/3757532/villarreal-vs-getafe/ ','https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/3757526/granada-vs-cadiz/ ','https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/3757530/valencia-vs-barcelona/ ',
'https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/3777263/lazio-vs-genoa/ ','https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/3777262/bologna-vs-fiorentina/ ','https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/3777261/napoli-vs-cagliari/ ','https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/3777259/sassuolo-vs-atalanta/ ','https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/3777265/udinese-vs-juventus/ ','https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/3777267/sampdoria-vs-roma/ ',
'https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/3917402/boca-juniors-vs-lanus/ ','https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/3917405/defensa-y-justicia-vs-union-santa-fe/ ','https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/3917404/independiente-vs-atletico-tucuman/ ','https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/3917397/san-lorenzo-vs-godoy-cruz/ ','https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/3917403/talleres-cordoba-vs-huracan/ ','https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/3917396/banfield-vs-river-plate/ ','https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/3917406/rosario-central-vs-newells-old-boys/ ','https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/3917395/aldosivi-vs-argentinos-juniors/ ','https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/3917398/central-cordoba-sde-vs-racing-club/ ',
'https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/3982827/santa-fe-vs-junior/ ','https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/3982829/atletico-nacional-vs-la-equidad/ ',
];

let Enl = [
    "","",AIng[0],
    "","","",AEsp[0],
    "","","","","","",
    "","","","","",AArg[0],"","","",
    ACol[0],"",
    
    "","","","","","","",
];

let Title=[
    "Premier League <b>(Inglaterra)</b>","Premier League <b>(Inglaterra)</b>","Premier League <b>(Inglaterra)</b>",/*"Premier League <b>(Inglaterra)</b>",*/

    "LaLiga <b>(España)</b>","LaLiga <b>(España)</b>","LaLiga <b>(España)</b>","LaLiga <b>(España)</b>",/*"LaLiga <b>(España)</b>",/*"LaLiga <b>(España)</b>",/*"LaLiga <b>(España)</b>","LaLiga <b>(España)</b>",/*"LaLiga <b>(España)</b>",*/

    "Serie A <b>(Italia)</b>","Serie A <b>(Italia)</b>","Serie A <b>(Italia)</b>","Serie A <b>(Italia)</b>","Serie A <b>(Italia)</b>","Serie A <b>(Italia)</b>",/*"Serie A <b>(Italia)</b>",/*"Serie A <b>(Italia)</b>","Serie A <b>(Italia)</b>","Serie A <b>(Italia)</b>",*/

    /*"Bundesliga <b>(Alemania)</b>","Bundesliga <b>(Alemania)</b>","Bundesliga <b>(Alemania)</b>","Bundesliga <b>(Alemania)</b>","Bundesliga <b>(Alemania)</b>",/*"Bundesliga <b>(Alemania)</b>",*/
    
    "Liga Profesional <b>(Argentina)</b>","Liga Profesional <b>(Argentina)</b>","Liga Profesional <b>(Argentina)</b>","Liga Profesional <b>(Argentina)</b>","Liga Profesional <b>(Argentina)</b>","Liga Profesional <b>(Argentina)</b>","Liga Profesional <b>(Argentina)</b>","Liga Profesional <b>(Argentina)</b>","Liga Profesional <b>(Argentina)</b>","Liga Profesional <b>(Argentina)</b>",/*"Liga Profesional <b>(Argentina)</b>",*/
    
    "Liga BetPlay <b>(Colombia)</b>","Liga BetPlay <b>(Colombia)</b>",/*"Liga BetPlay <b>(Colombia)</b>","Liga BetPlay <b>(Colombia)</b>","Liga BetPlay <b>(Colombia)</b>","Liga BetPlay <b>(Colombia)</b>","Liga BetPlay <b>(Colombia)</b>","Liga BetPlay <b>(Colombia)</b>",*/

    "Europa League <b>(Semifinal)</b>","Europa League <b>(Semifinal)</b>",/*"Europa League <b>(Cuartos)</b>","Europa League <b>(Cuartos)</b>",/*"Europa League <b>(Octavos)</b>","Europa League <b>(Octavos)</b>","Europa League <b>(Octavos)</b>","Europa League <b>(Octavos)</b>",*/
    "Champions League <b>(Semifinal)</b>",/*"Champions League <b>(Cuartos)</b>",*/
    "Conmebol Libertadores","Conmebol Libertadores","Conmebol Libertadores",/*"Conmebol Libertadores","Conmebol Libertadores","Conmebol Libertadores","Conmebol Libertadores",/*"Conmebol Libertadores",*/
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
