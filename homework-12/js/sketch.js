var x = 50; var x1 = 150; var x2 = 200; var x3 = 300;
var y = 50; var y1 = 150; var y2 = 200; var y3 = 300;
var diameter = 20; var diameter1 = 25; var diameter2 = 35; 
var rectXsize = 30; var rectYsize = 30;
var mousex = 0;
var mousey = 0;

function setup()
{
    createCanvas(800,600);
}

function draw()
{
    background(0);
    buildBarriers();
    drawPlayer(x,y,diameter);
    [x,y] = playerController(x,y);
    drawEnemies(x1,x2,x3,y1,y2,y3,diameter1,diameter2,rectXsize,rectYsize);
    [x1,x2,x3,y1,y2,y3] = enemyController(x1,x2,x3,y1,y2,y3);
    placeBarrierOnClick(mousex,mousey);
    chkWinCondition();
}

// ---------------------------- Extra Functions ------------------------------- //
function mouseClicked()
{
    mousex = mouseX;
    mousey = mouseY;
}

function drawPlayer(x,y,diameter)
{
    fill("yellow");
    circle(x,y,diameter);
}

function playerController(x,y)
{
    // Player Movement
    if (keyIsDown(65)) { x -= 5; }
    if (keyIsDown(68)) { x += 5; }
    if (keyIsDown(87)) { y -= 5; }
    if (keyIsDown(83)) { y += 5; }

    return [x,y];
}

function drawEnemies(x1,x2,x3,y1,y2,y3,diameter1,diameter2,rectXsize,rectYsize)
{
    // Instantiates Enemy Circles
    fill("red");
    circle(x1,y1,diameter1);
    fill("orange")
    circle(x2,y2,diameter2);
    fill("pink");
    rect(x3,y3,rectXsize,rectYsize);
}

function enemyController(x1,x2,x3,y1,y2,y3)
{
    // Moves Enemies Over Time
    x1 += 10; y1 += 4;
    x2 -= 10; y2 += 5;
    x3 += 3; y3 += 10;

    // Keeps Enemy 1 In Canvas Bounds
    if (x1 > 800) { x1 = 0; }
    else if (x1 < 0) { x1 = 800; }
    if (y1 < 0) { y1 = 600; }
    else if (y1 > 600) { y1 = 0; }

    // Keeps Enemy 2 In Canvas Bounds
    if (x2 > 800) { x2 = 0; }
    else if (x2 < 0) { x2 = 800; }
    if (y2 < 0) { y2 = 600; }
    else if (y2 > 600) { y2 = 0; }

    // Enemy 3 Bounds
    if (x3 > 800) { x3 = 0; }
    else if (x3 < 0) { x3 = 800; }
    if (y3 < 0) { y3 = 600; }
    else if (y3 > 600) { y3 = 0; }

    return [x1,x2,x3,y1,y2,y3];
}

function buildBarriers()
{
    // Canvas Barriers
    fill("blue");
    rect(0,0,800,20);
    rect(0,580,800,20);
    rect(0,0,20,600);
    rect(780,0,20,410);
    rect(780,480,20,120);

    // Exit Text
    fill("red");
    textSize(24);
    text("Exit ->",720,450);
}

function chkWinCondition()
{
    // Win Condition Check
    if (x > 800 && (y > 410 && y < 480)) 
    {
        fill("white");
        textSize(48);
        text("You Win!!",320,100);
    }
}

function placeBarrierOnClick(mousex,mousey)
{
    // Barrier Placement With Mouse
    if (mousex != 0 && mousey != 0) 
    { 
        fill("green");
        rect(mousex,mousey,20,50); 
    }
}