/* Addition function -- taking input arguments as 2 strings */
const addition = (num1, num2) => {
  num1 = num1.replace(/,/g,"");
  num2 = num2.replace(/,/g,"");
  console.log("numbers are ", num1, num2);
  number1 = isNaN(parseFloat(num1))?0:parseFloat(num1);
  number2 = isNaN(parseFloat(num2))?0:parseFloat(num2);
  console.log(number1, number2);
  const sum = number1 + number2;
  console.log("sum is", sum);
  return sum;
}

/* Subtraction function -- taking input arguments as 2 strings */
const subtraction = (num1, num2) => {
  num1 = num1.replace(/,/g,"");
  num2 = num2.replace(/,/g,"");
  console.log("numbers are ", num1, num2);
  number1 = isNaN(parseFloat(num1))?0:parseFloat(num1);
  number2 = isNaN(parseFloat(num2))?0:parseFloat(num2);
  const difference = number1 - number2;
  console.log("difference is", difference);
  return difference;
}

/* Multiplication function -- taking input arguments as 2 strings */
const multiply = (num1, num2) => {
  num1 = num1.replace(/,/g,"");
  num2 = num2.replace(/,/g,"");
  console.log("numbers are ", num1, num2);
  number1 = isNaN(parseFloat(num1))?0:parseFloat(num1);
  number2 = isNaN(parseFloat(num2))?0:parseFloat(num2);
  const product = number1 * number2;
  console.log("Product is", product);
  return product;
}

/* Division function -- taking input arguments as 2 strings */
const divide = (num1, num2) => {
  num1 = num1.replace(/,/g,"");
  num2 = num2.replace(/,/g,"");
  console.log("numbers are ", num1, num2);
  number1 = isNaN(parseFloat(num1))?0:parseFloat(num1);
  number2 = isNaN(parseFloat(num2))?0:parseFloat(num2);
  if(number2 === 0){
    return "Can't divide by zero";
  }
  const quotient = number1 / number2;
  console.log("Quotient is", quotient);
  return quotient;
}

/* To represent number using commas --- using en-IN encoding */
const numFormat = (num) => {  
  console.log("num is ", num);
  console.log("Number of num is ", Number(num));
  console.log("type is ", typeof(num));
  console.log("parseFloat of num is ", parseFloat(num));
  console.log("parseInt of num is ", parseInt(num));
  if (typeof(num) !== "number" && num.charAt(0) == "=") {
    num = num.replace("= ", "")
  } else if(typeof(num) == "string"){
    const formattedNum = parseFloat(num.replace(/,/g,"")).toLocaleString("en-IN",{
      maximumFractionDigits: 10
      // maximumSignificantDigits : 16
    });
    console.log("formattedNum is ", formattedNum);
    return formattedNum;
  } else {
    return num.toLocaleString("en-IN",{
      maximumFractionDigits: 10      
    });
  }  
}
// Initializing some variables
let prevValue = "";
let currentValue = "";
let prevOperation = "";
let currOperation = "";
let result = "";
let equalsFlag = false;

// storing some fields for DOM interactions
keyedInData = document.querySelector(".main__inputArea--keyedInText");
totalOperation = document.querySelector(".main__display--totalOperation");
equalsButton = document.querySelector('.equals');
clearButton = document.querySelector('.main__bg__buttons--clear');

// This gets trigerred when any number key gets pressed 
const handleNumber = ( num => {
  /* To reset the onclick for equals button */
  equalsButton.style.pointerEvents = "all";
  if (equalsFlag == true) { 
    clearMyData();
    equalsFlag = false;
  };  
  if(keyedInData.innerHTML == 0){
    // This is for initial keyin of any number
    keyedInData.innerHTML = num;
  } else if (keyedInData.innerHTML.length > 15 && totalOperation.innerHTML == "") {
    // Input numbers are restricted to a length of 15 digits.
    return keyedInData.innerHTML;
  } 
  else if (keyedInData.innerHTML.charAt(0) == "=") {
    // To take the second argument after operator and display in keyin
    keyedInData.innerHTML = num;
  } 
  else{
    // To append the digits to the existing keyin
    keyedInData.innerHTML += num;    
  }
  console.log("keyedInData.innerHTML is", keyedInData.innerHTML);
  if (num != ".") { /*To avoid changing the format representation of number after pressing the dot as there are no decimals yet */
  keyedInData.innerHTML = numFormat(keyedInData.innerHTML);
  }
})

// This gets trigerred when any operation key gets pressed like (+,-, x, /, %)
const handleOperation = (operation => {
  // console.log("operation is called", operation);
  equalsFlag = false; /* To disable the equals flag to avoid the clear to execute */
  currOperation = operation;
  equalsButton.style.pointerEvents = "all"; /* To reset the onclick for equals button */
  if(keyedInData.innerHTML.charAt(0) === "="){
    if((prevValue == keyedInData.innerHTML.replace("= ","")) && totalOperation.innerHTML !== ""){      
      totalOperation.innerHTML = prevValue;
    }
  }
  if(totalOperation.innerHTML !== "" && keyedInData.innerHTML.charAt(0) !== "="){
    calculate(); /* Invoking the calculate func after the keyin */
    totalOperation.innerHTML += operation; /* To reflect the entire equation in top bar */
    } else if(totalOperation.innerHTML == ""){
      if(currOperation == "%") {
        calculate();
        totalOperation.innerHTML += operation;
      } else{
      keyedInData.innerHTML ="= " + keyedInData.innerHTML;
      totalOperation.innerHTML += keyedInData.innerHTML.replace("= ","") + operation;
      }
    }else{
      totalOperation.innerHTML += operation;
    }
  prevValue = keyedInData.innerHTML.replace("= ",""); /* storing previous calculated value for doing the chain operations */
  prevOperation = currOperation;
  // console.log("prevValue is ", prevValue);
  // console.log("totalOperation.innerHTML is " , totalOperation.innerHTML);
  // totalOperation.style.fontSize = "2em";  
  keyedInData.style.fontSize = "1em";  
  totalOperation.style.fontSize = (totalOperation.innerHTML.length >15)?"1.5em":"2em";  
  // keyedInData.style.fontSize = (keyedInData.innerHTML.length >15)?"0.5em":"1em";
})

