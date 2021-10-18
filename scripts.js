let nextPlayer = 'X'; // takes a value of either 'X' or 'O' according to the game turns

//initialize the game

// use the value stored in the nextPlayer variable to indicate who the next player is


//This call will create the buttons needed for the gameboard.
createGameBoard()

function createGameBoard()
{
    // Programatically add a button with square brackets enclosing an empty space to each cell in the gameboard
let btn = document.createElement("button");
btn.innerHTML="<button>[ ]</button>";

  /* let btn = new array(9);
   for(let i = 0; i < btn.length;i++)
   {
        btn[i] = document.createElement("button");
        btn[i].innerHTML = "<button> [ ] </button>";
   }*/
   document.getElementById('c5').appendChild(btn);
   /*document.getElementById('c2').appendChild(btn[1]);
   document.getElementById('c3').appendChild(btn[2]);
   document.getElementById('c4').appendChild(btn[3]);
   document.getElementById('c5').appendChild(btn[4]);
   document.getElementById('c6').appendChild(btn[5]);
   document.getElementById('c7').appendChild(btn[6]);
   document.getElementById('c8').appendChild(btn[7]);
   document.getElementById('c9').appendChild(btn[8]);*/
}

// Programatically add 'takeCell' as an event listener to all the buttons on the board
let btns = document.querySelectorAll('button');
for (let i=0; i<btns.length; i++)
{
    btns[i].addEventListener('click', (event) => { takeCell(event)});
}

// This function will be used to respond to a click event on any of the board buttons.
function takeCell(event)
{
    /*
        When the button is clicked, the space inside its square brackets is replaced by the value in the nextPlayer before switching it
    */
    let clickBtn = event.target();
    clickBtn
    // Make sure the button is clickable only once (I didn't mention how to do that, look it up :) )

    // Check if the game is over
    if (isGameOver())
    {
        // let the lable with the id 'game-over-lbl' display the words 'Game Over' inside <h1> element
    }

    // I'll leave declaring the winner for your intrinsic motivation, it's not required for this assignment 
}

function isGameOver()
{
    // This function returns true if all the buttons are disabled and false otherwise 
   
}
