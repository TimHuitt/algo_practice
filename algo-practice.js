/// Find 2 numbers in array that equal target ///

// // first solution
// const twoNumberSum = (array, targetSum) => {
//   // loop array and compare each value to remaining values
//   while (array) {
//     num = array.pop()
//     for (let i = 0; i < array.length; i++) {
//       // return if current array and any remaining value equals target
//       if (array[i] + num === targetSum) {
//         return [array[i], num]
//       }
//     }
//   }
//   // return empty array if no match found
//   return []
// }

// improved solution
const twoNumberSum = (array, targetSum) => {
  const nums = new Set()

  for (let num of array) {
    match = targetSum - num
    if (nums.has(match)) {
      return [num, match]
    }
    nums.add(num)
  }
  return []
}

array = [13, 5, -4, 8, 11, 1, -1, 6]
targetSum = 10

// console.log(twoNumberSum(array, targetSum))

//_________________________________ //
//_________________________________ //

/// Determine if the second array is a subsequence of the first ///

// // first solution
// function isValidSubsequence(array, sequence) {
//   let arr = [...array]
//   let seq = [...sequence]
// 
//   // loop sequence and compare each item to each array item
//   while (seq) {
// 
//     // if items are equal
//     // or seq item appears in array before next seq item
//     if (arr[0] === seq[0]) {
// 
//       // continue
//       seq.shift()
//       arr.shift()
// 
//       // return true if all sequential matches found
//       if (seq.length === 0) { return true }
//     } else {
//       arr.shift()
//     }
//     
//     // return false if not found
//     if (arr.length === 0) { return false}
//   }
// }

// improved solution
function isValidSubsequence(array, sequence) {
  let seqIndex = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] === sequence[seqIndex]) {
      seqIndex++
    }
    if (sequence.length === seqIndex) { return true }
  }
  return false
}

array = [5, 1, 22, 25, 6, -1, 8, 10]
sequence = [1, 6, -1, 10]

// console.log(isValidSubsequence(array, sequence))

//_________________________________ //
//_________________________________ //

/// Replace the values of an ascending array with their square ///
/// sorted ascending ///

// // first solution
// function sortedSquaredArray(array) {
//   return array.map((num) => num * num)
//     .sort(function(a, b){return a-b})
// }

// improved solution
function sortedSquaredArray(array) {
  const squared = []
  let left = 0
  let right = array.length - 1

  for (let i = array.length; i > 0; i--) {
    if (Math.abs(array[left]) > Math.abs(array[right])) {
      squared.unshift(array[left] * array[left])
      left++
    } else {
      squared.unshift(array[right] * array[right])
      right--
    }
  }
  return squared
}


array = [1, 2, 3, 5, 6, 8, 9]
// array = [-10, -5, 0, 5, 10]

// console.log(sortedSquaredArray(array))

//_________________________________ //
//_________________________________ //

/// Find the winner if [homeTeam = 1, awayTeam = 0] and each win awards 3 points///

function tournamentWinner(competitions, results) {
  const score = {}
  // loop results
  for (let i = 0; i < results.length; i++) {
    const home = competitions[i][0]
    const away = competitions[i][1]

    // track winner score (+3)
    if (results[i]) {
      score.hasOwnProperty(home) 
        ? score[home] += 3
        : score[home] = 3
    } else {
      score.hasOwnProperty(away) 
        ? score[away] += 3
        : score[away] = 3
    }
  }

  // return team with highest score
  return Object.keys(score).reduce((a, b) => score[a] > score[b] ? a : b)
}

competitions = [
  ["HTML", "C#"],
  ["C#", "Python"], 
  ["Python", "HTML"],
]

results = [0, 0, 1]

// console.log(tournamentWinner(competitions, results))

//_________________________________ //
//_________________________________ //

/// Find the minimum amount of change that can be created by combining the coins provided ///

function nonConstructibleChange(coins) {
  let minChange = 0
  coins.sort((a, b) => a-b)

  // loop coins in ascending order
  for (let i = 0; i < coins.length; i++) {

    // if coin is greater than max + 1
    if (coins[i] > minChange + 1) {
      
      // return min + 1
      return minChange + 1

    // if coin is less than max
    } else {

      // add to min + 1
      minChange += coins[i]
    }
  }
  
  // return min
  return minChange + 1
}

coins = [5, 7, 1, 1, 2, 3, 22]
// console.log(nonConstructibleChange(coins))

//_________________________________ //
//_________________________________ //

/// reverse the string ///

