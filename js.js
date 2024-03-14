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
    const addToElement = (value, force = false) => {
      if (currentElement) {
        if (Array.isArray(currentElement)) {
          currentElement.push(value)
        } else {
          currentElement[value[0]] = value[1]
        }
      } else {
        if (Array.isArray(flat)) {
          flat.push(value)
        } else {
          flat[value[0]] = value[1]
        }
      }
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
        if (typeof element === 'object' && typeof element[1] !== 'number'){
          // recursively pass to helper
          setFlat(element)
        // if current element is val
        } else {
          // add to current element
          addToElement(element)
        }
      })
    }

    // if current value is array
    if (Array.isArray(value)) {
      currentElement = flat.length > 0 && !Array.isArray(flat) && []
      if (currentElement.length > 0 && !Array.isArray(currentElement)) addToElement(currentElement, true)
      flatArr(value)
    // if current value is obj
    } else if (typeof value === 'object') {
      currentElement = flat.length > 0 && !Array.isArray(flat) && {}
      if (currentElement.length > 0 && Array.isArray(currentElement)) addToElement(currentElement, true)
      flatObj(value)
    // if current value is val
    } else {
      addToElement(value)
    }
  }

  setFlat(value)
  return flat
}


const value = {a: 1, b: {c: 2, d: 3, e: {f: 4}}}
// output: { a: 1, c: 2, d: 3, f: 4 }

// const value = [1, 2,[3, 4, [5, 6]]]
// output: [ 1, 2, 3, 4, 5, 6 ]

// const value = [1, 2, [3], {
//   a: 4,
//   b: {
//     c: 5,
//     d: [6, 7, [8, 9, [10]]]
//   }
// }]
// output: [1, 2, 3, {a: 4, c: 5, d: [6, 7, 8, 9, 10]}]


console.log(flatten(value))