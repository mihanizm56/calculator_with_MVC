
//const View = require('./view')

module.exports = {
  state:0,
  result:'',
  equality(string) {
    //View.clearDisplay()
    //View.showItems(Math.round(eval(string) * 10000) / 10000)
  },

  addToListOfNumbers(value) {
    console.log('this.value было = ' + this.result)
    console.log('в model пришло ' + value)
    this.result += value
    console.log('this.value стало = ' + this.result)
    return 
  },

  backwards(value) {
    //View.clearDisplay()
    //View.showItems(value.substring(0, value.length - 1))
  },

  eqSquare(number) {
    //View.clearDisplay()
    //View.showItems(number * number)
  },

  eqSqrt(number) {
    //View.clearDisplay()

    if (number >= 0) {
      //View.showItems(Math.sqrt(number))
    }
  },
  
  clearResult() {
    //View.clearDisplay()
  }
}
