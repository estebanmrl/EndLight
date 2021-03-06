#pragma strict

//Horizontal movement variables
var speed : float = 20;
private var horizontalAxis : float;

public var jumpForce : float;

//Variables for ground collision check
var groundLayer : LayerMask;
var isGrounded : boolean = false;
var playerX : float;
var playerY : float;
var circleRadius : float = 1; 

//Variable for FlipSprite
var scaleX : Vector3;

function MovePlayer()
{
	playerX = transform.position.x;
    playerY = transform.position.y;

	if(Input.GetButtonDown("Jump"))//Unity has "Jump","Horizontal" and "Vertical" KeyDown built in
	{
		isGrounded = Physics2D.OverlapCircle(Vector2(playerX, playerY), circleRadius, groundLayer); //OverlapCircle(centerOfTheCircle, radius, layermask) [CircleRaycast]
		if (isGrounded)
		{
			rigidbody2D.AddForce(Vector2(0f, jumpForce),ForceMode2D.Impulse);
		}
	}

	else if (Input.GetAxis("Horizontal"))
	{
		horizontalAxis = speed*Input.GetAxis("Horizontal"); //GetAxis returns 0.xxx or -0.xxx
		rigidbody2D.velocity.x = horizontalAxis;
		FlipSprite();
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