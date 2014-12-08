#pragma strict

var player : GameObject;

function OnTriggerEnter2D(hitCheck : Collider2D)
{
	if (hitCheck.name == "Ghost")
	{
		Application.LoadLevel (0);//Resets the scene, if static variables reasign them in Awake()
	}	
}