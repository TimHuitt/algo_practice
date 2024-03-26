
// ______________________________
// ______________________________
// custom iterators

// Array.prototype.myMap = function (callback) {
//   const output = []
//   for (let i = 0; i < this.length; i++) {
//     output.push(callback(this[i], i, this))
//   }
//   return output
// };
// 
// Array.prototype.myFilter = function (callback) {
//   if (!this.length) return []
//   const output = []
//   for (let i = 0; i < this.length; i++) {
//     if (callback(this[i], i, this) === true) {
//       output.push(this[i])
//     }
//   }
//   return output
// };
// 
// Array.prototype.myReduce = function (callback, initialValue) {
//   let start = 0
// 
//   acc = initialValue
//   if (initialValue === undefined) {
//     acc = this[0]
//     start = 1
//   }
// 
//   for (let i = start; i < this.length; i++) {
//     acc = callback(acc, this[i], i, this)
//   }
// 
//   return acc
// };
// 
// 
// array = [1, 2, 3]
// 
// const mappedArray = array.myMap((value, i, arr) => {
//   return value + i + arr[1]
// })
// 
// const filteredArray = array.myFilter((value, i, arr) => {
//   return (value + i + arr[1]) > 5
// })
// 
// const reducedArray = array.myReduce((acc, value, i, arr) => {
//   return acc + value + i + arr[1]
// }, 3)
// 
// // console.log(mappedArray)
// // console.log(filteredArray)
// // console.log(reducedArray)
// 
// 
// const buildBoard = () => {
//   output = []
//   for (let i = 0; i < 6; i++) {
//     obj = {}
//     for (let j = 0; j < 5; j++) {
//       obj[`${i}${j}`] = ''
//     }
//     output.push(obj)
//   }
//   return output
// }

// console.log(buildBoard())



// ______________________________
// ______________________________
// two sums

// const twoSum = (nums, target) => {
//   let current = 0
//   const matches = []
// 
//   for (let num of nums) {
//     current = num
//     for (let n of nums) {
//       if (n !== current && n + current === target) {
//         matches.unshift(nums.indexOf(n))
//       }
//     }
//   }
//   return matches
// };
// 
// nums = [2,7,11,15]
// target = 9

// console.log(twoSum(nums, target))


// ______________________________
// ______________________________
// is palindrome

// const isPal = (x) => {
//   nums = []
//   if (x < 0) return false
// 
//   while (x > 0) {
//     nums.push(x % 10)
//     x = Math.floor(x / 10)
//   }
//   return nums.join('') === nums.reverse().join('')
// }
// 
// console.log(isPal(10))


// ______________________________
// ______________________________
// roman numerals to number

// const romanToInt = (rn) => {
//   let nums = []
//   const table = {
//     'I': 1,
//     'V': 5,
//     'X': 10,
//     'L': 50,
//     'C': 100,
//     'D': 500,
//     'M': 1000,
//   }
// 
//   for (let i = 0; i < rn.length; i++) {
//     if (rn[i] === 'I' && rn[i + 1] === 'V') {
//       nums.push(4)
//       i++
//     } else if (rn[i] === 'I' && rn[i + 1] === 'X') {
//       nums.push(9)
//       i++
//     } else if (rn[i] === 'X' && rn[i + 1] === 'L') {
//       nums.push(40)
//       i++
//     } else if (rn[i] === 'X' && rn[i + 1] === 'C') {
//       nums.push(90)
//       i++
//     } else if (rn[i] === 'C' && rn[i + 1] === 'D') {
//       nums.push(400)
//       i++
//     } else if (rn[i] === 'C' && rn[i + 1] === 'M') {
//       nums.push(900)
//       i++
//     } else {
//       nums.push(table[rn[i]])
//     }
//   }
//   
//   return nums.reduce((acc, val) => 
//     acc + val, 0
//   )
// }
// 
// console.log(romanToInt('MCMXCIV'))


// ______________________________
// ______________________________
// add two arrays

// var addTwoArrays = function(a1, a2) {
//   let output = []
//   let carry = 0
//   const listLength = a1.length > a2.length ? a1.length : a2.length
// 
//   // traverse range of either
//   for (let i = 0; i < listLength; i++) {
//     const i1 = isNaN(a1[i]) ? 0 : a1[i]
//     const i2 = isNaN(a2[i]) ? 0 : a2[i]
//     
//     // get current sum
//     let sum = i1 + i2 + carry
// 
//     // if sum >= 10 increase carry
//     if (sum >= 10) {
//       // trigger carrying
//       carry = 1
//       // add last digit of sum
//       output.push(sum % 10)
//     } else {
//       // add sum to array
//       output.push(sum)
//       carry = 0
//     }
// 
//     if (i === listLength - 1 && carry) {
//       output.push(carry)
//     }
//   }
//   // return final array
//   return output
// };

// a1 = [2,4,3]
// a2 = [5,6,4]
//  7,0,8

// a1 = [9,9,9,9,9,9,9]
// a2 = [9,9,9,9]

// console.log(addTwoArrays(a1,a2))


// ______________________________
// ______________________________
// add linked lists


var addTwoNumbers = function(l1, l2) {
  let output = []

  

  return output
};

// l1 = [2,4,3]
// l2 = [5,6,4]
// = [7,0,8]

l1 = [9,9,9,9,9,9,9]
l2 = [9,9,9,9]
// = [8,9,9,9,0,0,0,1]

// console.log(addTwoNumbers(l1,l2))



function ListNode(val, next) {
  this.val = val
  this.next = null
}

function LinkedList(head = null) {
  this.head = head
}

let n1 = new ListNode(2)
let n2 = new ListNode(5)
n1.next = n2

let list = new LinkedList(n1)

console.log(list.head.next.val)



