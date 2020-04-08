const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var stick1,stick2,stick3,stick4,stick5,stick6,stick7,stick8,stick10,stick11,stick12,stick13,stick14;
var stick15,stick16,stick17,stick18,stick19,stick20,stick21,stick22,stick23,stick24,stick25;
var backgroundImg;

function preload(){

  backgroundImg = loadImage("background.png");

  
}
function setup() {
  createCanvas(1200,500);
  engine = Engine.create();
   world = engine.world;
  stick1 = new Stick(400,220,30,200);
  stick2 = new Stick(500,120,30,300);
  stick3 = new Stick(620,120,30,300);
  stick4 = new Stick(720,220,30,200);
  stick5 = new Stick(500,200,150,20);
  stick6 = new Stick(620,220,130,20);
  stick7 = new Stick(400,220,130,20);
  stick8 = new Stick(750,80,30,340);
  stick9 = new Stick(850,80,30,340);
  stick10 = new Stick(370,80,30,340);
  stick11 = new Stick(270,80,30,340);
  stick12= new Stick(530,220,45,200);
  stick13 = new Stick(300,80,35,340);
  stick14 = new Stick(335,80,35,340);
  stick15 = new Stick(780,80,35,340);
  stick16 = new Stick(815,80,35,340);
  stick17 = new Stick(270,75,130,20);
  stick18 = new Stick(750,75,130,20);
  stick19 =new Stick(575,220,45,200);
  stick20 =new Stick(430,240,35,180);
  stick21 =new Stick(465,240,35,180);
  stick22 =new Stick(650,240,35,180);
  stick23 =new Stick(685,240,35,180);
  stick24 =new Stick(530,120,45,80);
  stick25 =new Stick(575,120,45,80);
}

function draw() {
  background(backgroundImg);  
  Engine.update=engine;
  stick1.display();
  stick2.display();
  stick3.display();
  stick4.display();
  stick5.display();
  stick6.display();
  stick7.display();
  stick8.display();
  stick9.display();
  stick10.display();
  stick11.display();
  stick12.display();
  stick13.display();
  stick14.display();
  stick15.display();
  stick16.display();
  stick17.display();
  stick18.display();
  stick19.display();
  stick20.display();
  stick21.display();
  stick22.display();
  stick23.display();
  stick24.display();
  stick25.display();
 
};