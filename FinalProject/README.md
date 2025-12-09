1. Take a previous project you have made in the class (like your personal portfolio) and convert it to react.
   (OPTIONAL: you may use bolt.ai to make a fully features react application of your website; however, you will have to provide me the prompts you entered.
   If you chose to use bolt.ai, you will be graded on how well you conveyed technical specifications about javascript, css, and html in your prompts.)

2. Build a game! 

* Option 1: build a game from scratch by following along with this video -
https://www.youtube.com/watch?v=7JtLHJbm0kA
Links to an external site.
  - please add at least 1 feature of your own, such as a countdown timer or health bar. 

* Option 2: build the game starting from the code I provide found at https://github.com/ZakHussain/side-scroller-game.  Links to an external site.
  - make it your own! maybe make a boss fight, take damage etc. (you may use AI to help you with character abilities - just write about it in your readme).

IMPORTANT:
1. All projects will be presented in class, unless you are facing a circumstance which prevents it and you have spoken to me about it.
2. I will grade you projects based on your presentations and ask you questions about your code.

Presentations notes. 
1. Provide an overview of what you have built.
2. Show it in action in the browser, and show the features you built.
3. Show the code! start with showing the file tree structure and how you organized your code.
4. Then talk about the classes or components you have made -- being sure to show code you were most excited to build.

NOTES:
If I had more time, I would like to create and implement my own character and background assets to the game.

CoPilot help me to solve an issue of the "Score: " and "Lives: " text both shifting left upon pressing the "Restart" button. This happened because the "GAME OVER" text was being aligned in the center, and that wasn't resetting when the game restarted. Simply adding:

context.textAlign = 'left';

before displaying the "Score: " and "Lives: " texts fixed this issue.