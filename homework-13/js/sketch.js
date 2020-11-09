var x = 50; var y = 50; var diameter = 25;
var mousex = 0; var mousey = 0;
var Xs = []; var Ys = [];
var Diameters = []

function setup()
{
    createCanvas(800,600);

    // Create 5 random circles
    for (var i = 0; i < 5; i++)
    {
        Xs[i] = getRandomNumber(800);
        Ys[i] = getRandomNumber(600);
        Diameters[i] = getRandomNumber(40);
    }
}

function draw()
{
    background(0);
    buildBarriers();
    drawPlayer(x,y,diameter);
    [x,y] = playerController(x,y);

    for (var i = 0; i < 5; i++)
    {
        drawEnemy(i,Xs[i],Ys[i],Diameters[i]);
        [Xs[i], Ys[i]] = enemyController(i,Xs[i],Ys[i]);
    }

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

function drawEnemy(index,x,y,diameter)
{
    if (index == 0) { fill("red"); }
    if (index == 1) { fill("blue"); }
    if (index == 2) { fill("orange"); }
    if (index == 3) { fill("pink"); }
    if (index == 4) { fill("purple"); }

    // Instantiate Enemy Circles
    circle(x,y,diameter);
}

function enemyController(index,x,y)
{
    // Moves Enemy Over Time
    if (index < 1) { x += 10; y += 4; }
    else if (index < 3 && index >= 1) { x -= 10; y += 5; }
    else if (index <= 4 && index >= 3) { x += 3; y += 10; }

    // Keeps Enemy In Canvas Bounds
    if (x > 800) { x = 0; }
    else if (x < 0) { x = 800; }
    if (y < 0) { y = 600; }
    else if (y > 600) { y = 0; }

    return [x,y];
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

function getRandomNumber(number)
{
    return Math.floor(Math.random()*number)+10;
}