const Model = require('./model')


module.exports = {
  init() {
    this.clickListener(document)
  },

  clickListener(whereToListen) {
    whereToListen.addEventListener('click', () => {
      Controller.delegateClick(event)
    })
  },

  delegateClick(event) {

    if (event.target.className == 'first-line__input') {
      return
    }
    if (event.target.value) {
      if (event.target.value == '^2') {
        Model.eqSquare(document.getElementById('display').value)
        return
      }
      if (event.target.value == 'sqrt') {
        Model.eqSqrt(document.getElementById('display').value)
        return
      }
      if (event.target.value == 'back') {
        Model.backwards(document.getElementById('display').value)
        return
      }
      Model.addToListOfNumbers(event.target.value)
    }
    if (event.target.className == 'button button-cancel') {
      Model.clearResult()
      return
    }
    if (event.target.className == 'button button-eq') {
      Model.equality(document.getElementById('display').value)
      return
    }
  }
}

