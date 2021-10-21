let nextPlayer = 'X'; // takes a value of either 'X' or 'O' according to the game turns

//initialize the game
document.getElementById("next-lbl").innerHTML = nextPlayer;
// use the value stored in the nextPlayer variable to indicate who the next player is


//This call will create the buttons needed for the gameboard.
createGameBoard()

function createGameBoard()
{
    // Programatically add a button with square brackets enclosing an empty space to each cell in the gameboardlet cells of document.getElementsByTagName("td"))
let cells = document.querySelectorAll('td');
for(let i = 0;i < cells.length; i++)
{
    cells[i].innerHTML = '<button>S</button>'
}
  
   
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
    clickBtn.innerHTML = nextPlayer;
    if(nextPlayer === 'X')
    {
        nextPlayer = 'O';
    }
    else if(nextPlayer === 'O')
    {
        nextPlayer = 'X';
    }
    document.getElementById("next-lbl").innerHTML = nextPlayer;
    // Make sure the button is clickable only once (I didn't mention how to do that, look it up :) )
    clickBtn.disabled = true;
    // Check if the game is over
    if (isGameOver() === true)
    {
        let done = document.createElement("h1");
        done.innerHTML = "Game Over";
        document.getElementById("game-over-lbl").appendChild(done);
        // let the lable with the id 'game-over-lbl' display the words 'Game Over' inside <h1> element
    }

    // I'll leave declaring the winner for your intrinsic motivation, it's not required for this assignment 
}

function isGameOver()
{
    // This function returns true if all the buttons are disabled and false otherwise 
   let gameBtn = document.querySelectorAll("buttons");
   let counter = 0;
   for(let i = 0; i < gameBtn.length; i++)
   {
        if(gameBtn[i] === true)
        {
            counter++;
        }
   }
   if(counter === gameBtn.length)
   {
       return true;
   }else{return false}
}
