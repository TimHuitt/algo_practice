// take value (array/obj) and return flattened version

function flatten(value) {
  let flat
  let obj = {}
  let count = 0
  let current = ''
  
  const setFlattened = (value) => {
    
    if (Array.isArray(value)) {
      if (count === 0) { flat = [] }
      value.forEach((v) => {
        if (typeof v === 'object' || Array.isArray(v)) {
          setFlattened(v)
        } else {
          if (flat[count] == 'undefined') {
            flat[count].append(v)
          } else {
            flat[count] = v
          }
        }
        count++
      })
    } else if (typeof value === 'object') {
      if (count === 0) { flat = {} }
      Object.entries(value).map((k, i) => {
        if (Array.isArray(k[1])) {
          current = k[0]
          obj[k[0]] = setFlattened(k[1])
        } else if (typeof k[1] === 'object') {
          setFlattened(k[1])
        } else {
          if (Array.isArray(flat)) {
            if (Object.keys(obj).length > 0) {
              if (Array.isArray(obj[current])) {
                obj[k[0]] = setFlattened(k[1])
              } else {
                obj[k[0]] = k[1]
              }
            } else {
              obj[k[0]] = k[1]
            }
          } else {
            flat[k[0]] = k[1]
          }
        }
        count++
      })
      flat.push(obj)
      obj = {}
    } else {
      if (Array.isArray(flat) && Object.keys(obj).length === 0) {
        flat.append(value)
      } else if (Array.isArray(flat)) {
        ''
      } else {

      }
    }
  }

  setFlattened(value)
  return(flat)
}

// const value = {a: 1, b: {c: 2, d: 3, e: {f: 4}}}
// output: { a: 1, c: 2, d: 3, f: 4 }

// const value = [1, 2,[3, 4, [5, 6]]]
// output: [ 1, 2, 3, 4, 5, 6 ]

const value = [1, 2, [3], {
  a: 4,
  b: {
    c: 5,
    d: [6, 7, [8, 9, [10]]]
  }
}]
// output: [1, 2, 3, {a: 4, c: 5, d: [6, 7, 8, 9, 10]}]


console.log(flatten(value))