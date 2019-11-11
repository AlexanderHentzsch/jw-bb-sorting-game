function funcLocalStorageLaden()
{
	var lsKontrolle = parseInt(localStorage.getItem("Kontrolle"));
	if(lsKontrolle >= 0)
	{
		glKontrolle = parseInt(lsKontrolle);
	}

	var lsArray = parseInt(localStorage.getItem("Array"));
	if(lsArray >= 1)
	{
		glArrayNr = parseInt(lsArray);
	}

	var lsHighscore = parseInt(localStorage.getItem("Highscore"));
	if(lsHighscore >= 1)
	{
		glHighscore = parseInt(lsHighscore);
	}
	/*NEU*/
	var lsSortieren = parseInt(localStorage.getItem("Sortieren"));
	if(lsSortieren >= 0)
	{
		glSortiert = parseInt(lsSortieren);
	}
	/*NEU ENDE*/
}

function funcLocalStorageSpeichern()
{
	localStorage.setItem("Kontrolle", glKontrolle);
	localStorage.setItem("Array", glArrayNr);
	localStorage.setItem("Highscore", glHighscore);
	/*NEU*/
	localStorage.setItem("Sortieren", glSortiert);
	/*NEU ENDE*/
	console.log("Einstellungen wurden gespeichert");
}

function funcLocalStorageClear()
{
	localStorage.clear();
}