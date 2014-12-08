#pragma strict

var gameOverGUIstate = false;
var player : GameObject;

function OnTriggerEnter2D (hitCheck : Collider2D)
{
	if (hitCheck.name == "Ghost")
	{
		//Restart the app
		//Application.LoadLevel (0);
		// DoorTrigger.angleStop = 0;
		// DoorTrigger.currentAngle = 0;
		// DoorTrigger.rand = 0;
		// DoorTrigger.angleCompare = 0;
		player.SetActive(false);

		gameOverGUIstate = true;

	}
}

function OnGUI()
{
	if(gameOverGUIstate == true)
	{
	GUILayout.BeginArea(Rect (300,100,400, Screen.width/2));

		GUILayout.BeginHorizontal();
			GUILayout.Label("<size=20><b>You won</b></size>");
		GUILayout.EndHorizontal();

		GUILayout.BeginHorizontal();
			if(GUILayout.Button("<size=18>Play again</size>",GUILayout.Width(100)))
			{
				Application.LoadLevel (0);
				player.SetActive(true);
				gameOverGUIstate = false;
			}
		GUILayout.EndHorizontal();

		GUILayout.BeginHorizontal();
			if(GUILayout.Button("<size=18>Quit</size>",GUILayout.Width(100)))
			{
				Application.Quit();
			}
		GUILayout.EndHorizontal();

	GUILayout.EndArea();

	}
}
