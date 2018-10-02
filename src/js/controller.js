const Model = require('./model')
const View = require('./view')

 const Controller = {
  init() {
    document.addEventListener('click', () => {
      this.delegateClick(event)
    })
  },

  delegateClick(event) {
    if (event.target.className == 'first-line__input') {
      return
    }
    if (event.target.value) {
      if (event.target.value == '^2') {
        Model.eqSquare()
        View.showItems()
        return 
      }
      if (event.target.value == 'sqrt') {
        Model.eqSqrt()
        View.showItems()
        return 
      }
      if (event.target.value == 'back') {
        Model.backwards()
        View.showItems()
        return 
      }
      if (event.target.value == 'cancel') {
        Model.clearResult()
        View.showItems()
        return 
      }
      if (event.target.value == 'equal') {
        Model.makeResult()
        View.showItems()
        return 
      }

      Model.addToListOfNumbers(event.target.value)
      View.showItems()
    }
  }
}

module.exports = Controller