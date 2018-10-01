
module.exports = {
  state:0,
  result:'',

  makeResult() {
    return this.result = Math.round(eval(this.result) * 10000) / 10000
  },

  addToListOfNumbers(value) {
    return this.result += value
  },

  backwards() {
    this.result =  this.result.substring(0,  this.result.length - 1)
  },

  eqSquare() {
    return this.result = this.result * this.result
  },

  eqSqrt() {
    if (this.result >= 0) {
      return this.result = Math.sqrt(this.result)
    }
  },
  
  clearResult() {
    return this.result = '' 
  }
}
