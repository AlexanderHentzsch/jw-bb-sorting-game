function funcHighscoreVergleichen()
{
	$("#idEndscreenHighscore").addClass("unvisible");
	if(glTime < glHighscore)
	{
		$("#idEndscreenHighscore").removeClass("unvisible");
		glHighscore = glTime;
		funcLocalStorageSpeichern();
	}
}

function funcHighscoreAusgabe()
{
	var ausgabe = funcZeit(glHighscore);
	$("#idHighscoreAusgabe").text(ausgabe);
}

function funcHighscoreDeletFrage()
{
	$("#idHighscoreLoeschen").addClass("unvisible");
	$("#idHighscoreSichAbfr").removeClass("unvisible");
}

function funcHighscoreDeletAbbrechen()
{
	$("#idHighscoreLoeschen").removeClass("unvisible");
	$("#idHighscoreSichAbfr").addClass("unvisible");
}
function funcHighscoreDeletBest()
{
	$("#idHighscoreLoeschen").removeClass("unvisible");
	$("#idHighscoreSichAbfr").addClass("unvisible");
	localStorage.removeItem("Highscore");
	glHighscore = 600;
	funcHighscoreAusgabe();
}