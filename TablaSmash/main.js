let principal = document.getElementById('cont-princ');

personajes = new Array();

nombres = ['Mario', 'DonkeyKong', 'Link', 'Samus', 'SamusOscura', 'Yoshi', 'Kirby', 'Fox', 'Pikachu', 'Luigi', 'Ness', 'CaptainFalcon', 'Jigglypuff', 'Peach', 'Daisy', 'Bowser', 'IceClimbers', 'Sheik', 'Zelda', 'DrMario', 'Pichu', 'Falco', 'Marth', 'Lucina', 'YoungLink', 'Ganondorf', 'Mewtwo', 'Roy', 'Chrom', 'MrGame&Watch', 'MetaKnight', 'Pit', 'PitSombrio', 'SamusZero', 'Wario', 'Snake', 'Ike', 'EntrenadorPokémon', 'DiddyKong', 'Lucas', 'Sonic', 'ReyDedede', 'Olimar', 'Lucario', 'ROB', 'ToonLink', 'Wolf', 'Aldeano', 'MegaMan', 'EntrenadoradeWiiFit', 'EstelayDestello', 'LittleMac', 'Gerninja', 'CombateMii', 'Palutena', 'PacMan', 'Daraen', 'Shulk', 'Bowsy', 'DuoDuckHunt', 'Ryu', 'Ken', 'Cloud', 'Corrin', 'Bayonetta', 'Inkling', 'Ridley', 'SimonBelmont', 'RichterBelmont', 'KingKRool', 'Canela', 'Incineroar', 'PlantaPiraña', 'Joker', 'Heroe', 'BanjoyKazooie', 'Terry', 'Byleth', 'MinMin', 'Steve', 'Sefirot', 'Pyra', 'Mythra', 'Kazuya', 'Sora']


if (principal) {
    for (var i = 0; i < nombres.length; i++) {
        personajes[i] = [`assets/Personajes Smash/${nombres[i]}.png`];
    }

    for (var i = 0; i < 16; i++) {
        let creaDiv = document.createElement('div');
        creaDiv.className = "box";
        let creaimg = document.createElement('img');
        creaimg.className = "box";

        creaDiv.setAttribute('class', 'foto');
        creaDiv.innerHTML;
        creaimg.setAttribute('src', personajes[i])
        principal.appendChild(creaDiv);
        principal.appendChild(creaimg);
    }
}

function personajeRandom(player){
    return player[Math.floor(Math.random * player.length)]
}


