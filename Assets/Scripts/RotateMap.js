#pragma strict
function OnTriggerEnter2D (hitCheck : Collider2D)
{
	DoorTrigger.DefineAngleStop(); //executes function
}

function RotateMap()
{
	DoorTrigger.currentAngle = DoorTrigger.map.transform.eulerAngles.z;
	//Reset angle after 360
	if (DoorTrigger.map.transform.eulerAngles.z == 360)
	{
		DoorTrigger.currentAngle = 0;
		DoorTrigger.map.transform.eulerAngles.z = 0;
	}

	DoorTrigger.angleCompare = DoorTrigger.currentAngle - DoorTrigger.angleStop;
	if (DoorTrigger.angleCompare < 0)
	{
		DoorTrigger.angleCompare *= -1;
	}
	if (DoorTrigger.angleCompare > 1)
	{
		DoorTrigger.currentAngle = DoorTrigger.currentAngle + DoorTrigger.rotationSpeed;
		DoorTrigger.map.transform.eulerAngles.z = DoorTrigger.currentAngle;
		
		yield WaitForSeconds (0.001);
	}
}

function Update()
{
	if ((GameObject.Find ("Map")) != null)
		{
			DoorTrigger.map = GameObject.Find ("Map");
		}
	RotateMap();
}