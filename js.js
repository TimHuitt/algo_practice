// take value (array/obj) and return flattened version

function flatten(value) {
  let flat = {} || []

  const setFlattened = (value) => {

    if (typeof value === 'object') {
      Object.entries(value).map((k, i) => {
        if (typeof k[1] === 'object') {
          setFlattened(k[1])
        } else {
          flat[k[0]] = k[1]
        }
      })
    }
  }

  setFlattened(value)
  return(flat)
  // value.map((k, v) => {
  //   console.log(k, v)
  // })
}

const value = {a: 1, b: {c: 2, d: 3, e: {f: 4}}}
// const value = {}

console.log(flatten(value))