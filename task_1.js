function reverseNumber(num) {
    let reversedNum = 0;
    while (num > 0) {
      reversedNum = reversedNum * 10 + (num % 10);
      num = Math.floor(num / 10);
    }
    return reversedNum;
  }
  
  const x = 32243;
  const reversedX = reverseNumber(x);
  console.log("Reversed Number:", reversedX); // Output: 34223