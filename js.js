
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
// }
// // 
// // nums = [2,7,11,15]
// nums = [3, 3]
// target = 6

// console.log(twoSum(nums, target))

// ______________________________
// ______________________________
// two sums simplified

// const twoSum = (nums, target) => {
//   const map = {}
//   for (let i = 0; i < nums.length; i++) {
//     const compliment = target - nums[i]
//     if (map[(compliment)] !== undefined) {
//       return[map[compliment], i]
//     }
//     map[nums[i]] = i
//   }
//   return []
// }
// 
// 
// nums = [2,7,11,15]
// target = 9
// 
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

// 
// var addTwoNumbers = function(l1, l2) {
//   let output = []
// 
//   
// 
//   return output
// };
// 
// // l1 = [2,4,3]
// // l2 = [5,6,4]
// // = [7,0,8]
// 
// l1 = [9,9,9,9,9,9,9]
// l2 = [9,9,9,9]
// // = [8,9,9,9,0,0,0,1]
// 
// // console.log(addTwoNumbers(l1,l2))
// 
// 
// 
// function ListNode(val, next) {
//   this.val = val
//   this.next = null
// }
// 
// function LinkedList(head = null) {
//   this.head = head
// }
// 
// let n1 = new ListNode(2)
// let n2 = new ListNode(5)
// n1.next = n2
// 
// let list = new LinkedList(n1)

// console.log(list.head.next.val)


// ______________________________
// ______________________________
// merge sorted array

// const merge = (nums1, m, nums2, n) => {
//   let index1 = m - 1
//   let index2 = n - 1
//   let mainIndex = m + n - 1
// 
//   while (index2 >= 0) {
//     if (index1 < 0 || nums2[index2] > nums1[index1]) {
//       nums1[mainIndex] = nums2[index2]
//       index2--
//     } else {
//       nums1[mainIndex] = nums1[index1]
//       index1--
//     }
//     mainIndex--
//   }
//   return(nums1)
// };
// 
// const nums1 = [1,2,3,0,0,0]
// const m = 3
// const nums2 = [2,5,6]
// const n = 3
// 
// console.log(merge(nums1, m, nums2, n))


// ______________________________
// ______________________________
// add two


// const twoSum = (nums, target) => {
//   const map = {}
// 
//   for (let i = 0; i < nums.length; i++) {
//     const compliment = target - nums[i]
//     
//     if (map[compliment] !== undefined) {
//       return[map[compliment], i]
//     }
//     map[nums[i]] = i
//   }
//   return []
// }
// 
// nums = [2,7,11,15]
// target = 9
// 
// console.log(twoSum(nums, target))


// ______________________________
// ______________________________
// is palindrome

// const isPal = (x) => {
//   nums = []
//   original = x
// 
//   while (x > 0) {
//     nums.push(x % 10)
//     x = Math.floor(x / 10)
//   }
// 
//   return parseInt(nums.join('')) === original
// }
// 
// console.log(isPal(1011))

// ______________________________
// ______________________________
// roman to num simplified

// var romanToInt = function(s) {
//   let result = 0
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
//   for (let i = 0; i < s.length; i++) {
//     const current = table[s[i]]
//     const next = table[s[i + 1]]
// 
//     if (current < next) {
//       result -= current
//     } else {
//       result += current
//     }
//   }
// 
//   return result 
// };
// 
// console.log(romanToInt('MCMXCIV'))


// ______________________________
// ______________________________
// remove element

// var removeElement = function(nums, val) {
//   let k = 0
//   for (let i = 0;i < nums.length; i++) {
//       if (nums[i] !== val) {
//           nums[k] = nums[i]
//           k++
//       }
//   }
//   return k
// };
// 
// const nums = [3,2,2,3]
// const val = 3
// console.log(removeElement(nums, val))


// ______________________________
// ______________________________
// remove duplicates

// var removeDuplicates = function(nums) {
//   let k = 0
//   
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i + 1] !== undefined && nums[i] !== nums[i + 1]) {
//       nums[k] = nums[i]
//       k++
//     } else if (nums[i+1] === undefined) {
//       nums[k] = nums[i]
//       k++
//     }
//   }
//   return k
// };
// 
// // const nums = [0,0,1,1,1,2,2,3,3,4]
// const nums = [1, 1, 2]
// console.log(removeDuplicates(nums))


// ______________________________
// ______________________________
// remove (any more than 2) duplicates

// var removeDuplicates = function(nums) {
//   // create k
//   let k = 0
//   // create tracker
//   let counter = 0
// 
//   // loop nums
//   for (let i = 0; i < nums.length; i++) {
//     // if this num = last num
//     if (nums[i-1] !== undefined && nums[i] === nums[i-1]) {
//       // if count < 2
//       if (counter < 1) {
//         // add num to index k
//         nums[k] = nums[i]
//         // increase counter
//         counter++
//         // increase k
//         k++
//       }
//     // else
//     } else {      
//       // add number to index k
//       nums[k] = nums[i]
//       // set tracker to false
//       counter = 0
//       // increase k
//       k++
//     }
//   }
//   return n
// }
// 
// const nums = [0,0,1,1,1,2,3,3]
// // const nums = [1,1,1,2,2,3]
// // const nums = [1, 1, 2]
// console.log(removeDuplicates(nums))


// ______________________________
// ______________________________
// majority element
// 
// var majorityElement = function(nums) {
//   // create tracker
//   const tracker = {}
//   
//   // create map of num qty
//   for (num of nums) { 
//     if (tracker[num] !== undefined) {
//       tracker[num]++
//     } else {
//       tracker[num] = 0
//     }
//   }
// 
//   // find and return largest value
//   return largest = Object.keys(tracker).reduce((a, b) => (
//     tracker[a] > tracker[b] ? a : b
//   ))
// }
// 
// const nums = [3,2,3]
// 
// console.log(majorityElement(nums))


// ______________________________
// ______________________________
// majority element simplified

// const majorityElement = (nums) => {
//   let count = 0;
//   let majority = null
// 
//   for (let num of nums) {
//     if (count === 0) {
//         majority = num
//     }
//     count += (num === majority) ? 1 : -1
//   }
// 
//   return majority
// }
// 
// const nums = [1,1,3,2,1,1,2,3,1,0,3]
// console.log(majorityElement(nums))


// ______________________________
// ______________________________
// 
