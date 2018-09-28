const Model = require('./model')
const EventObserver = require('./observer')

module.exports = {
  showItems(number) {
    if (number == 'Infinity') {
      number = '0'
    }
    
    document.getElementById('display').value += number
  },

  observerTest(){
    const observer = new EventObserver()

    observer.subscribe(value => {
      console.log('broadcast catched' + value)
    })

    console.log(`Model.state = ${Model.state}`)
    observer.broadcast(Model.state)
  },

  clearDisplay() {
    document.getElementById('display').value = ''
  }
}
