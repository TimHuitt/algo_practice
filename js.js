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


function flatten(value) {
  // create global running variables
  let flat = Array.isArray(value) ? [] : {}
  let currentElement = undefined
  // create flatten helper for recursive actions
  setFlat = (value) => {
    // handle adding values to elements
    const addToElement = (value) => {
      if (currentElement) {
        if (Array.isArray(currentElement)) {
          currentElement.push(value)
        } else {
          currentElement[Object.keys(value)[0]] = Object.values(value)[0]
        }
      } else {
        if (Array.isArray(flat)) {
          flat.push(value)
        } else if (typeof value !== 'string' && typeof Object.values(value)[0] !== 'object') {
          flat[Object.keys(value)[0]] = Object.values(value)[0]
        }
      }
    }

    const arrToObj = (value) => {
      if (typeof value[1] === 'object') return false
      const key = value[0]
      const obj = {}
      obj[key] = value[1]
      return obj
    }

    // handle array elements
    const flatArr = (value) => {
      // iterate current element
      value.forEach(element => {
        // if current element is array/obj
        if (typeof element === 'object'){
          // recursively pass to helper
            setFlat(element)
        // if current element is val
        } else {
          addToElement(element)
          // add to current element
        }
      });
    }

    // handle obj elements
    const flatObj = (value) => {
      // iterate current element
      Object.entries(value).map((element) => {
        // recursively pass to helper
        if (Array.isArray(element)) {
          arrToObj(element) ? addToElement(arrToObj(element)) : setFlat(element)
        // if current element is val
        } else if (Object.values(value)[0]) {
          // add to current element
          addToElement(arrToObj(element))
        }
      })
    }
    
    if (Array.isArray(value)) {
      console.log(value)
      currentElement = flat.length > 0 && !Array.isArray(flat) && []
      if (currentElement.length > 0 && !Array.isArray(currentElement)) addToElement(currentElement)
      flatArr(value)
    // if current value is obj
    } else if (typeof value === 'object') {
      currentElement = flat.length > 0 && Array.isArray(flat) && {}
      if (currentElement.length > 0 && Array.isArray(currentElement)) addToElement(currentElement)
      flatObj(value)
    // if current value is val
    } else {
      addToElement(value)
    }
  }

  setFlat(value)
  return flat
}


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

function describe(testSuiteName, func) {
  console.log(`beginning test suite ${testSuiteName}`)
  try {
    func()
    console.log(`successfully completed test suite ${testSuiteName}`)
  } catch (err) {
    console.error(`failed running test suite ${testSuiteName} on test case ${err.message}`)
  }
}

function it(testCaseName, func) {
  console.log(`beginning test case ${testCaseName}`)
  try {
    func()
    console.log(`successfully completed test case ${testCaseName}`)
  } catch (err) {
    throw new Error(`${testCaseName} with error message ${err.message}`)
  }
}

function expect(actual) {
  return {
    toBe(expected) {
      if (actual !== expected) {
        throw new Error(`expected ${JSON.stringify(actual)} to be ${JSON.stringify(expected)}`)
      }
    },
    toExist() {
      if (actual === null || actual === undefined) {
        throw new Error(`expected value to exist but got ${JSON.stringify(actual)}`)
      }
    },
    toBeType(expected) {
      if (typeof actual !== expected) {
        throw new Error(`expected ${JSON.stringify(actual)} to be of type ${expected} but got ${typeof actual}`)
      }
    }
  }
}

// Do not edit the lines below.
exports.describe = describe;
exports.it = it;
exports.expect = expect;



// ______________________________
// ______________________________
// custom iterators

Array.prototype.myMap = function (callback) {
  const output = []
  for (let i = 0; i < this.length; i++) {
    output.push(callback(this[i], i, this))
  }
  return output
};

Array.prototype.myFilter = function (callback) {
  if (!this.length) return []
  const output = []
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this) === true) {
      output.push(this[i])
    }
  }
  return output
};

Array.prototype.myReduce = function (callback, initialValue) {
  let start = 0

  acc = initialValue
  if (initialValue === undefined) {
    acc = this[0]
    start = 1
  }

  for (let i = start; i < this.length; i++) {
    acc = callback(acc, this[i], i, this)
  }

  return acc
};


array = [1, 2, 3]

const mappedArray = array.myMap((value, i, arr) => {
  return value + i + arr[1]
})

const filteredArray = array.myFilter((value, i, arr) => {
  return (value + i + arr[1]) > 5
})

const reducedArray = array.myReduce((acc, value, i, arr) => {
  return acc + value + i + arr[1]
}, 3)

// console.log(mappedArray)
// console.log(filteredArray)
// console.log(reducedArray)


const buildBoard = () => {
  output = []
  for (let i = 0; i < 6; i++) {
    obj = {}
    for (let j = 0; j < 5; j++) {
      obj[`${i}${j}`] = ''
    }
    output.push(obj)
  }
  return output
}

// console.log(buildBoard())



// ______________________________
// ______________________________
// two sums

const twoSum = (nums, target) => {
  let current = 0
  const matches = []

  for (let num of nums) {
    current = num
    for (let n of nums) {
      if (n !== current && n + current === target) {
        matches.unshift(nums.indexOf(n))
      }
    }
  }
  return matches
};

nums = [2,7,11,15]
target = 9

console.log(twoSum(nums, target))