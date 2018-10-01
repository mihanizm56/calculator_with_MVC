(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){

const Controller = require('./controller.js')
const View = require('./view.js')

Controller.init()
//View.observerTest()


},{"./controller.js":2,"./view.js":5}],2:[function(require,module,exports){
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


},{"./model":3,"./view":5}],3:[function(require,module,exports){

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

},{}],4:[function(require,module,exports){

class EventObserver {
  constructor() {
    this.observers = []
  }

  subscribe(fn) {
    this.observers.push(fn)
  }

  unsubscribe(fn) {
    this.observers = this.observers.filter(subscriber => subscriber !== fn)
  }

  broadcast(data) {
    this.observers.forEach(subscriber => subscriber(data))
  }
}

module.exports = EventObserver
},{}],5:[function(require,module,exports){
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
  },
}

},{"./model":3,"./observer":4}]},{},[1]);
