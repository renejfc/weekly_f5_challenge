'use strict'

export { mySum }

const mySum = () => {
  const positiveNumbers = [0, 1];
  const numbersArr = [-1, -5, 4, 5, 9, -13, 69, 30, 0, -28,];
  const additionArr = [];

  for (let i = 0; i < numbersArr.length; i++) {
    positiveNumbers.forEach( positiveNumber => {
      if (Math.sign(numbersArr[i]) == positiveNumber) {
        additionArr.push(numbersArr[i]);
      }
    });
  }
  
  const result = additionArr.reduce((all, sum) => { return all + sum;});
  console.log(result);
}