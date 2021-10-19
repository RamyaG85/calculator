/* Addition function -- taking input arguments in an array*/
// const addition = (numbers) => {
//   const sum = numbers.reduce((total, num) => total + num);
//   return sum;
// }
/* Addition function -- taking input arguments as 2 strings */
const addition = (num1, num2) => {
  console.log("numbers are ", num1, num2);
  number1 = isNaN(parseFloat(num1))?0:parseFloat(num1);
  number2 = isNaN(parseFloat(num2))?0:parseFloat(num2);
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
  console.log("numbers are ", num1, num2);
  number1 = isNaN(parseFloat(num1))?0:parseFloat(num1);
  number2 = isNaN(parseFloat(num2))?0:parseFloat(num2);
  const product = number1 * number2;
  console.log("Product is", product);
  return product;
}

/* Division function -- taking input arguments as 2 strings */
const divide = (num1, num2) => {
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

keyedInData = document.querySelector(".main__inputArea__keyedInText");
totalOperation = document.querySelector(".main__display__totalOperation");
equalsButton = document.querySelector('.equals');
clearButton = document.querySelector('.main__bg__buttons__clear');
console.log(clearButton);
const handleNumber = ( num => {
  equalsButton.style.pointerEvents = "all";
  
  if(keyedInData.innerHTML == 0){
    keyedInData.innerHTML = num;
  }
  // else if(totalOperation.innerHTML == "" ){    
  //   keyedInData.innerHTML += num;
  // }
  // else if(typeof(totalOperation.innerHTML.charAt(totalOperation.innerHTML.length-1)) != "number"){
  //   // console.log((totalOperation.innerHTML.charAt(totalOperation.innerHTML.length-1)) );
  //   keyedInData.innerHTML += num;
  // } 
  else if (keyedInData.innerHTML.charAt(0) == "=") {
    keyedInData.innerHTML = num;
  } 
  else{
    keyedInData.innerHTML += num;    
  }  
  console.log("keyedInData.innerHTML is", keyedInData.innerHTML);
})

let prevValue = "";
let currentValue = "";
let prevOperation = "";
let currOperation = "";
let result = "";

const handleOperation = (operation => {
  console.log("operation is called", operation);
  currOperation = operation;
  // equalsButton.on('click', equalsClick()); 
  // equalsButton.onclick = "equalsClick()";
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
      keyedInData.innerHTML ="= " + keyedInData.innerHTML;
      totalOperation.innerHTML += keyedInData.innerHTML.replace("= ","") + operation;
    }else{
      totalOperation.innerHTML += operation;
    }
  prevValue = keyedInData.innerHTML.replace("= ","");
  prevOperation = currOperation;
  console.log("prevValue is ", prevValue);
  console.log("totalOperation.innerHTML is " , totalOperation.innerHTML);
  totalOperation.style.fontSize = "2em";
  keyedInData.style.fontSize = "1em";
})

const calculate = () => {
  console.log("Inside calculate func");
  // if(keyedInData.innerHTML.charAt(0) === "="){
  //   console.log("inside outer if");
  //   if((prevValue == keyedInData.innerHTML.replace("= ","")) && totalOperation.innerHTML !== ""){
  //     console.log("inside inner if"); 
  
  currentValue = keyedInData.innerHTML;
  console.log("currentValue is ", currentValue);
  if(typeof(currentValue.charAt(currentValue.length-1)) != "number" && keyedInData.innerHTML.charAt(0) == "="){
      return ;
  }
  totalOperation.innerHTML += keyedInData.innerHTML;  
  console.log("totalOperation.innerHTML is ", totalOperation.innerHTML); 
  console.log("currOperation is ", currOperation);
  // const abc = String.fromCharCode(prevOperation);
  // if(prevOperation == "\u00f7") {prevOperation = "/"};
  // console.log("prevOperation is ", prevOperation);
  
  switch (prevOperation) {
    
    case '+':
      console.log("addition");
      // currOperation = operation;      
      // totalOperation.innerHTML += keyedInData.innerHTML + operation;
      // const result = addition(prevValue, currentValue.replace("= ",""));
      result = addition(prevValue, currentValue); 
      // if(keyedInData.innerHTML.charAt(0) === "="){
      //   console.log("inside outer if");
      //   if((prevValue == keyedInData.innerHTML.replace("= ","")) && totalOperation.innerHTML !== ""){
      //     console.log("inside inner if");
      //     // totalOperation.innerHTML = prevValue;
      //   } else{
      //     keyedInData.innerHTML = "= " + result;
      //   }
      // }
      // const result = addition(prevValue, currentValue); 
      keyedInData.innerHTML = "= " + result;
      prevValue = result;
      // totalOperation.innerHTML = result;
      // keyedInData.style.fontSize = "2em";
      totalOperation.style.fontSize = "1em";
      break;
      case "-":
        console.log("subtraction");      
        result = subtraction(prevValue, currentValue);       
        keyedInData.innerHTML = "= " + result;
        prevValue = result;      
        totalOperation.style.fontSize = "1em";
        break;
      case "*":
        console.log("multiplication");      
        result = multiply(prevValue, currentValue);       
        keyedInData.innerHTML = "= " + result;
        prevValue = result;      
        totalOperation.style.fontSize = "1em";
        break;
      case '\u00f7':
        console.log("division");      
        result = divide(prevValue, currentValue);       
        keyedInData.innerHTML = "= " + result;
        prevValue = result;      
        totalOperation.style.fontSize = "1em";
        break;
    case '=':
      totalOperation.innerHTML = prevValue;
    default:
      break;
  }
      // keyedInData.innerHTML = result;
}

const equalsClick = () => {
  console.log("equals pressed");
  calculate();
  equalsAction();
}

const equalsAction = () => {
  // totalOperation.innerHTML = prevValue;
  keyedInData.style.fontSize = "2em";
  totalOperation.style.fontSize = "1em";
  // equalsButton.onclick = null;
  // equalsButton.disabled = true;
  // equalsButton.prop("disabled",true);
  equalsButton.style.pointerEvents = 'none';
}

// const clear = () => {
//   console.log("Inside clear");
//   totalOperation.innerHTML = "";
//   keyedInData.innerHTML = "0";
//   prevValue = "";
//   currentValue = "";
//   prevOperation = "";
//   currOperation = "";
//   result = "";
// }

clearButton.addEventListener("click", (event) =>{
  console.log("Inside clear");
  totalOperation.innerHTML = "";
  keyedInData.innerHTML = "0";
  prevValue = "";
  currentValue = "";
  prevOperation = "";
  currOperation = "";
  result = "";
})