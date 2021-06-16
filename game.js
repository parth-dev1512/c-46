class Game
{
    constructor()
    {

    }

    getState()
    {
        var gamestateRef = database.ref('gameState');
        gamestateRef.on("value",function(data){
            gameState = data.val()})

    }


    update(state){
        database.ref('/').update({
            gameState: state
        });
    }

    async start() 
    {
        if(gameState === 0)
        {
            player = new Player();
            var playerCountRef = await database.ref('playerCount').once("value");
           
            if(playerCountRef.exists())
            {
                playerCount = playerCountRef.val();
                player.getContl
            }

            form = new Form()
            form.display();
        }

        player1 = createSprite(200,500);
        //player1.addImage("player1",player_img);

        player2 = createSprite(800,500);
        
        players=[player1,player2];

    }

    play(){
        
        form.hide();

        Player.getPlayerInfo();
         //image(back_img, 0, 0, 1000, 800);
         var x =100;
         var y=200;
         var index =0;
         background(220)

         
         for(var plr in allPlayers){
            
            
             index = index+1;
             x = 500-allPlayers[plr].distance;
             y=500;
             
             players[index -1].x = x;
             players[index - 1].y = y;
               
             if(index === player.index){
                 
                 // to display player name on the basket.
                fill("black")
                textSize(25)
                text(allPlayers[plr].name, x-25, y+25);

                 
             }
            
             //text to display player score.
         
             fill("white")
             textSize(25)
             text("Score 1:"+allPlayers.player1.score, 50,50)
             text("Score 2:"+allPlayers.player1.score, 50,100)
            }
        
        
         

        if (keyIsDown(UP_ARROW) && player.index !== null) {
            player.distance -= 10
            player.update();
        }
        if (keyIsDown(DOWN_ARROW) && player.index !== null) {
            player.distance += 10
            player.update();
        }

         
          if (player.index !== null) {

            //fill code here, to destroy the objects. (Use the one in the class project 39)

            for(var i=0;i<fruitGroup.length;i++)
            {
                if(fruitGroup.get(i).isTouching(players))
                {
                    fruitGroup.get(i).destroy(); 
                }
                // add the condition to calculate the score. and use update ti update the values in the database.
            player.score=player.score+1;
            player.update();
            }

            
        }
        drawSprites();
    }
        
            end(){
            console.log("Game Ended");
            }
        }
    

 

 


