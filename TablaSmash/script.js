$(function() { 
    personajes = new Array();
    nombres = ['Mario', 'DonkeyKong', 'Link', 'Samus', 'SamusOscura', 'Yoshi', 'Kirby', 'Fox', 'Pikachu', 'Luigi', 'Ness', 'CaptainFalcon', 'Jigglypuff', 'Peach', 'Daisy', 'Bowser', 'IceClimbers', 'Sheik', 'Zelda', 'DrMario', 'Pichu', 'Falco', 'Marth', 'Lucina', 'YoungLink', 'Ganondorf', 'Mewtwo', 'Roy', 'Chrom', 'MrGame&Watch', 'MetaKnight', 'Pit', 'PitSombrio', 'SamusZero', 'Wario', 'Snake', 'Ike', 'EntrenadorPokémon', 'DiddyKong', 'Lucas', 'Sonic', 'ReyDedede', 'Olimar', 'Lucario', 'ROB', 'ToonLink', 'Wolf', 'Aldeano', 'MegaMan', 'EntrenadoradeWiiFit', 'EstelayDestello', 'LittleMac', 'Gerninja', 'CombateMii', 'Palutena', 'PacMan', 'Daraen', 'Shulk', 'Bowsy', 'DuoDuckHunt', 'Ryu', 'Ken', 'Cloud', 'Corrin', 'Bayonetta', 'Inkling', 'Ridley', 'SimonBelmont', 'RichterBelmont', 'KingKRool', 'Canela', 'Incineroar', 'PlantaPiraña', 'Joker', 'Heroe', 'BanjoyKazooie', 'Terry', 'Byleth', 'MinMin', 'Steve', 'Sefirot', 'Pyra', 'Mythra', 'Kazuya', 'Sora']

    for (var i = 0; i < nombres.length; i++) { 
     personajes[i] = [`assets/Personajes Smash/${nombres[i]}.png`]; 
    }

    function obtenerImagenAleatoria() { 
      return personajes[Math.floor(Math.random() * imagenes.length)]; 
    }

    function cambiarImagen() { 
      $('#imagen').attr('src', obtenerImagenAleatoria()); 
    }

    cambiarImagen();
    $('#boton').on('click', cambiarImagen); 
  });