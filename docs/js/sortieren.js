function funcStatusSortierenAendern()
{
	switch(glSortiert)
	{
		case 0: glSortiert = 1; break;
		case 1: glSortiert = 0; break;
	}
	funcStatusSortierenAusgabe();
	funcLocalStorageSpeichern();
}

function funcStatusSortierenAusgabe()
{
	//console.log("Sortieren ausgabe");
	$("#idStatusSortieren").removeClass("kontrolle");
	switch(glSortiert)
	{
		case 0: $("#idStatusSortieren").text("Sortieren: Aus"); break;
		case 1: $("#idStatusSortieren").text("Sortieren: An"); $("#idStatusSortieren").addClass("kontrolle"); break;
	}
}