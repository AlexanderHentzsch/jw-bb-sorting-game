function funcStart()
{
	glBibelbuecherOriginal = glBibelbuecherSelect;
	var temp = new Array(); // Speichert alle verwendeten ArrayPositionen
	glBibelbuecherAusgabe = new Array();

	//Bibelbücher umsortieren
	
	
    var j = 0;
    /*Führt zum Unendlichkeitsfehler*/
	while(glBibelbuecherAusgabe.length < 66)
	{
		var zufall = funcMathZufallszahl(0, 65);

		//Überprüfen, ob die Zufallszahl bereits vergeben wurden
		//Und ob das Bibelbuch nicht von beginn an richtig liegt
		if((temp.indexOf(zufall) == -1) && (zufall !== j))
		{
			if(glSortiert === 1)
			{
				if((j <=38) && (zufall <= 38))
				{
					temp[j] = zufall;
					glBibelbuecherAusgabe[j] = glBibelbuecherOriginal[zufall+2];
					j++;
				} else if((j >38) && (zufall > 38))
				{
					temp[j] = zufall;
					glBibelbuecherAusgabe[j] = glBibelbuecherOriginal[zufall+2];
					j++;
				}
			} else 
			{
				temp[j] = zufall;
				glBibelbuecherAusgabe[j] = glBibelbuecherOriginal[zufall+2];
				j++;
			}
		}
	}

	/*
		##################
		-----DEBUGGER-----
		##################
	*/
	var debug = 0;
	if(debug == 1)
	{
		for(i = 0; i <= 65; i++)
		{
			glBibelbuecherAusgabe[i] = glBibelbuecherOriginal[i+2];
		}
	}

	//Bibelbücher ausgeben
	funcBibbAusgabe(glBibelbuecherAusgabe); //Ausgabe der Bibelbücher
}

function funcBibbAusgabe(array)
{
	//Inhalt löschen (Notwendig bei einem Neustart da der Text nur "geaddet" wird
	$("#idListe1").empty(); $("#idListe2").empty();

	var bibNamenNeu = array;
	//Präffix und Suffix
	var ausgabe01 = '<p id="idName';
	var ausgabe02 = '" class="Bibelbuch textdunn ';
	var ausgabe03 = glBibelbuecherOriginal[1]; /*kurz oder lang*/
	var ausgabe04 = '" onclick="funcSelectName('
	var ausgabe05 = ')">';
	var ausgabe06 = '</p>';

	var i = 0;
	var idNr = 1;
	var counter = 0;
	
	while(i < array.length)
	{
		/*<p id="idName12" class="Bibelbuch lang dunkel" onclick="funcSelectName(12)">Nehemia</p>*/
		var ausgabe = ausgabe01 + idNr + ausgabe02 + ausgabe03 + ausgabe04 + idNr + ausgabe05 + array[i] + ausgabe06;
		
		if(counter <= 38)
		{
			$("#idListe1").append(ausgabe);
		} else
		{
			$("#idListe2").append(ausgabe);
		}

		idNr++;
		counter++;
		i++;
	}

	//Farbschattierung
	var i = 1;
	while(i <= 66)
    {
        var tmp_class = "dunkel";
        if ((i >= 6 && i <= 17) || (i == 44)) {
            tmp_class = "hell";
        } else if ((i >= 18 && i <= 22) || (i >= 45 && i <= 65)) {
            tmp_class = "mittel";
        }
        $("#idName" + i).addClass(tmp_class);
        i++;
    }

	glTime = 0;
	funcTimerStart();
	funcKontrolle(); /*Um die Infoleiste zu befüllen*/
	funcBibelbuecherBreite();
}

//Zufallszahl zwischen ...
function funcMathZufallszahl(min, max)
{
	return min + parseInt( Math.random() * ( (max + 1 ) - min ));
}