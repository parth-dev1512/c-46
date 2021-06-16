var database;
var gameState=0;
var playerCount=0;
var player1, player2;
var allPlayers;
var players;

var form, game, player;
var ball_img;
var ball;

function setup() {
  createCanvas(displayWidth,displayHeight);
  
  database=firebase.database();
  
  game = new Game();
  game.getState();
  game.start();

}

function draw() {
  background(220,220,220);
  
  if(playerCount === 2)
  {
    game.update(1);
  }

  if(gameState === 1)
  {
    clear();
    game.play();
  }
  if(gameState === 2)
  {
    game.end();
  }

  drawSprites();
  
}