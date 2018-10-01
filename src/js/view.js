const Model = require('./model')
const EventObserver = require('./observer')

const View = {
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

module.exports = View