function funcStatusKontrolleAusgabe()
{
	//console.log("Kontrolle");
	$("#idStatusKontrolle").removeClass("kontrolle");
	switch(glKontrolle)
	{
		case 0: $("#idStatusKontrolle").text("Kontrolle: Aus"); break;
		case 1: $("#idStatusKontrolle").text("Kontrolle: An"); $("#idStatusKontrolle").addClass("kontrolle"); break;
	}
}

function funcStatusKontrolleAendern()
{
	switch(glKontrolle)
	{
		case 0: glKontrolle = 1; break;
		case 1: glKontrolle = 0; break;
	}
	funcStatusKontrolleAusgabe();
	funcLocalStorageSpeichern();
}

function funcKontrolle()
{
	var anzahl = $('.Bibelbuch').length
	var pruefen = new Array();
	var kontrolle = 0;

	var i = 0;
	while(i < anzahl)
	{
		pruefen[i] = $(".Bibelbuch:eq(" + i + ")").text();
		i++;
	}

	var i = 0;
	while(i < 66)
	{
		if(pruefen[i] == glBibelbuecherOriginal[i+2])
		{
			$("#idName"+(i+1)).addClass("richtig");
			kontrolle++;
		} else
		{
			$("#idName"+(i+1)).removeClass("richtig");
		}
		i++;
	}
	
	if(kontrolle === 66)
	{
		$("#idEndzeit").text(funcZeit(glTime)); /*Zeit ausgeben*/
		clearInterval(glTimerInterval); /*Interval stoppen*/
		funcHighscoreVergleichen(); //Highscore überprüfen und evtl. ausgeben
		funcMenuVisibility(3); //Sichtbarmachen des Endscreens
	} else
	{
		var dif = 66 - kontrolle;
		var ausgabe = "";
		if(dif === 65)
		{
			ausgabe = kontrolle + " ist richtig\n" + dif + " sind leider falsch";
		} else
		{
			ausgabe = kontrolle + " sind richtig\n" + dif + " sind leider falsch";
		}
		$("#idInfoleisteFix").text(ausgabe);
	}

	if(glKontrolle === 0)
	{
		funcDeKontrolle();
	}
}

function funcDeKontrolle()
{
	var i = 1;
	while(i <= 67)
	{
		$("#idName"+i).removeClass("richtig");
		i++;
	}
}