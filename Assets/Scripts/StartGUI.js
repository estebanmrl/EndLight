#pragma strict

var player : GameObject;
var startGUIstate : boolean = true;

function OnGUI()
{
	if (startGUIstate == true)
	{
	GUILayout.BeginArea(Rect (300,100,400, Screen.width/2));

		GUILayout.BeginHorizontal();
			GUILayout.Label("<size=20><b>EndLight</b></size>");
		GUILayout.EndHorizontal();

		GUILayout.BeginHorizontal();
			if(GUILayout.Button("<size=18>Play</size>",GUILayout.Width(100)))
			{
				player.SetActive(true);
				startGUIstate = false;
			}
		GUILayout.EndHorizontal();

		GUILayout.BeginHorizontal();
			if(GUILayout.Button("<size=18>Quit</size>",GUILayout.Width(100)))
			{
				Application.Quit();
			}
		GUILayout.EndHorizontal();

		GUILayout.BeginHorizontal();
			GUILayout.Label("<size=15>Controls</size>");
		GUILayout.EndHorizontal();

		GUILayout.BeginHorizontal();
			GUILayout.Label("<size=11>Use A/D or <> to move</size>");
		GUILayout.EndHorizontal();

		GUILayout.BeginHorizontal();
			GUILayout.Label("<size=11>Space or X to jump</size>");
		GUILayout.EndHorizontal();

	GUILayout.EndArea();
	}
}