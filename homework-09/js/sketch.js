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
    rect(295,195,30,10);

    // left arm
    rect(155,195,50,10);

    // left leg
    rect(210,335,10,50);

    // right leg
    rect(285,335,10,40);
    
    //text
    fill(120);
    textSize(20);
    text("BEAU GOLDBERG",230,420);
    text("ME WHEN I SEE SOMETHING SCARY",30,30);

}