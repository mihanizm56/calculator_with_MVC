const Model = require('./model')
const View = require('./view')


module.exports = {
  init() {
    document.addEventListener('click', this.delegateClick)
    
  },

  clickListener(object) {
    object.addEventListener('click', () => {
      this.delegateClick(event)
    })
  },

  delegateClick(event) {
    if (event.target.className == 'first-line__input') {
      return
    }
    if (event.target.value) {
      // if (event.target.value == '^2') {
      //   return Model.eqSquare(document.getElementById('display').value)
      // }
      // if (event.target.value == 'sqrt') {
      //   return Model.eqSqrt(document.getElementById('display').value)
      // }
      // if (event.target.value == 'back') {
      //   return Model.backwards(document.getElementById('display').value)
      // }
      // if (event.target.value == 'cancel') {
      //   return Model.clearResult()
      // }
      // if (event.target.value == 'equal') {
      //   return Model.equality(document.getElementById('display').value)
      // }
      Model.addToListOfNumbers(event.target.value)
      View.showItems()
      //View.observerTest()
    }
  }
}

