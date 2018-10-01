const Model = require('./model')
const EventObserver = require('./observer')

module.exports = {
  showItems() {
    const observer = new EventObserver()

    observer.subscribe(value => {
      this.clearDisplay()
      document.getElementById('display').value = value
    })

    observer.broadcast(Model.result)
  },

  clearDisplay() {
    document.getElementById('display').value = ''
  }
}
