
//const View = require('./view')

module.exports = {
  state:0,
  value:'',
  equality(string) {
    //View.clearDisplay()
    //View.showItems(Math.round(eval(string) * 10000) / 10000)
  },

  addToListOfNumbers(value) {
    console.log('в model пришло ' + value)

    console.log('this.value = ' + this.value)
    return this.value += value
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