const reverse = (str) => {
  newString = ''
  for (let i = str.length - 1; i > -1; i--) {
    newString += str[i]
  }
  return newString
}

// console.log(reverse('hello'))

//_________________________________ //
//_________________________________ //

/// transpose matrix ///

function transposeMatrix(matrix) {
  let result = []
    // if first value is array
    if (Array.isArray(matrix[0])) {
      // loop sub array
      for (let i = 0; i < matrix[0].length; i++) {
        // loop base array
        for (let j = 0; j < matrix.length; j++) {
          // save or push each value
          result[i] ? result[i].push(matrix[j][i]) : result[i] = [matrix[j][i]]
        }
      }
    // else if first value is not array
    } else {
      // loop array
      for (let i = 0; i < matrix.length; i++) {
        //save each value
        result[i] = [matrix[i]]
      }
    }
  // return transposed array
  return result
}

// console.log(transposeMatrix([1, 2]))
// 
// console.log(transposeMatrix(
//   [
//     [1, 2], 
//     [3, 4], 
//     [5, 6]
//   ]
// ))


const generateHashFromString = (str) => 
  str.split('')
    .reduce((acc, char) => acc + char
    .charCodeAt(0)
  ,0) % 1000;

// console.log(generateHashFromString('example'))
// console.log(generateHashFromString('anotherExample'))

function sumArray(numbers) {
  return numbers.reduce((acc, cur) => acc + cur, 0);
}


// console.log(sumArray([1,2,3,4]))
// console.log(sumArray([]))
// console.log(sumArray([5,-2,7]))
// console.log(sumArray([-1,-1,-1,-1]))


const solution1 = (numbers) => {
  let largest = 0
  if (numbers.length > 0) {
      for (let number = 0; number < numbers.length; number++) {
        console.log(largest <= numbers[number])
          largest = largest <= numbers[number] ? numbers[number] : largest
      }
  } else {
      return 0
  }
  return largest
};


// console.log(solution([7,2,6,3]))


const solution = (arr) => {
  if (arr.length <= 1) return ''
  let left = 0
  let right = 0

  cleaned = arr.filter((i) => i > 0)
  
  for (let i = 0; i < cleaned.length; i++) {
    if (i > 0 && i % 2 && cleaned[i] !== -1) {
        left += cleaned[i]
    } else if (i > 0 && i % 2 === 0 && cleaned[i] !== -1) {
        right += cleaned[i]
      }
  }
  if (left > right) return "Left"
  if (right > left) return "Right"
  return ""
};

// console.log(solution([3,6,2,9,-1,10]))
// console.log(solution([3,3,10,4,12]))
// console.log(solution([1, 10, 5, 1, 0, 6]))





// ______________________________
// ______________________________
// Frontend Practice
// ______________________________
// ______________________________

// take value (array/obj) and return flattened version

// function flatten(value) {
//   let flat
//   let obj = {}
//   let count = 0
//   let current = ''
//   
//   const setFlat = (value) => {
//     
//     if (Array.isArray(value)) {
//       if (count === 0) { flat = [] }
//       value.forEach((v) => {
//         if (typeof v === 'object' || Array.isArray(v)) {
//           setFlat(v)
//         } else {
//           if (flat[count] == 'undefined') {
//             flat[count].append(v)
//           } else {
//             flat[count] = v
//           }
//         }
//         count++
//       })
//     } else if (typeof value === 'object') {
//       if (count === 0) { flat = {} }
//       Object.entries(value).map((k, i) => {
//         if (Array.isArray(k[1])) {
//           current = k[0]
//           obj[k[0]] = setFlat(k[1])
//         } else if (typeof k[1] === 'object') {
//           setFlat(k[1])
//         } else {
//           if (Array.isArray(flat)) {
//             if (Object.keys(obj).length > 0) {
//               if (Array.isArray(obj[current])) {
//                 obj[k[0]] = setFlat(k[1])
//               } else {
//                 obj[k[0]] = k[1]
//               }
//             } else {
//               obj[k[0]] = k[1]
//             }
//           } else {
//             flat[k[0]] = k[1]
//           }
//         }
//         count++
//       })
//       flat.push(obj)
//       obj = {}
//     } else {
//       if (Array.isArray(flat) && Object.keys(obj).length === 0) {
//         flat.append(value)
//       } else if (Array.isArray(flat)) {
//         ''
//       } else {
// 
//       }
//     }
//   }
// 
//   setFlat(value)
//   return(flat)
// }


