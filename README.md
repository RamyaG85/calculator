# simple calculator
-------------------

This is a small project after learning the HTML, CSS, SCSS, BEM, Java Script and DOM interactions.

About :
-------
This simple calculator can perform standard operations like addition, subtraction, multiplication, division, negation and percentage. It can accept both integers and decimals.
This calculator is designed for responsive model and is suitable to work on different device widths like mobile, tablet and desktop view.
This can't perform scientific operations like BODAMAS etc.

Usage Instructions :
------------------
To perform operations like addition, subtraction, multiplication, and division, provide atleast 2 inputs by clicking on the buttons.
Whereas, for percentage and negation, one input along will the operator is sufficient.
Input numbers are restricted to a length of 15 digits.
Clear button - Clears the display of previously calculated values and initializes the bar with zero.
Negation - Add negation to the current number.
'Division by Zero' is displayed when a number is divided by zero.

Operation & Display :
-------------------
The calculator will perform the respective operation and return the output.
The entire expression is displayed on the top most bar and the output will be displayed in the 2nd bar.

Number Representation : 
---------------------
It uses "en-IN" encoding to respesent the numbers using different periods (commas).

This project contains the following files :
-----------------------------------------
index.html - contains the information about calculator layout.
main.js - contains the Java Script for handling different operations.
styles folder - It has the scss and css files for styling of webpage. Styling is done by using SCSS & BEM convention.

Examples :
--------
Addition : 2,345 + 200 = 2,545
Subtraction : 5,200 - 250 = 4,950
Multiplication : 45.6 x 3 = 136.8
Division : 100 / 5 = 20
Percentage : 5% = 0.05
Negation : 8 => -8
