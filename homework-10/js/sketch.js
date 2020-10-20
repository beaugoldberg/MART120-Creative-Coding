var leftarmmovementx = -3; leftarmmovementy = -3;
var rightarmmovementx = 2; rightarmmovementy = 2;
var leftarmx = 155; var leftarmy = 195;
var rightarmx = 295; var rightarmy = 195;
var headmovement;
var texty = 420; var textmovement = -4;
var titlex = 30; var titlemovement = 2;
var leftlegx = 210; leftlegmovement = 3;
var rightlegy = 335; rightlegmovement = 1;
var titlesizemultiplier = 2; titlesize = 20;

function setup()
{
    createCanvas(500, 480);
}

function draw()
{
    background('#EB50B7');
    strokeWeight(5);

    // hat
    fill(0);
    circle(250,90,100);
    line(290,90,150,90);
    strokeWeight(10);
    stroke('white');
    point(250,37);
    stroke('black');
    strokeWeight(5);

    // head
    fill('orange');
    ellipse(250,140,200,100);
   
    // eyes
    fill('white');
    ellipse(210,115,30,20);
    ellipse(295,115,30,20);
    fill(0);
    circle(200,115,10);
    circle(285,115,10);
    
    // mouth
    ellipse(245, 145, 30, 45)

    // body
    fill('#3654EB');
    rect(205,185,90,150);
    fill('white');
    triangle(240,190,260,190,250,210);
    triangle(240,230,260,230,250,210);
    triangle(240,230,260,230,250,270);
    
    // right arm
    fill('orange');
    rect(rightarmx,rightarmy,30,10);
    if (rightarmx > 300 || rightarmx < 290)
    {
        rightarmmovementx *= -1;
    }
    if (rightarmy < 190 || rightarmy > 200)
    {
        rightarmmovementy *= -1;
    }
    rightarmx += rightarmmovementx;
    rightarmy += rightarmmovementy;

    // left arm
    rect(leftarmx,leftarmy,50,10);
    if (leftarmx > 160 || leftarmx < 150)
    {
        leftarmmovementx *= -1;
    }
    if (leftarmy < 190 || leftarmy > 200)
    {
        leftarmmovementy *= -1;
    }
    leftarmx += leftarmmovementx;
    leftarmy += leftarmmovementy;

    // left leg
    rect(leftlegx,335,10,50);
    if (leftlegx < 150 || leftlegx > 160)
    {
        leftlegmovement *= -1;
    }
    leftlegx += leftlegmovement;

    // right leg
    rect(285,rightlegy,10,40);
    if (rightlegy < 325 || rightlegy > 345)
    {
        rightlegmovement *= -1;
    }
    rightlegy += rightlegmovement;
    
    //text
    fill(120);
    textSize(20);
    text("BEAU GOLDBERG",310,texty);
    if (texty < 230 || texty > 470)
    {
        textmovement *= -1;
    }
    texty += textmovement;
    if (titlesize < 20 || titlesize > 100)
    {
        titlesizemultiplier *= -1;
    }
    titlesize += titlesizemultiplier;
    textSize(titlesize);
    text("ME WHEN I SEE SOMETHING SCARY",titlex,30);
    if (titlex < 30 || titlex > 110)
    {
        titlemovement *= -1;
    }
    titlex += titlemovement;

}