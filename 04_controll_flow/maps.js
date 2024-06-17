//adding 10 to every elemts
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const result = nums.map((val) => val + 10)
// console.log(result);

//nesting map and filter

const resultNums = nums
                  .map( (num) => num * 10)
                  .map( (num) => num + 1)
                  .filter( (num)=> num>=40 )
console.log(resultNums);