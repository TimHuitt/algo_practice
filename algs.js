/// Find 2 numbers in array that equal target ///

// first solution
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

/// Determine if the second array is a subsequence of the first ///

// first solution
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


/// Replace the values of an ascending array with their square ///
/// sorted ascending ///

// first solution

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
      squared.push(array[left] * array[left])
      left++
    } else {
      squared.push(array[right] * array[right])
      right--
    }
  }
  return squared
}


array = [1, 2, 3, 5, 6, 8, 9]

// console.log(sortedSquaredArray(array))