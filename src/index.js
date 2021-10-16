function computeFactorial(num) {

  if (num === 1) {
    console.log(`hitting the base case`);
    return 1;
} else {
  console.log(`returning ${num} * computeFactorial(you ${num -1})`);
  return num * computeFactorial(num -1);
  }
}
computeFactorial(5);

