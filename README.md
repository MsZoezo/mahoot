# mahoot
MAhoot monorepo with front and backend projects

Application flow:
1. main page with a start button, clicking creates an unique session and redirects to the players page
2. Players page has qr code to join and a link, theres also a list of players currently connected
   There's a start button which begins the game.
3. Beginning the game starts the game loop:
   
   3.1  starts a countdown for a question
   
   3.2 lets every player answer on their device for a limited amount of time.
   
   3.3 once that time is over percentages are shown for each answer and a next question or scoreboard button appears
   
   3.4 pressing the button either starts the loop again or shows the scores of every player.