// function flatten(value) {
//   // create global running variables
//   let flat = Array.isArray(value) ? [] : {}
//   let currentElement = undefined
//   // create flatten helper for recursive actions
//   setFlat = (value) => {
//     // handle adding values to elements
//     const addToElement = (value) => {
//       if (currentElement) {
//         if (Array.isArray(currentElement)) {
//           currentElement.push(value)
//         } else {
//           currentElement[Object.keys(value)[0]] = Object.values(value)[0]
//         }
//       } else {
//         if (Array.isArray(flat)) {
//           flat.push(value)
//         } else if (typeof value !== 'string' && typeof Object.values(value)[0] !== 'object') {
//           flat[Object.keys(value)[0]] = Object.values(value)[0]
//         }
//       }
//     }
// 
//     const arrToObj = (value) => {
//       if (typeof value[1] === 'object') return false
//       const key = value[0]
//       const obj = {}
//       obj[key] = value[1]
//       return obj
//     }
// 
//     // handle array elements
//     const flatArr = (value) => {
//       // iterate current element
//       value.forEach(element => {
//         // if current element is array/obj
//         if (typeof element === 'object'){
//           // recursively pass to helper
//             setFlat(element)
//         // if current element is val
//         } else {
//           addToElement(element)
//           // add to current element
//         }
//       });
//     }
// 
//     // handle obj elements
//     const flatObj = (value) => {
//       // iterate current element
//       Object.entries(value).map((element) => {
//         // recursively pass to helper
//         if (Array.isArray(element)) {
//           arrToObj(element) ? addToElement(arrToObj(element)) : setFlat(element)
//         // if current element is val
//         } else if (Object.values(value)[0]) {
//           // add to current element
//           addToElement(arrToObj(element))
//         }
//       })
//     }
//     
//     if (Array.isArray(value)) {
//       console.log(value)
//       currentElement = flat.length > 0 && !Array.isArray(flat) && []
//       if (currentElement.length > 0 && !Array.isArray(currentElement)) addToElement(currentElement)
//       flatArr(value)
//     // if current value is obj
//     } else if (typeof value === 'object') {
//       currentElement = flat.length > 0 && Array.isArray(flat) && {}
//       if (currentElement.length > 0 && Array.isArray(currentElement)) addToElement(currentElement)
//       flatObj(value)
//     // if current value is val
//     } else {
//       addToElement(value)
//     }
//   }
// 
//   setFlat(value)
//   return flat
// }


// const value1 = {a: 1, b: {c: 2, d: 3, e: {f: 4}}}
// output: { a: 1, c: 2, d: 3, f: 4 }

// const value2 = [1, 2,[3, 4, [5, 6]]]
// output: [ 1, 2, 3, 4, 5, 6 ]

// const value3 = [1, 2, [3], {
//   a: 4,
//   b: {
//     c: 5,
//     d: [6, 7, [8, 9, [10]]]
//   }
// }]
// output: [1, 2, 3, {a: 4, c: 5, d: [6, 7, 8, 9, 10]}]


// console.log(flatten(value1))
// console.log(flatten(value2))
// console.log(flatten(value3))


// ______________________________
// ______________________________
// error testing

// function describe(testSuiteName, func) {
//   console.log(`beginning test suite ${testSuiteName}`)
//   try {
//     func()
//     console.log(`successfully completed test suite ${testSuiteName}`)
//   } catch (err) {
//     console.error(`failed running test suite ${testSuiteName} on test case ${err.message}`)
//   }
// }
// 
// function it(testCaseName, func) {
//   console.log(`beginning test case ${testCaseName}`)
//   try {
//     func()
//     console.log(`successfully completed test case ${testCaseName}`)
//   } catch (err) {
//     throw new Error(`${testCaseName} with error message ${err.message}`)
//   }
// }
// 
// function expect(actual) {
//   return {
//     toBe(expected) {
//       if (actual !== expected) {
//         throw new Error(`expected ${JSON.stringify(actual)} to be ${JSON.stringify(expected)}`)
//       }
//     },
//     toExist() {
//       if (actual === null || actual === undefined) {
//         throw new Error(`expected value to exist but got ${JSON.stringify(actual)}`)
//       }
//     },
//     toBeType(expected) {
//       if (typeof actual !== expected) {
//         throw new Error(`expected ${JSON.stringify(actual)} to be of type ${expected} but got ${typeof actual}`)
//       }
//     }
//   }
// }
// 
// // Do not edit the lines below.
// exports.describe = describe;
// exports.it = it;
// exports.expect = expect;


