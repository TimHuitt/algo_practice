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