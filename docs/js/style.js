function funcBibelbuecherBreite()
{
	var pruefen = $("#idBibelbuchContainer").css("visibility");
	if(pruefen !== "hidden")
	{
		if(glBibelbuecherOriginal[1] === "lang")
		{
			var pMargin = 5 * 2;
			var divPadding = 20 * 2;
			var verfuegbareBreite = parseInt($(".ausgabe").css("width")) - divPadding; /*Padding des Divtags*/
			var anzahl = Math.floor(verfuegbareBreite/190); /*Breite + Margin*/
			var newBreite = verfuegbareBreite/anzahl;
			var newBreite = newBreite - pMargin*2;
			$(".Bibelbuch").css("width", newBreite + "px");
		}
	}
}