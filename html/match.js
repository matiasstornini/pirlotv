let Match=[
" Chelsea - Sheffield United "," Leicester City - Manchester United ",

" West Ham United - Arsenal "," Aston Villa - Tottenham Hotspur ",

" Getafe - Elche "," Valencia - Granada "," Villarreal - Cádiz "," Atlético Madrid - Deportivo Alavés "," Real Sociedad - Barcelona ",

" Hellas Verona - Atalanta "," Juventus - Benevento "," Sampdoria - Torino "," Udinese - Lazio "," Fiorentina - Milan "," Roma - Napoli ",

" Sarmiento - Defensa y Justicia "," Colón - Rosario Central "," San Lorenzo - Aldosivi "," Boca Juniors - Talleres Córdoba ",

" Medellín - Deportivo Pasto "," Deportivo Cali - Deportes Tolima "," Millonarios - Atlético Nacional ",

];

let Est=[
'https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/3917310/chelsea-vs-sheffield-united/ ','https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/3917309/leicester-city-vs-manchester-united/ ',

'https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/3757124/west-ham-united-vs-arsenal/ ','https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/3922988/aston-villa-vs-tottenham-hotspur/ ',

'https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/3757468/getafe-vs-elche/ ','https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/3757471/valencia-vs-granada/ ','https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/3757473/villarreal-vs-cadiz/ ','https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/3757465/atletico-madrid-vs-deportivo-alaves/ ','https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/3757470/real-sociedad-vs-barcelona/ ',

'https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/3777199/hellas-verona-vs-atalanta/ ','https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/3777200/juventus-vs-benevento/ ','https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/3777208/sampdoria-vs-torino/ ','https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/3777204/udinese-vs-lazio/ ','https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/3777205/fiorentina-vs-milan/ ','https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/3777206/roma-vs-napoli/ ',

'https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/3924457/sarmiento-vs-defensa-y-justicia/ ','https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/3917318/colon-vs-rosario-central/ ','https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/3917316/san-lorenzo-vs-aldosivi/ ','https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/3917327/boca-juniors-vs-talleres-cordoba/ ',

'https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/3887170/medellin-vs-deportivo-pasto/ ','https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/3887172/deportivo-cali-vs-deportes-tolima/ ','https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/3887173/millonarios-vs-atletico-nacional/ '
];

let Enl = [
    AIng[0],"",
    "","",
    AEsp[0],"","","","",
    "","","","","","",
    "","","","",
    "","",""
];

let Title=[
"FA CUP <b>(Inglaterra)</b>","FA CUP <b>(Inglaterra)</b>",
    
"Premier League <b>(Inglaterra)</b>","Premier League <b>(Inglaterra)</b>",
    
"LaLiga <b><b>(España)</b>","LaLiga <b><b>(España)</b>","LaLiga <b><b>(España)</b>","LaLiga <b><b>(España)</b>","LaLiga <b><b>(España)</b>",

"Serie A <b><b>(Italia)</b>","Serie A <b><b>(Italia)</b>","Serie A <b><b>(Italia)</b>","Serie A <b><b>(Italia)</b>","Serie A <b><b>(Italia)</b>","Serie A <b><b>(Italia)</b>",
    
"Liga Profesional <b><b>(Argentina)</b>","Liga Profesional <b><b>(Argentina)</b>","Liga Profesional <b><b>(Argentina)</b>","Liga Profesional <b><b>(Argentina)</b>",
    
"Liga BetPlay <b>(Colombia)</b>","Liga BetPlay <b>(Colombia)</b>","Liga BetPlay <b>(Colombia)</b>",
    
"Europa League <b>(Octavos)</b>","Europa League <b>(Octavos)</b>","Europa League <b>(Octavos)</b>","Europa League <b>(Octavos)</b>","Europa League <b>(Octavos)</b>","Europa League <b>(Octavos)</b>","Europa League <b>(Octavos)</b>","Europa League <b>(Octavos)</b>",
"Conmebol Libertadores",
"Conmebol Sudamericana","Conmebol Sudamericana","Conmebol Sudamericana","Conmebol Sudamericana","Conmebol Sudamericana","Conmebol Sudamericana","Conmebol Sudamericana",
"Champions League <b>(Octavos)</b>","Champions League <b>(Octavos)</b>",
"Copa Argentina","Copa Argentina","Copa Argentina",
"Bundesliga <b><b>(Alemania)</b>","Bundesliga <b><b>(Alemania)</b>","Bundesliga <b><b>(Alemania)</b>","Bundesliga <b><b>(Alemania)</b>","Bundesliga <b><b>(Alemania)</b>",
"Primera Division <b>(Chile)</b>",
// "Serie A <b>(Italia)</b>",

"Fifa World Cup",



];
//console.log<b>(Est)</b></b>;
