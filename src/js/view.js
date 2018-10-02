const Model = require('./model')

const View = {
  showItems() {
    const result = Model.result
    this.clearDisplay()
    document.getElementById('display').value = result
  },

  clearDisplay() {
    document.getElementById('display').value = ''
  }
}

module.exports = View