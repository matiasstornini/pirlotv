let Match=[    
" Arsenal - Fulham "," Manchester United - Burnley ",
" Leicester City - Southampton ",
" Osasuna - Elche "," Real Sociedad - Sevilla "," Atlético Madrid - Eibar "," Deportivo Alavés - Huesca "," Cádiz - Celta de Vigo "," Real Betis - Valencia "," Getafe - Real Madrid "," Levante - Villarreal ",
" Milan - Genoa "," Atalanta - Juventus "," Bologna - Spezia "," Lazio - Benevento "," Torino - Roma "," Napoli - Internazionale ",
 " Borussia Dortmund - Werder Bremen ",
" Arsenal - Racing Club "," Estudiantes - Gimnasia La Plata "," Independiente - Defensa y Justicia "," Colón - Godoy Cruz ",
" América de Cali - Deportes Tolima "," Atlético Bucaramanga - Rionegro Águilas "," Atlético Nacional - Patriotas Boyacá "," Boyacá Chicó - Jaguares de Córdoba "," Deportivo Pereira - Deportivo Pasto "," La Equidad - Santa Fe "," Millonarios - Deportivo Cali "," Once Caldas - Medellín ",
];

let Est=[
'https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/3757145/arsenal-vs-fulham/ ','https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/3757151/manchester-united-vs-burnley/ ',
'https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/3955227/leicester-city-vs-southampton/ ',
'https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/3968455/osasuna-vs-elche/ ','https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/3968456/real-sociedad-vs-sevilla/ ','https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/3968450/atletico-madrid-vs-eibar/ ','https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/3970211/deportivo-alaves-vs-huesca/ ','https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/3968453/cadiz-vs-celta-de-vigo/ ','https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/3968451/real-betis-vs-valencia/ ','https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/3968452/getafe-vs-real-madrid/ ','https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/3968454/levante-vs-villarreal/ ',
'https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/3777231/milan-vs-genoa/ ','https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/3777233/atalanta-vs-juventus/ ','https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/3777236/bologna-vs-spezia/ ','https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/3777229/lazio-vs-benevento/ ','https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/3777235/torino-vs-roma/ ','https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/3777232/napoli-vs-internazionale/ ',
'https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/3734018/borussia-dortmund-vs-werder-bremen/ ',
'https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/3917372/colon-vs-godoy-cruz/ ','https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/3917380/estudiantes-vs-gimnasia-la-plata/ ','https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/3917373/arsenal-vs-racing-club/ ','https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/3917379/independiente-vs-defensa-y-justicia/ ',
'https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/3887226/america-de-cali-vs-deportes-tolima/ ','https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/3887220/atletico-bucaramanga-vs-rionegro-aguilas/ ','https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/3887224/atletico-nacional-vs-patriotas-boyaca/ ','https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/3887225/boyaca-chico-vs-jaguares-de-cordoba/ ','https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/3887222/deportivo-pereira-vs-deportivo-pasto/ ','https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/3887223/la-equidad-vs-santa-fe/ ','https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/3887227/millonarios-vs-deportivo-cali/ ','https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/3887221/once-caldas-vs-medellin/ ',
];

let Enl = [
    "","",
    AIng[0],
    "","","","","","",AEsp[0]+" "+AEsp[1],AEsp[2],
    "","","","","",AIta[0],
    "",
    "",AArg[0],"","",
    "","","","","","","","",
];

let Title=[
    "Premier League <b>(Inglaterra)</b>","Premier League <b>(Inglaterra)</b>",/*"Premier League <b>(Inglaterra)</b>","Premier League <b>(Inglaterra)</b>",*/
    "FA CUP <b>(Inglaterra)</b>",/*"FA CUP <b>(Inglaterra)</b>",*/
    "LaLiga <b><b>(España)</b>","LaLiga <b><b>(España)</b>","LaLiga <b><b>(España)</b>","LaLiga <b><b>(España)</b>","LaLiga <b><b>(España)</b>","LaLiga <b><b>(España)</b>","LaLiga <b><b>(España)</b>","LaLiga <b><b>(España)</b>",/*"LaLiga <b><b>(España)</b>",*/
    "Serie A <b><b>(Italia)</b>","Serie A <b><b>(Italia)</b>","Serie A <b><b>(Italia)</b>","Serie A <b><b>(Italia)</b>","Serie A <b><b>(Italia)</b>","Serie A <b><b>(Italia)</b>",/*"Serie A <b><b>(Italia)</b>","Serie A <b><b>(Italia)</b>","Serie A <b><b>(Italia)</b>",*/
    "Bundesliga <b><b>(Alemania)</b>",/*"Bundesliga <b><b>(Alemania)</b>","Bundesliga <b><b>(Alemania)</b>","Bundesliga <b><b>(Alemania)</b>","Bundesliga <b><b>(Alemania)</b>",*/
    
    "Liga Profesional <b>(Argentina)</b>","Liga Profesional <b><b>(Argentina)</b>","Liga Profesional <b><b>(Argentina)</b>","Liga Profesional <b><b>(Argentina)</b>",/*"Liga Profesional <b><b>(Argentina)</b>","Liga Profesional <b><b>(Argentina)</b>",/*"Liga Profesional <b><b>(Argentina)</b>",*/
    
    "Liga BetPlay <b>(Colombia)</b>","Liga BetPlay <b>(Colombia)</b>","Liga BetPlay <b>(Colombia)</b>","Liga BetPlay <b>(Colombia)</b>","Liga BetPlay <b>(Colombia)</b>","Liga BetPlay <b>(Colombia)</b>","Liga BetPlay <b>(Colombia)</b>","Liga BetPlay <b>(Colombia)</b>",
    "RECOPA Sudamericana (VUELTA)",
    "Copa Argentina",/*"Copa Argentina","Copa Argentina",*/
    "Conmebol Sudamericana",/*"Conmebol Sudamericana","Conmebol Sudamericana","Conmebol Sudamericana","Conmebol Sudamericana",/*"Conmebol Sudamericana","Conmebol Sudamericana",*/
    



    "Copa del Rey <b>(España)</b>",
    "Conmebol Libertadores",/*"Conmebol Libertadores",*/
    "Europa League <b>(Cuartos)</b>","Europa League <b>(Cuartos)</b>","Europa League <b>(Cuartos)</b>","Europa League <b>(Cuartos)</b>",/*"Europa League <b>(Octavos)</b>","Europa League <b>(Octavos)</b>","Europa League <b>(Octavos)</b>","Europa League <b>(Octavos)</b>",*/
    "Premier League","LaLiga","Conmebol Libertadores","Liga Argentina",
    "Clasificatorio para la Copa del Mundo","Clasificatorio para la Copa del Mundo","Clasificatorio para la Copa del Mundo","Clasificatorio para la Copa del Mundo","Clasificatorio para la Copa del Mundo",
    "Champions League <b>(Cuartos)</b>","Champions League <b>(Cuartos)</b>",
    "Primera Division <b>(Chile)</b>",
    // "Serie A <b>(Italia)</b>",





];
//console.log<b>(Est)</b></b>;
