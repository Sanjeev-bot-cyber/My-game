  player;
  nonPlayer;
  maze1;







function preload(){
bgImage = loadImage("Bg.jpg");
}



function setup(){
    createCanvas(1400, 800);
     maze1= createSprite(50, 470,500,20);
    maze1.shapeColor="brown";
     maze2 = createSprite(300,525,20,130);
    maze2.shapeColor="brown";
     maze3 = createSprite(644,440,20,160);
    maze3.shapeColor="brown";
     maze4 = createSprite(734,480,200,20);
    maze4.shapeColor="brown";
      maze5 = createSprite(760,590,250,20);
    maze5.shapeColor="yellow";
      maze6 = createSprite(875,630,20,100);
    maze6.shapeColor="blue";
      maze7 = createSprite(915,680,100,20);
    maze7.shapeColor="red";
      maze8 = createSprite(1389,490,20,100);
    maze8.shapeColor="green";
      maze9 = createSprite(1300,780,20,100);
    maze9.shapeColor="black";
      maze10 = createSprite(950,800,20,70);
    maze10.shapeColor="purple";
      maze11 = createSprite(910,755,100,20);
    maze11.shapeColor="pink";
      maze12 = createSprite(634, 630,20,100);
    maze12.shapeColor="white";
      maze13 = createSprite(370,680,550,20);
    maze13.shapeColor="violet";
      maze14 = createSprite(100,720,20,100);
    maze14.shapeColor="magenta";
      maze15= createSprite(360,780,530,20);
    maze15.shapeColor="lightblue";
      maze16 = createSprite(675,560,20,50);
    maze16.shapeColor="indigo";
      maze17= createSprite(405, 590,230,20);
    maze17.shapeColor="brown";
      maze18= createSprite(795,510,20,50);
    maze18.shapeColor="brown";
      maze19= createSprite(570,750 ,20,50);
    maze19.shapeColor="brown";
      maze20= createSprite(685,720,20,70);
    maze20.shapeColor="brown";
      maze21 = createSprite(852,645,20,90);
    maze21.shapeColor="brown";
     maze22= createSprite(725,625,20,50);
     maze22.shapeColor = "brown";
}



function draw(){
background(bgImage);
drawSprites();
}