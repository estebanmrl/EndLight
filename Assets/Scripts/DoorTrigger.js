#pragma strict

var map : GameObject;
var rotationSpeed : float;
var angleStop : float; //The final angle for the map
var currentAngle : float;

var rand : int;
var angleCompare : float;

function OnTriggerEnter2D (hitCheck : Collider2D)
{
	rand = Random.Range(1,6);
	if (rand == 1)
	{
		angleStop = 90;
	}
	else if (rand == 2)
	{
		angleStop = 180;
	}
	else if (rand == 3)
	{
		angleStop = 270;
	}
	else if (rand == 4)
	{
		angleStop = 360;
	}
	else if (rand == 5)
	{
		angleStop = 900;
	}

}

function RotateMap()
{
	currentAngle = map.transform.eulerAngles.z;
	//Reset angle after 360
	if (map.transform.eulerAngles.z == 360)
	{
		currentAngle = 0;
		map.transform.eulerAngles.z = 0;
	}

	angleCompare = currentAngle - angleStop;
	if (angleCompare > 0.01)
	{}
	else
	{
		currentAngle = currentAngle + rotationSpeed;
		map.transform.eulerAngles.z = currentAngle;
		
		yield WaitForSeconds (0.001);
	}
}

function Update()
{
	RotateMap();
}