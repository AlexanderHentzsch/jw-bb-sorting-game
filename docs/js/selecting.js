var glStatus = 0;
var glSelcID1 = "";
var glSelcID2 = "";

function funcSelectName(nr)
{
	//funcDeFilter(); //Filter aufheben
	var id1 = glSelcID1;
	var id2 = glSelcID2;
	var idgeklickt = "idName" + nr;

	$("#"+idgeklickt).removeClass("richtig");
	if(idgeklickt !== id1)
	{
		if(glStatus === 0)
		{
			$("#"+idgeklickt).toggleClass("select");
			glSelcID1 = idgeklickt;
			glStatus++;
		} else
		{
			glSelcID2 = idgeklickt;
			$("#"+id1).toggleClass("select");
			id2 = glSelcID2; //Muss neu beschrieben werden
			funcNameTauschen(id1, id2);
			glStatus--;
		}
	} else
	{
		$("#"+idgeklickt).toggleClass("select");
		//funcKontrolle();
		glSelcID1 = "";
		glStatus--;
		funcKontrolle();
	}
}

function funcNameTauschen(id1, id2)
{
	var inhalt1 = $("#" + id1).text();
	var inhalt2 = $("#" + id2).text();

	$("#" + id1).text(inhalt2);
	$("#" + id2).text(inhalt1);

	//Storage löschen
	glSelcID1 = "";
	glSelcID2 = "";

	funcKontrolle();
}