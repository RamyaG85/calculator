/* Addition function -- taking input arguments in an array*/
const addition = (numbers) => {
  const sum = numbers.reduce((total, num) => total + num);
  return sum;
}
// console.log(addition([2,3]));

/* Subraction function -- taking input arguments in an array*/
const subtraction = (numbers) => {
  const difference = numbers.reduce((total, num) => total - num);
  return difference;
}
// console.log(subtraction([5, 3, 1]));

/* Division function -- taking input arguments in an array*/

keyedInData = document.querySelector(".main__inputArea__keyedInText");
totalOperation = document.querySelector(".main__display__totalOperation");
console.log(totalOperation);

const handleNumber = ( num => {
  console.log("totalOperation.innerHTML is", totalOperation.innerHTML);
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
  else{
    keyedInData.innerHTML += num;    
  }
  console.log(keyedInData.innerHTML);
})

// console.log(handleNumber(123));

const handleOperation = (operation => {
  console.log("operation is called");
  totalOperation.innerHTML += keyedInData.innerHTML + operation;
  keyedInData.innerHTML ="";
  switch (operation) {
    case '&#x2b':
      totalOperation.innerHTML += keyedInData.innerHTML + operation;
      const result = addition(totalOperation.innerHTML.split()); 
      keyedInData.innerHTML = result;     
      break;
  
    default:
      break;
  }
  console.log(totalOperation.innerHTML);
})

const calculate = () => {
  totalOperation.innerHTML += keyedInData.innerHTML;
  const inputSplitted = totalOperation.innerHTML.split(''); 
  console.log(inputSplitted);  
      // keyedInData.innerHTML = result;
}

 