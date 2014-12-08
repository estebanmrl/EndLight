#pragma strict

var pauseGUIstate : boolean = false;
var playTime : float;

function OnGUI()
{
	if (pauseGUIstate == true)
	{
		playTime =  Time.timeScale;
		Time.timeScale = 0;

		GUILayout.BeginArea(Rect (300,100,400, Screen.width/2));

		// GUILayout.BeginHorizontal();
		// if(GUILayout.Button("<size=18>Resume</size>",GUILayout.Width(100)))
		// {
		// 	Time.timeScale = playTime;
		// 	pauseGUIstate = false;
		// }
		// GUILayout.EndHorizontal();

		GUILayout.BeginHorizontal();
		if(GUILayout.Button("<size=18>Quit</size>",GUILayout.Width(100)))
		{
			Application.Quit();
		}
		GUILayout.EndHorizontal();
		
		GUILayout.EndArea();
	}
}

function Update()
{
	if (Input.GetKeyDown (KeyCode.Escape))
	{
		pauseGUIstate = true;
	}
}