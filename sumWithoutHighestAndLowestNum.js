function sumArray(array) {
  
    if ((array === null || array === undefined) || (array.length < 2 )) return 0
    return array.reduce((a, b) => a + b) - ( Math.min.apply(this, array) + Math.max.apply(this, array))
  }