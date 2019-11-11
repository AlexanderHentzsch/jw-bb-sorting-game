function funcMenuVisibility(para) {
    $("#idBibelbuchContainer").addClass("unvisible");
    $("#idEndeContainer").addClass("unvisible");
    $(".menufenster").addClass("unvisible");

    var id = "";
    if (!(para >= 1)) {
        para = glMenu;
        console.log("Nicht definiert");
    }
    switch (para) {
        case 1: id = "#idBibelbuchContainer"; glMenu = 1; break; /*Spiel*/
        case 2: id = "#idPausemenu"; glMenu = 2; break; /*Pausemenü*/
        case 3: id = "#idEndeContainer"; glMenu = 3; break; /*Endscreen*/
        case 4: id = "#idHauptmenu"; glMenu = 4; break; /*Hauptmenü*/
        case 5: id = "#idSprachemenu"; glMenu = 5; break; /*Sprache wählen*/
        case 6: id = "#idHighscoremenu"; glMenu = 6; break; /*Highscore*/
    }

    $(id).removeClass("unvisible");
}