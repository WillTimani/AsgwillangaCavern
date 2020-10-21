CPSC 335-05
Project #2 Asgwillanga Cavern 
Team WIL
William Timani

Intro:
This is a javascript program, with html incorporation for display, that visualizes the traversal through the Asgwillanga Caverns. Specifically, this program traverses through the blue causeway which starts at (16,0,0) and has an ID limit of (16,8,7) and a sum limit of 16. 

The Asgwillange Caverns follow certain rules that are considered in this program. This includes the ID limit rule, Sum rule, Single-same rule and Zero-max rule. 

The algorithm consists of a breadth first search of the the blue causeway. It first begins with room (16,0,0). This is pushed onto a visited room array as well as a kid queue array. The program then enters a loop which continues until there are no more elements in the kid queue array. Each iteration pops the first room in the kid queue array and inputs it as a parameter to the nextRoom() function. In this function, the rooms that are connected to the inputted room are searched for. All possible rooms are checked aganist each of the rules. When a generated room passes all the rules, it is checked againist the visited rooms array. If it has been visited, it is not pushed on the kid queue array, but instead a green back edge is drawn from the current room to the previsouly visited room. If it hasnt been visited, it will push it onto the kid queue array and draw it on the GUI. This is done until there are no more rooms left to check. Each time a new room is found and drawn, its residue is checked. If it has a smaller residue than the current closest room, it is set as the new closest room. The closest room is also filled in with pink to indicate that it has the smallest residue. At the end, the room with the smallest residue is also printed to console along with its residue.

Contents:
AsgwillangaCavern.html
Converters.js
room.js
draw-stuff.js
styles.css
README.txt
ComplexityTimeReport.pdf

External Requirements:
Google Chrome was used to test this program, however it should work in most modern web browsers.

Setup and Installation:
No installation required (unless you do not have a modern web browser). Simply open the AsgwillangaCavern.html file or drag it onto the web browser of choice.

Sample Invocation:
The program is started and the exploration begins. It will continue until there are no more new rooms to explore. 

Features:
- Room implementation with functions that support the exploration of the cavern (sum(),format(),residue())
- Char to Int and Int to Char converters to allow for ids to always be three characters and easily convertable between either form
- Find next room function that finds the next room based on the Asgwillanga Cavern rules
- Visited rooms are drawn on an html page as circles with their id written and lines are drawn between connected rooms
- Room with the smallest residue appears in pink instead of gray 

Bugs:
- Some rooms may not appear on the html because of potential overlapping of drawn rooms 

Third Party Material:
draw-stuff.js and styles.css were provided by Charles Siska

Sample Invocation:

![AsgwillangaPic1](https://github.com/WillTimani/Cella_Ant_12/blob/master/Images/AsgwillangaPic1.png)
![AsgwillangaPic2](https://github.com/WillTimani/Cella_Ant_12/blob/master/Images/AsgwillangaPic2.png)
![AsgwillangaPic3](https://github.com/WillTimani/Cella_Ant_12/blob/master/Images/AsgwillangaPic3.png)
