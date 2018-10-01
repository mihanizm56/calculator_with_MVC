const Model = require('./model')
const EventObserver = require('./observer')

module.exports = {
  showItems() {
    // if (number == 'Infinity') {
    //   number = '0'
    // }
    //document.getElementById('display').value += value

    const observer = new EventObserver()

    observer.subscribe(value => {
      console.log('broadcast catched' + value)
      document.getElementById('display').value += value
    })
    observer.broadcast(Model.value)

    
  },

  clearDisplay() {
    document.getElementById('display').value = ''
  },
}
