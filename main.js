/* Addition function -- taking input arguments in an array*/
// const addition = (numbers) => {
//   const sum = numbers.reduce((total, num) => total + num);
//   return sum;
// }

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
// console.log(addition([2,3]));

/* Subraction function -- taking input arguments in an array*/
// const subtraction = (numbers) => {
//   const difference = numbers.reduce((total, num) => total - num);
//   return difference;
// }
/* Subraction function -- taking input arguments as 2 strings */
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
// console.log(subtraction([5, 3, 1]));

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

/* Modulus function -- taking input arguments as 2 strings */
const mod = (num1, num2) => {
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
/* To represent number using commas */
const numFormat = (num) => {
  // console.log("num is ", num);
  // console.log("num is ", Number(num));
  // console.log("type is ", typeof(num));  
  if (typeof(num) !== "number" && num.charAt(0) == "=") {
    num = num.replace("= ", "")
  } /* else if(typeof(num) == "string" && !(num.includes(","))){ */
    else if(typeof(num) == "string"){
    const formattedNum = Number(num.replace(/,/g,"")).toLocaleString("en-IN",{
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

let prevValue = "";
let currentValue = "";
let prevOperation = "";
let currOperation = "";
let result = "";
let equalsFlag = false;

keyedInData = document.querySelector(".main__inputArea--keyedInText");
totalOperation = document.querySelector(".main__display--totalOperation");
equalsButton = document.querySelector('.equals');
clearButton = document.querySelector('.main__bg__buttons--clear');
console.log(clearButton);

const handleNumber = ( num => {
  /* To reset the onclick for equals button */
  equalsButton.style.pointerEvents = "all";
  if (equalsFlag == true) { 
    clearMyData();
    equalsFlag = false;
  };  
  if(keyedInData.innerHTML == 0){
    keyedInData.innerHTML = num;
  } else if (keyedInData.innerHTML.length > 15 && totalOperation.innerHTML == "") {
    return keyedInData.innerHTML;
  } 
  else if (keyedInData.innerHTML.charAt(0) == "=") {
    keyedInData.innerHTML = num;
  } 
  else{
    keyedInData.innerHTML += num;    
  }
  keyedInData.innerHTML = numFormat(keyedInData.innerHTML);
  console.log("keyedInData.innerHTML is", keyedInData.innerHTML);
})


const handleOperation = (operation => {
  console.log("operation is called", operation);
  currOperation = operation;
  equalsButton.style.pointerEvents = "all";
  if(keyedInData.innerHTML.charAt(0) === "="){
    console.log("inside outer if");
    if((prevValue == keyedInData.innerHTML.replace("= ","")) && totalOperation.innerHTML !== ""){
      console.log("inside inner if");
      totalOperation.innerHTML = prevValue;
    }
  }
  if(totalOperation.innerHTML !== "" && keyedInData.innerHTML.charAt(0) !== "="){
    calculate();
    totalOperation.innerHTML += operation;
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
  prevValue = keyedInData.innerHTML.replace("= ","");
  prevOperation = currOperation;
  console.log("prevValue is ", prevValue);
  console.log("totalOperation.innerHTML is " , totalOperation.innerHTML);
  // totalOperation.style.fontSize = "2em";  
  keyedInData.style.fontSize = "1em";
  
  totalOperation.style.fontSize = (totalOperation.innerHTML.length >15)?"1.5em":"2em";  
  // keyedInData.style.fontSize = (keyedInData.innerHTML.length >15)?"0.5em":"1em";
})

const calculate = () => {
  console.log("Inside calculate func");
  currentValue = keyedInData.innerHTML;
  console.log("currentValue is ", currentValue);
  if(typeof(currentValue.charAt(currentValue.length-1)) != "number" && keyedInData.innerHTML.charAt(0) == "="){
    return ;
}
  totalOperation.innerHTML += keyedInData.innerHTML;  
  console.log("totalOperation.innerHTML is ", totalOperation.innerHTML); 
  console.log("currOperation is ", currOperation);
  console.log("prevOperation is ", prevOperation);  
  if(currOperation == '%') {
    prevOperation = currOperation;
  }  
  switch (prevOperation) {    
    case '+':
      console.log("addition");
      result = addition(prevValue, currentValue); 
      console.log("before numFormat is ", result);
      result = numFormat(result);
      console.log("after numFormat is ", result); 
      keyedInData.innerHTML = "= " + result;
      prevValue = result;      
      // keyedInData.style.fontSize = "2em";
      totalOperation.style.fontSize = "1em";        
      // totalOperation.style.fontSize = (totalOperation.innerHTML.length >15)?"0.5em":"1em";
      break;
      case "-":
        console.log("subtraction");      
        result = subtraction(prevValue, currentValue);
        result = numFormat(result);       
        keyedInData.innerHTML = "= " + result;
        prevValue = result;      
        totalOperation.style.fontSize = "1em";
        // totalOperation.style.fontSize = (totalOperation.innerHTML.length >15)?"0.5em":"1em";
        break;
      case "\u00d7":
        console.log("multiplication");      
        result = multiply(prevValue, currentValue);
        result = numFormat(result);       
        keyedInData.innerHTML = "= " + result;
        prevValue = result;      
        totalOperation.style.fontSize = "1em";
        // totalOperation.style.fontSize = (totalOperation.innerHTML.length >15)?"0.5em":"1em";
        break;
      case '\u00f7':
        console.log("division");      
        result = divide(prevValue, currentValue);
        result = numFormat(result);       
        keyedInData.innerHTML = "= " + result;
        prevValue = result;      
        totalOperation.style.fontSize = "1em";
        // totalOperation.style.fontSize = (totalOperation.innerHTML.length >15)?"0.5em":"1em";
        break;
      case '%':
        console.log("Percentage");
        result = divide(currentValue, "100");
        result = numFormat(result);       
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

const opposite = () => {
  console.log("negation"); 
  currentValue = keyedInData.innerHTML;  
  // console.log("currentValue is ", currentValue);     
  result = multiply(currentValue, "-1");
  result = numFormat(result);       
  keyedInData.innerHTML = result;
}

const equalsClick = () => {
  console.log("equals pressed");
  calculate();
  equalsAction();
}

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

// clearButton.addEventListener("click", (event) =>{
//   console.log("Inside clear");
//   totalOperation.innerHTML = "";
//   keyedInData.innerHTML = "0";
//   prevValue = "";
//   currentValue = "";
//   prevOperation = "";
//   currOperation = "";
//   result = "";
// })