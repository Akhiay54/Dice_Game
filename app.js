/*
GAME RULES:
- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game
*/

var  score,activeplayer ,countrolls, currentscore,currentstate,winscore ;
//default win score is 100

  winscore=100;
 init();
 document.querySelector('.btn-roll').addEventListener('click', function() {
  if(currentstate){
//  get random number
     countrolls++;
 var dice = Math.floor( Math.random()*6)+1;
 // display result
document.querySelector('.dice').style.display = 'block' ;
document.querySelector('.dice').src = 'dice-'+dice+'.png';
// if dice is not equal to 1
 if(dice !==1){
   // add currentscore
    currentscore+=dice;
   document.querySelector('#current-'+activeplayer).textContent = currentscore  ;
 }else{
   // pass turn
     nextplayer_turn();
      }
    }
 });

  document.querySelector('.btn-hold').addEventListener('click', function() {
         if(currentstate){
    if(countrolls>0){
           score[activeplayer]+=currentscore;
            document.querySelector('#score-'+activeplayer).textContent =score[activeplayer];

                 // player won
        if(score[activeplayer]>=winscore){
           document.querySelector('#name-'+activeplayer).textContent='Winner !!';
           document.querySelector('.dice').style.display = 'none' ;
           document.querySelector('.player-'+activeplayer+'-panel').classList.add('winner');
           document.querySelector('.player-'+activeplayer+'-panel').classList.remove('active');
         currentstate=false;
          }else{
        nextplayer_turn();
            }
        }
      else{
        alert('Roll dice atleast Once !! ' );
         }
       }
     });
    document.querySelector('.btn-new').addEventListener('click',init);
// nextplayer_turn
  function nextplayer_turn(){
    document.querySelector('#current-'+activeplayer).textContent=0;
    currentscore=0;
     countrolls=0;
     document.querySelector('.player-'+activeplayer+'-panel').classList.remove('active');
    activeplayer= (activeplayer === 0)?1:0;
    document.querySelector('.player-'+activeplayer+'-panel').classList.add('active');
    document.querySelector('.dice').style.display='none';
  }

// restart the game
  function init(){
    countrolls=0;
    currentscore=0;
    activeplayer=0;
      dice = 0 ;
    score = [0,0];
   currentstate=true;
   document.querySelector('.dice').style.display = 'none' ;

  document.getElementById('score-0').textContent = '0';
  document.getElementById('score-1').textContent = '0';
  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';

  document.querySelector('.player-0-panel').classList.remove('winner');
  document.querySelector('.player-1-panel').classList.remove('winner');

   document.getElementById('name-0').textContent='Player 1';
   document.getElementById('name-1').textContent='Player 2';
  document.querySelector('.player-0-panel').classList.remove('active');
  document.querySelector('.player-1-panel').classList.remove('active');
  document.querySelector('.player-0-panel').classList.add('active');
  }
