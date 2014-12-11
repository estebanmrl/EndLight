#pragma strict

var jumpType : String = "OverlapCircle"; //Default: OverlapCircle type of jump detection
										//Optional: RayCasting

//Horizontal movement variables
var speed : float = 20;
private var horizontalAxis : float;

public var jumpForce : float;

//Jump with RayCasting
var groundLayer : LayerMask;
var raycastGround : RaycastHit2D;
var raycastLenght : float = 0.5;

//Jump with OverlapCircle
//Coordinate of origin [(0,0) in reference to the player]
var playerX : float;
var playerY : float;
var circleRadius : float = 1;
var isGrounded : boolean = false;


//Variable for FlipSprite
var scaleX : Vector3;

function MovePlayer()
{	

	if(Input.GetButtonDown("Jump"))//Unity has "Jump","Horizontal" and "Vertical" KeyDown built in
	{
		if (jumpType == "OverlapCircle")
		{
			jmpWithOverlapCircle();
		}
		else if (jumpType == "RayCasting")
		{
			jmpWithRayCast();
		}

	}

	else if (Input.GetAxis("Horizontal"))
	{
		horizontalAxis = speed*Input.GetAxis("Horizontal"); //GetAxis returns 0.xxx or -0.xxx
		rigidbody2D.velocity.x = horizontalAxis;
		FlipSprite();
	}

}

function jmpWithOverlapCircle()
{
	//Jump with OverlapCircle
	playerX = transform.position.x;
 	playerY = transform.position.y;

	isGrounded = Physics2D.OverlapCircle(Vector2(playerX, playerY), circleRadius, groundLayer); //OverlapCircle(centerOfTheCircle, radius, layermask) [CircleRaycast]
	if (isGrounded)
	{
		rigidbody2D.AddForce(Vector2(0f, jumpForce),ForceMode2D.Impulse);
	}
}

function jmpWithRayCast()
{
	//Jump with Raycasting
	raycastGround = Physics2D.Raycast(transform.position, Vector3.down, raycastLenght, groundLayer);
	if (raycastGround)
	{
		rigidbody2D.AddForce(Vector2(0f, jumpForce),ForceMode2D.Impulse);
	}

}

function FlipSprite()
{
	scaleX = transform.localScale;
	if (Input.GetAxis("Horizontal") > 0)
	{
		scaleX.x = 0.5;
		transform.localScale = scaleX;
	}
	else if (Input.GetAxis("Horizontal") < 0)
		{
			scaleX.x = -0.5;
			transform.localScale = scaleX;
		}
}

function Update()
{
	MovePlayer();
}