function funcTimerStart()
{
	var ausgabe = funcZeit(glTime);
	$("#idTimer").text(ausgabe);
	glTimerInterval = setInterval(funcTimer, 1000);
}

function funcTimerStop()
{
	clearInterval(glTimerInterval);
}

function funcTimer()
{
	glTime = glTime + 1;
	var ausgabe = funcZeit(glTime);
	$("#idTimer").text(ausgabe);
	//console.log(glTime + "glTime");
	//console.log(glHighscore + "glHigh");
}

function funcZeit(t)
{
	var min = Math.floor(t/60);
	var sec = t-(min*60);
	sec = String(sec);
	if(sec.length === 1)
	{
		sec = "0" + sec;
	}
	var zeit = min + ":" + sec;
	return zeit;
}