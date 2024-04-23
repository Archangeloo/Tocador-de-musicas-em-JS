function toggleAudio(id) {
    var audio = document.getElementById(id);
    var allAudios = document.getElementsByTagName('audio');
    
    // Pausa todos os áudios
    for (var i = 0; i < allAudios.length; i++) {
        allAudios[i].pause();
    }

    // Toca ou pausa o áudio atual
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}

