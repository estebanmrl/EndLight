#pragma strict

public static class DoorTrigger
{
	public var map : GameObject;
	public var rotationSpeed : float = 0.2;
	public var angleStop : float; //The final angle for the map
	public var currentAngle : float;

	public var rand : int;
	public var angleCompare : float;

	public function DefineAngleStop()
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

}