/* calculate func for (+, -, x, /, %) */
const calculate = () => {
  // console.log("Inside calculate func");  
  currentValue = keyedInData.innerHTML;
  // console.log("currentValue is ", currentValue);
  if(typeof(currentValue.charAt(currentValue.length-1)) != "number" && keyedInData.innerHTML.charAt(0) == "="){
    return ;
}
  totalOperation.innerHTML += keyedInData.innerHTML;  
  // console.log("totalOperation.innerHTML is ", totalOperation.innerHTML); 
  // console.log("currOperation is ", currOperation);
  // console.log("prevOperation is ", prevOperation);  
  if(currOperation == '%') {
    prevOperation = currOperation; /* As the percent operation will receive only one input, setting the operator correctly */
  }  
  switch (prevOperation) {    
    case '+': /* Addition operation */
      // console.log("addition");
      result = addition(prevValue, currentValue); 
      // console.log("before numFormat is ", result);
      result = numFormat(result); /* For repesenting the result with commas */
      // console.log("after numFormat is ", result); 
      keyedInData.innerHTML = "= " + result;
      prevValue = result;      
      // keyedInData.style.fontSize = "2em";
      totalOperation.style.fontSize = "1em";        
      // totalOperation.style.fontSize = (totalOperation.innerHTML.length >15)?"0.5em":"1em";
      break;
    case "-": /* Subtraction operation */
      // console.log("subtraction");      
      result = subtraction(prevValue, currentValue);
      result = numFormat(result); /* For repesenting the result with commas */  
      keyedInData.innerHTML = "= " + result;
      prevValue = result;      
      totalOperation.style.fontSize = "1em";
      // totalOperation.style.fontSize = (totalOperation.innerHTML.length >15)?"0.5em":"1em";
      break;
    case "\u00d7": /* Multiply operation */
      // console.log("multiplication");      
      result = multiply(prevValue, currentValue);
      result = numFormat(result); /* For repesenting the result with commas */      
      keyedInData.innerHTML = "= " + result;
      prevValue = result;      
      totalOperation.style.fontSize = "1em";
      // totalOperation.style.fontSize = (totalOperation.innerHTML.length >15)?"0.5em":"1em";
      break;
      case '\u00f7': /* Division operation */
        // console.log("division");      
        result = divide(prevValue, currentValue);
        result = numFormat(result);  /* For repesenting the result with commas */     
        keyedInData.innerHTML = "= " + result;
        prevValue = result;      
        totalOperation.style.fontSize = "1em";
        // totalOperation.style.fontSize = (totalOperation.innerHTML.length >15)?"0.5em":"1em";
        break;
      case '%': /* Percent operation */
        // console.log("Percentage");
        result = divide(currentValue, "100");
        result = numFormat(result);  /* For repesenting the result with commas */     
        keyedInData.innerHTML = "= " + result;
        prevValue = result;      
        totalOperation.style.fontSize = "1em";
        // totalOperation.style.fontSize = (totalOperation.innerHTML.length >15)?"0.5em":"1em";
        break;    
    default:
      keyedInData.innerHTML = "Not a valid sign"
      break;
  }      
}

// Function for doing negation
const opposite = () => {
  // console.log("negation"); 
  currentValue = keyedInData.innerHTML;  
  // console.log("currentValue is ", currentValue);     
  result = multiply(currentValue, "-1");
  result = numFormat(result); /* For repesenting the result with commas */      
  keyedInData.innerHTML = result;
}

// This gets trigerred when equals key gets pressed
const equalsClick = () => {
  // console.log("equals pressed");
  calculate(); /* To perform the required operation */
  equalsAction(); /* To adjust the styling after the operation is performed */
}

/* To adjust the styling after the operation is performed and also sets the 'equalsFlag' to true for doing the clear operation if the chain operation is not followed next */
const equalsAction = () => {
  equalsFlag = true;  
  // keyedInData.style.fontSize = "2em";
  // totalOperation.style.fontSize = "1em";
  // totalOperation.style.fontSize = (totalOperation.innerHTML.length >15)?"0.5em":"1em";  
  keyedInData.style.fontSize = (keyedInData.innerHTML.length >15)?"1em":"2em";
  // equalsButton.onclick = null;
  // equalsButton.disabled = true;
  // equalsButton.prop("disabled",true);
  equalsButton.style.pointerEvents = 'none';
}

/* This gets trigerred when Clear key gets pressed - It clears the display area and Keyin area and also all temporary variables */
const clearMyData = () => {
  console.log("Inside clear");
  totalOperation.innerHTML = "";
  keyedInData.innerHTML = "0";
  prevValue = "";
  currentValue = "";
  prevOperation = "";
  currOperation = "";
  result = "";
}