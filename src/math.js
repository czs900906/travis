function min(a, b) {
  const c = 3;
  return (a - b) * 3
}

module.exports = {
  add: (...args) => {
    return args.reduce((prev, cur) => {
      return prev + cur 
    })
  },

  mul: (...args) => {
    return args.reduce((prev, cur) => {
      return prev * cur 
    })
  },

  cover: (a, b) => {
    if(a > b){
      return b - a
    } else if(a === b) {
      return a + b
    } else {
      return min(a ,b)
    }
  }
}