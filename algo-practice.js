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

// // improved solution
// const twoNumberSum = (array, targetSum) => {
//   const nums = new Set()
// 
//   for (let num of array) {
//     match = targetSum - num
//     if (nums.has(match)) {
//       return [num, match]
//     }
//     nums.add(num)
//   }
//   return []
// }
// 
// array = [13, 5, -4, 8, 11, 1, -1, 6]
// targetSum = 10

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

// // improved solution
// function isValidSubsequence(array, sequence) {
//   let seqIndex = 0;
// 
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] === sequence[seqIndex]) {
//       seqIndex++
//     }
//     if (sequence.length === seqIndex) { return true }
//   }
//   return false
// }
// 
// array = [5, 1, 22, 25, 6, -1, 8, 10]
// sequence = [1, 6, -1, 10]

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

// // improved solution
// function sortedSquaredArray(array) {
//   const squared = []
//   let left = 0
//   let right = array.length - 1
// 
//   for (let i = array.length; i > 0; i--) {
//     if (Math.abs(array[left]) > Math.abs(array[right])) {
//       squared.unshift(array[left] * array[left])
//       left++
//     } else {
//       squared.unshift(array[right] * array[right])
//       right--
//     }
//   }
//   return squared
// }
// 
// 
// array = [1, 2, 3, 5, 6, 8, 9]
// // array = [-10, -5, 0, 5, 10]

// console.log(sortedSquaredArray(array))

//_________________________________ //
//_________________________________ //
/// Find the winner if [homeTeam = 1, awayTeam = 0] and each win awards 3 points///

// function tournamentWinner(competitions, results) {
//   const score = {}
//   // loop results
//   for (let i = 0; i < results.length; i++) {
//     const home = competitions[i][0]
//     const away = competitions[i][1]
// 
//     // track winner score (+3)
//     if (results[i]) {
//       score.hasOwnProperty(home) 
//         ? score[home] += 3
//         : score[home] = 3
//     } else {
//       score.hasOwnProperty(away) 
//         ? score[away] += 3
//         : score[away] = 3
//     }
//   }
// 
//   // return team with highest score
//   return Object.keys(score).reduce((a, b) => score[a] > score[b] ? a : b)
// }
// 
// competitions = [
//   ["HTML", "C#"],
//   ["C#", "Python"], 
//   ["Python", "HTML"],
// ]
// 
// results = [0, 0, 1]

// console.log(tournamentWinner(competitions, results))

//_________________________________ //
//_________________________________ //
/// Find the minimum amount of change that can be created by combining the coins provided ///

// function nonConstructibleChange(coins) {
//   let minChange = 0
//   coins.sort((a, b) => a-b)
// 
//   // loop coins in ascending order
//   for (let i = 0; i < coins.length; i++) {
// 
//     // if coin is greater than max + 1
//     if (coins[i] > minChange + 1) {
//       
//       // return min + 1
//       return minChange + 1
// 
//     // if coin is less than max
//     } else {
// 
//       // add to min + 1
//       minChange += coins[i]
//     }
//   }
//   
//   // return min
//   return minChange + 1
// }
// 
// coins = [5, 7, 1, 1, 2, 3, 22]
// console.log(nonConstructibleChange(coins))

//_________________________________ //
//_________________________________ //
/// reverse the string ///

// const reverse = (str) => {
//   newString = ''
//   for (let i = str.length - 1; i > -1; i--) {
//     newString += str[i]
//   }
//   return newString
// }

// console.log(reverse('hello'))

//_________________________________ //
//_________________________________ //
/// transpose matrix ///

// function transposeMatrix(matrix) {
//   let result = []
//     // if first value is array
//     if (Array.isArray(matrix[0])) {
//       // loop sub array
//       for (let i = 0; i < matrix[0].length; i++) {
//         // loop base array
//         for (let j = 0; j < matrix.length; j++) {
//           // save or push each value
//           result[i] ? result[i].push(matrix[j][i]) : result[i] = [matrix[j][i]]
//         }
//       }
//     // else if first value is not array
//     } else {
//       // loop array
//       for (let i = 0; i < matrix.length; i++) {
//         //save each value
//         result[i] = [matrix[i]]
//       }
//     }
//   // return transposed array
//   return result
// }

// console.log(transposeMatrix([1, 2]))
// 
// console.log(transposeMatrix(
//   [
//     [1, 2], 
//     [3, 4], 
//     [5, 6]
//   ]
// ))


// const generateHashFromString = (str) => 
//   str.split('')
//     .reduce((acc, char) => acc + char
//     .charCodeAt(0)
//   ,0) % 1000;
// 
// // console.log(generateHashFromString('example'))
// // console.log(generateHashFromString('anotherExample'))
// 
// function sumArray(numbers) {
//   return numbers.reduce((acc, cur) => acc + cur, 0);
// }


// console.log(sumArray([1,2,3,4]))
// console.log(sumArray([]))
// console.log(sumArray([5,-2,7]))
// console.log(sumArray([-1,-1,-1,-1]))


//_________________________________ //
//_________________________________ //
// const solution1 = (numbers) => {
//   let largest = 0
//   if (numbers.length > 0) {
//       for (let number = 0; number < numbers.length; number++) {
//         console.log(largest <= numbers[number])
//           largest = largest <= numbers[number] ? numbers[number] : largest
//       }
//   } else {
//       return 0
//   }
//   return largest
// };

// console.log(solution([7,2,6,3]))


//_________________________________ //
//_________________________________ //
// const solution = (arr) => {
//   if (arr.length <= 1) return ''
//   let left = 0
//   let right = 0
// 
//   cleaned = arr.filter((i) => i > 0)
//   
//   for (let i = 0; i < cleaned.length; i++) {
//     if (i > 0 && i % 2 && cleaned[i] !== -1) {
//         left += cleaned[i]
//     } else if (i > 0 && i % 2 === 0 && cleaned[i] !== -1) {
//         right += cleaned[i]
//       }
//   }
//   if (left > right) return "Left"
//   if (right > left) return "Right"
//   return ""
// };

// console.log(solution([3,6,2,9,-1,10]))
// console.log(solution([3,3,10,4,12]))
// console.log(solution([1, 10, 5, 1, 0, 6]))



//_________________________________ //
//_________________________________ //
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
//             flat[count].push(v)
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
//         flat.push(value)
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


//_________________________________ //
//_________________________________ //
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
// find two that sum to target

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
// roman to num

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
// rotate array

// var rotate = function(nums, k) {
//     for (let i = 0; i < k; i++) {
//       nums.unshift(nums.pop())
//     }
// };
// 
// const nums = [1,2,3,4,5,6,7]
// const k = 3
// console.log(rotate(nums, k))


// ______________________________
// ______________________________
// rotate array simplified

// var rotate = function(nums, k) {
//   k = k % nums.length

//   const reverse = (start, end) => {
//     while (start < end) {
//       let temp = nums[start]
//       nums[start] = nums[end]
//       nums[end] = temp
//       start++
//       end--
//     }
//   }
// 
//   reverse(0, nums.length - 1)
// 
//   reverse(0, k - 1)
// 
//   reverse(k, nums.length - 1)
// 
//   return nums
// };
// 
// // const nums = [1,2,3,4,5,6,7]
// const nums = [-1,2,3,4,5]
// const k = 4
// console.log(rotate(nums, k))


// ______________________________
// ______________________________
// max profit


// const maxProfit = (prices) => {
//   // set lowest/highest values
//   let profit = 0
//   let lowest = prices[0]
// 
//   // loop prices
//   for (let i = 0; i < prices.length; i++) {
//     // set lowest if price is lower
//     if (prices[i] < lowest) {
//       lowest = prices[i]
//     }
//     // update profit if higher
//     if (prices[i] - lowest > profit) {
//       // set highest
//       profit = prices[i] - lowest
//     }
//   }
//   // return difference
//   return(profit)
// };
// 
// const prices = [7,4,5,3,6,1]
// // const prices = [7,6,4,3,1]
// // const prices = [2,4,1]
// console.log(maxProfit(prices))



// ______________________________
// ______________________________
// max profit 2 - buy and sell same day

// const maxProfit = (prices) => {
//   // set lowest/highest values
//   let profit = 0
//   let lowest = prices[0]
// 
//   // loop prices
//   for (let i = 0; i < prices.length; i++) {
//     // set lowest if price is lower
//     if (prices[i] < lowest) {
//       lowest = prices[i]
//     }
//     // update profit if higher
//     if (prices[i] - lowest > profit) {
//       // set highest
//       profit = prices[i] - lowest
//     }
//   }
//   // return difference
//   return(profit)
// };
// 
// // const prices = [7,1,5,3,6,4]
// const prices = [1,2,3,4,5]
// const prices = [7,6,4,3,1]
// // const prices = [7,6,4,3,1]
// // const prices = [2,4,1]
// console.log(maxProfit(prices))

// ______________________________
// ______________________________
// int to roman numeral

// const intToRoman = (num) => {
//   let result = ''
// 
//   // create map of possibilities
//   const map = {
//     'M': '1000',
//     'CM': '900',
//     'D': '500',
//     'CD': '400',
//     'C': '100',
//     'XC': '90',
//     'L': '50',
//     'XL': '40',
//     'X': '10',
//     'IX': '9',
//     'V': '5',
//     'IV': '4',
//     'I': '1',
//   }
// 
//   // loop map
//   for (let i in map) {
//     // while num in range of current value
//     while (num >= map[i]) {
//       // add current key
//       result += i
//       // reduce num by current value
//       num -= map[i]
//     }
//   }
//   return result
// } 
// 
// const num = 1994
// // M CM XC IV
// // 1 9  9  4
// console.log(intToRoman(num))


// ______________________________
// ______________________________
// linked lists utility

// // Definition for singly-linked list.
// function ListNode(val, next) {
//     this.val = (val===undefined ? 0 : val)
//     this.next = (next===undefined ? null : next)
// }
// 
// function createLinkedList(arr) {
//   let head = new ListNode(arr[0])
//   let current = head
//   for (let i = 1; i < arr.length; i++) {
//       current.next = new ListNode(arr[i])
//       current = current.next
//   }
//   return head
// }
// 
// function linkedListToArray(head) {
//   let arr = [];
//   while (head !== null) {
//       arr.push(head.val);
//       head = head.next;
//   }
//   return arr;
// }

// ______________________________
// ______________________________
// add linked lists
// You are given two non-empty linked lists representing two non-negative integers. 
// The digits are stored in reverse order, and each of their nodes contains a single digit. 
// Add the two numbers and return the sum as a linked list.

// 
// const addTwoNumbers = (l1, l2) => {
//   // initialize output list
//   let head = new ListNode(0)
//   // set current node
//   let node = head
//   // initialize carry over
//   let carry = 0
// 
// 
//   // loop lists  
//   while (l1 !== null || l2 !== null) {
//     console.log(l1)
//     // set current value for each list
//     const val1 = l1 !== null ? l1.val : 0
//     const val2 = l2 !== null ? l2.val : 0
// 
//     // get sum + carry over
//     const sum = val1 + val2 + carry
//     // set carryover if >= 10
//     carry = sum >= 9 ? Math.floor(sum / 10) : 0
//     // create new ListNode and assign to next
//     node.next = new ListNode(sum % 10)
//     // update current node to current.next
//     node = node.next
// 
//     // set lists to next node
//     if (l1 !== null) l1 = l1.next
//     if (l2 !== null) l2 = l2.next
//   }
// 
//   // if carry over remainder, add new node to current.next
//   if (carry) {
//     node.next = new ListNode(carry)
//   }
// 
//   return head.next
// 
// }
// 
// let l1 = createLinkedList([2,4,3])
// let l2 = createLinkedList([5,6,4])
// 
// // let l1 = createLinkedList([9,9,9,9,9,9,9])
// // let l2 = createLinkedList([9,9,9,9])
// 
// let result = addTwoNumbers(l1, l2)
// console.log(result)

// ______________________________
// ______________________________
// Always return between 6 and 7

// const x = 2; 
// let y = 4; 
// function update(arg) { 
//   return Math.random() + y * arg; 
// } 
// // y = 2
// y = 3
// const result = update(x);
// console.log(result)

// ______________________________
// ______________________________
// covert string to html table
// 
// const convertToTable = (tableData) => {
//   const rows = tableData.split(';')
//   let html = "<table>\n"
// 
//   for (row of rows) {
//     let data = row.split(',')
//     html += "<tr>\n"
//     for (item of data) {
//       html += "<td>\n" + item + "\n</td>\n"
//     }
//     html += "</tr>\n"
//   }
//   html += "</table>"
// 
//   return html
// }
// 
// const tableData =  "Name, Age, Job; Alice, 30, Engineer; Bob, 25, Designer"
// 
// console.log(convertToTable(tableData))

// ______________________________
// ______________________________
// find the first non-repeated character in a given string

// const findNonRepeat = (string) => {
//   const map = {}
//   for (let i of string) {
//     if (map[i] !== undefined) {
//       map[i] += 1
//     } else {
//       map[i] = 1
//     }
//   }
// 
//   for (let [key, val] of Object.entries(map)) {
//     if (val === 1) return key
//   }
// 
//   return map
// }

// // improved
// 
// const findNonRepeat = (string) => {
//   const map = new Map()
// 
//   for (let char of string) {
//     map.set(char, (map.get(char) || 0) + 1)
//   }
// 
//   for (let [char, val] of map) {
//     if (val === 1) return char
//   }
// }
// 
// 
// const string = "aabbcdddeeef"
// console.log(findNonRepeat(string))

// ______________________________
// ______________________________
// // reverse singly linked list
// 
// const reverse = (head) => {
//   // set up prev and current
//   let prev = null
//   let current = head
//   // loop list
//   while (current) {
//     // save next
//     const next_temp = current.next
//     // set next value based on prev value
//     current.next = prev
//     // set prev current
//     prev = current
//     // set current to next
//     current = next_temp
//   }
// 
//   // return new head
//   return prev
// }

// ______________________________
// ______________________________
//  Longest Substring Without Repeating Characters

// const lengthOfLongestSubstring = (s) => {
//   const chars = {}
//   let max = 0
//   let start = 0
// 
//   // loop characters
//   for (let i = 0; i < s.length; i++) {
//     // if current char count >= start
//     if (chars[s[i]] >= start) {
//       // set start to current current char count + 1
//       start = chars[s[i]] + 1
//     }
// 
//     // set current char count to current index
//     chars[s[i]] = i
//     // set max to larger of max and start -> index + 1
//     max = Math.max(max, i - start + 1)
//   }
// 
//   // return max
//   return max
// }
// 
// s = "abcabcbb"
// // s = " "
// console.log(lengthOfLongestSubstring(s))


// ______________________________
// ______________________________
//  largest container

// const maxArea = (height) => {
//   // return min * min if length === 2
//   if (height.length === 2) {
//     const area = Math.min.apply(null, height)
//     return area * area
//   }
// 
//   // init largest
//   let largest = 0
//   
//   // init left/right
//   let left = 0
//   let right = height.length - 1
// 
//   // while left < right
//   while (left < right) {
//     // get area
//     const area = Math.min(height[left], height[right]) * (right - left)
//     // update largest
//     largest = Math.max(largest, area)
//     // if left height less than right height
//     if (height[left] < height[right]) {
//       // increase left
//       left++
//     // else
//     } else {
//       // decrease right
//       right--
//     }
//   }
//   // return largest
//   return(largest)
// }
// 
// const height = [1,8,6,2,5,4,8,3,7]
// 
// console.log(maxArea(height))


// ______________________________
// ______________________________
//  reverse integer within 32bit range

// const reverse = (x) => {
//   let nums = []
//   let sign = 0
//   const top = Math.pow(2, 31) - 1
//   const bottom = Math.pow(-2, 31) - 1
//   
//   if (x < 0) {
//     sign = 1
//     x = x * -1
//   }
// 
//   while (x > 0) {
//     nums.push(x % 10)    
//     x = Math.floor(x / 10)
//   }
// 
//   result = parseInt(nums.join(''))
// 
//   if (sign) {
//     result *= -1
//   }
// 
//   if (result >= top || result <= bottom || !result) {
//     return 0
//   }
// 
//   return result
// }
// 
// const x = 0
// 
// console.log(reverse(x))

// ______________________________
// ______________________________
//  improved: reverse integer within 32bit range

// const reverse = (x) => {
//   let reversed = 0
//   const top = Math.pow(2, 31) - 1
//   const bottom = Math.pow(-2, 31)
//   
//   while (x !== 0) {
//     const num = x % 10
//     x = Math.floor((x - num) / 10)
//     reversed = reversed * 10 + num
// 
//     if (reversed >= top || reversed <= bottom) {
//       return 0
//     }
//   }
// 
//   return reversed
// }
// 
// const x = 1534236469
// 
// console.log(reverse(x))



// ______________________________
// ______________________________
//  string to in (atoi)


// const myAtoi = (s) => {
//   s = s.trim()
//   let result= ''
//   let sign = 0
//   const top = Math.pow(2, 31) - 1 // 2147483647
//   const bottom = Math.pow(-2, 31) // -2147483648
// 
//   for (let i = 0; i < s.length; i++) {
//     if (i === 0 && s[i] === '-') {
//       sign = 1
//       continue
//     } else if (i === 0 && s[i] === '+') {
//       continue
//     }
// 
//     if (!isNaN(parseInt(s[i]))) {
//       result = result + s[i]
//     } else {
//       break
//     }
//   }
// 
//   result = parseInt(result)
//   const output = sign ? result * -1 : result
// 
//   if (output >= top) {
//     return top
//   } else if (output <= bottom) {
//     return bottom
//   }
// 
//   return isNaN(output) ? 0 : output
// }

// - Simplified

// const myAtoi = (s) => {
//   const top = 2147483647
//   const bottom = -2147483648
//   const output = parseInt(s) || 0
//   return output > top ? top : output < bottom ? bottom : output
// }
// 
// // const s = ""
// // const s = " "
// // const s = ".1"
// // const s = "+1"
// // const s = "42"
// // const s = "   -42"
// // const s = "+-12"
// const s = "-413"
// // const s = "41935461684 with words"
// // const s = "4193 with words"
// // const s = "words and 987"
// console.log(myAtoi(s))



// ______________________________
// ______________________________
//  find connect 4 winner

// const checkWinner = () => {
//   const pieces = board.reduce((acc, e) => {
//     return acc + e.reduce((acc,i) => acc + i)
//   },0)
// 
//   console.log(pieces)
// 
//   let win = 0
// 
//   const delta = {
//     'vert': [1, 0],
//     'hor': [0, 1],
//     'desc': [1, 1],
//     'asc': [1, -1],
//   }
//   
//   for (let col = 0; col < board.length; col++) {
//     for (let cell = 0; cell < board[col].length; cell++) {
//       const current = board[col][cell]
//       
//       if (current > 0) {
//         for (dir in delta) {
//           let cells = []
//           let x = cell
//           let y = col
// 
//           for (let i = 0; i < 3; i++) {
//             x = x + (1 * delta[dir][0])
//             y = y + (1 * delta[dir][1])
//             
//             if (x > 5 || x < 0 || y > 6 || y < 0) {
//               break
//             } else {
//               cells.push(board[y][x])
//             }
//           }
//           if (cells && cells.length > 2) {
//             if (cells.every((e) => e === 1) && current === 1) win = 1
//             if (cells.every((e) => e === 2) && current === 2) win = 2
//           }
//         }
//       }
//     }
//   }
//   return win
// }
// 
// // asc right (-)
// // const board = [[0,0,0,0,0,2],[0,0,0,0,2,1],[0,0,0,2,1,2],[0,0,2,1,2,1],[0,0,0,0,0,1],[0,0,0,0,0,0],[0,0,0,0,0,0]]
// 
// // desc right (+)
// // const board = [[0,0,1,2,1,2],[0,0,0,1,1,2],[0,0,0,0,1,2],[0,0,0,0,0,1],[0,0,0,0,0,2],[0,0,0,0,0,2],[0,0,0,0,0,0]]
// 
// // horizontal (same index)
// // const board = [[0,0,0,0,0,1],[0,0,0,0,0,1],[0,0,0,0,0,1],[0,0,0,0,0,1],[0,0,0,0,0,2],[0,0,0,0,0,2],[0,0,0,0,0,2]]
// 
// // vertical (same col)
// // const board = [[0,0,1,2,2,2],[0,0,1,1,1,1],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0]]
// 
// // full
// const board = [[1,1,1,1,1,1],[1,1,1,1,1,1],[1,1,1,1,1,1],[1,1,1,1,1,1],[1,1,1,1,1,1],[1,1,1,1,1,1],[1,1,1,1,1,1],]
// 
// 
// console.log(checkWinner(board))

// ______________________________
// ______________________________
//  flatten value

// const flatten = (value) => {
// 
//   return value.reduce((acc, val) => {
// 
//     // if array
//     if (Array.isArray(val)) {
//       // set acc to flattened value
// 
//     // if object
//     } else if (typeof val === 'object') {
//       // initialize child obj
//       
//       // loop val
//         // if val is obj
//           //  set child obj to value of of key ()
//     
//     // if val
//     } else {
// 
//     }
//   })
// 
//   
// }
// 
// const value1 = {a: 1, b: {c: 2, d: 3, e: {f: 4}}}
// // output: { a: 1, c: 2, d: 3, f: 4 }
// 
// const value2 = [1, 2,[3, 4, [5, 6]]]
// // output: [ 1, 2, 3, 4, 5, 6 ]
// 
// const value3 = [1, 2, [3], {
//   a: 4,
//   b: {
//     c: 5,
//     d: [6, 7, [8, 9, [10]]]
//   }
// }]
// // output: [1, 2, 3, {a: 4, c: 5, d: [6, 7, 8, 9, 10]}]
// 
// 
// // console.log(flatten(value1))
// console.log(flatten(value2))
// // console.log(flatten(value3))



// ______________________________
// ______________________________
//  phone digit chars possible

// const letterCombinations = (digits) => {
//   digits = parseInt(digits)
//   if (digits.length > 1) return false
// 
//   const charMap = {
//     2: ['a', 'b', 'c'],
//     3: ['d', 'e', 'f'],
//     4: ['g', 'h', 'i'],
//     5: ['j', 'l', 'l'],
//     6: ['m', 'n', 'o'],
//     7: ['p', 'q', 'r', 's'],
//     8: ['t', 'u', 'v'],
//     9: ['w', 'x', 'y', 'z'],
//   }
// 
//   const output = []
//   let count = 0
// 
//   while (digits) {
//     const digit = digits % 10
//     if (charMap.hasOwnProperty(digit)) {
//       
//     }
// 
//     digits = Math.floor(digits / 10)
//     count = 0
//   }
// 
//   return output
// }
// 
// digits = "23"
// console.log(letterCombinations(digits))


// ______________________________
// ______________________________
//  event target


// class EventTarget {
//   constructor() {
//     this.listeners = {}
//   }
// 
//   addEventListener(name, callback) {
//     if (!this.listeners[name]) {
//       this.listeners[name] = []
//     }
//     this.listeners[name].push(callback)
//   }
// 
//   removeEventListener(name, callback) {
//     if (this.listeners[name]) {
//       const index = this.listeners[name].indexOf(callback)
//       if (index !== -1) {
//         this.listeners[name].splice(index, 1)
//         if (this.listeners[name].length === 0) {
//           delete this.listeners[name]
//         }
//       }
//     }
//   }
// 
//   dispatchEvent(name) {
//     if (this.listeners[name]) {
//       this.listeners[name].forEach((callback) => callback())
//     }
//   }
// }
// 
// const target = new EventTarget();
// const logHello = () => console. log ('hello');
// const logThere = () => console. log ('there');
// const logWorld = () => console. log ('world');
// target.addEventListener ('hello', logHello);
// target.addEventListener ('there', logThere);
// target.addEventListener ('world', logWorld);
// target.dispatchEvent ('hello'); 
// target.dispatchEvent ('there')
// target.dispatchEvent ('world');
// target.removeEventListener ('hello', logHello);
// target.dispatchEvent ('hello'); target. dispatchEvent ('there'); target. dispatchEvent ( 'world');
// target.removeEventListener ('there', logThere);
// target.dispatchEvent ('hello'); target.dispatchEvent ('world'); target. dispatchEvent ('there');


// ______________________________
// ______________________________
// count each word

// const wordCloud = (str) => {
//   let output = {}
//   const words = str.split(' ')
// 
//   for (const word of words) {
//     let cleaned = ''
// 
//     for (let char of word) {
//       char = char.toLowerCase()
//       
//       if (char >= 'a' && char <= 'z' || char === '-') {
//         cleaned += char
//       } else {
//         const next = word.slice(word.indexOf(char))
//         console.log(next)
//         break
//       }
//     }
// 
//     if (cleaned) {
//       output[cleaned] = (output[cleaned] || 0) + 1
//     }
//   }
// 
//   return output
// }
// 
// const str1 = "We came, we saw, we conquered...then we ate Bill's (Mille-Feuille) cake."
// const str2 = 'The bill came to five dollars.'
// 
// console.log(wordCloud(str1))
// console.log(wordCloud(str2))

const data = ['main-images/posts/1e9222b9-8550-44b7-b447-4918e32ed71f/dbcm6cytn4qux4guqt70', 'main-images/posts/1e9222b9-8550-44b7-b447-4918e32ed71f/wobtoerzdyyfg1727wmb']
console.log(data[0].split('/')[2])