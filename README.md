# Simple Calculator
-------------------
This is a small project after learning the HTML, CSS, SCSS, BEM, Java Script and DOM interactions.

About :
-------
This simple calculator can perform standard operations like addition, subtraction, multiplication, division, negation and percentage. It can accept both integers and decimals.
This calculator is designed for responsive model and is suitable to work on different device widths like mobile, tablet and desktop view.
This can't perform scientific operations like BODMAS etc.

Usage Instructions :
------------------
- To perform operations like addition, subtraction, multiplication, and division, provide atleast 2 inputs by clicking on the buttons.  
Whereas, for percentage and negation, one input along will the operator is sufficient.  
- Input numbers are **restricted** to a length of 15 digits.  
- Clear button - Clears the display of previously calculated values and initializes the bar with zero.  
- Negation - Add negation to the current number.  
- 'Can't divide by zero' is displayed when a number is divided by zero.
- All the operation buttons are **disabled** after the 'divide by zero' operation until a clear/number key is pressed.
- **Backspace Operation** - Press on the input number in the keyin area and the left most digit will be deleted.
- After pressing an equals button, it is **disabled** till a number/operation key is pressed.  
- Negation of 0 will always be zero.

Operation & Display :
-------------------
- The calculator will perform the respective operation and return the result.  
- The entire **expression** is displayed on the top most bar and the result will be displayed in the 2nd bar.
- The display symbolizes an iphone Calculator.

Number Representation : 
---------------------
It uses "en-IN" encoding to respesent the numbers using different periods (commas).

This project contains the following files :
-----------------------------------------
- index.html - contains the information about calculator layout.  
- main.js - contains the Java Script for handling different operations.  
- styles folder - It has the scss and css files for styling of webpage. Styling is done by using SCSS & BEM convention.

Examples :
--------
- Addition : 2,345 + 200 = 2,545  
- Subtraction : 5,200 - 250 = 4,950  
- Multiplication : 45.6 x 3 = 136.8  
- Division : 100 / 5 = 20  
- Percentage : 5% = 0.05  
- Negation : 8 => -8

A Quick Look :
----------
![Calculator_snapshot](https://user-images.githubusercontent.com/91462437/138028151-d2fe9183-5e47-4683-8bf1-6a944c3cb1b1.PNG)
