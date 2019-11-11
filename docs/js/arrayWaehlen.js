function funcArraySelectAusgabe()
{
	//console.log("ArraySelectAusgabe");
	var string = glArrayNamen[glArrayNr];
	//console.log(string);
	glBibelbuecherSelect = eval(string);

	//Ausgeben
	$("#idSpracheAusgabe").text(glBibelbuecherSelect[0] + ", " + glBibelbuecherSelect[1]);
}

function funcArraySelect(par)
{
	//console.log("ArraySelect");
	glArrayNr = par;
	funcLocalStorageSpeichern();
	funcArraySelectAusgabe();
	funcMenuVisibility(4);
}

function funcArrayAuflisten()
{
	//console.log("ArrayAuflisten");
	/*ausgabe = '<div class="menulink" onclick="funcArraySelect(4);"><p class="menu">Deutsch, kurz</p></div>';*/
	var string = "";
	var ausgabe = "";
	var temp = ['<div class="menulink" onclick="funcArraySelect(', 'i', ');"><p class="menu">', 'glArrayNamen[0]', ", ", 'glArrayNamen[1]', '</p></div>'];

	for(i = 0; i < glArrayNamen.length; i++)
	{
		temp[1] = i;
		string = glArrayNamen[i] + "[0]";
		temp[3] = eval(string);
		string = glArrayNamen[i] + "[1]";
		temp[5] = eval(string);
		
		for(j = 0; j <=6; j++)
		{
			ausgabe = ausgabe + temp[j];
		}
		$("#idListeSprachen").html(ausgabe);
	}
}