/* Addition function -- taking input arguments in an array*/
const addition = (numbers) => {
  const sum = numbers.reduce((total, num) => total + num);
  return sum;
}
console.log(addition([2,3]));

/* Subraction function -- taking input arguments in an array*/
const subtraction = (numbers) => {
  const difference = numbers.reduce((total, num) => total - num);
  return difference;
}
console.log(subtraction([5, 3, 1]));

/* Division function -- taking input arguments in an array*/