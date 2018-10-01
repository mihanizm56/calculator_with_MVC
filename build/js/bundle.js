(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){

const Controller = require('./controller.js')

Controller.init()


},{"./controller.js":2}],2:[function(require,module,exports){
const Model = require('./model')
const View = require('./view')

module.exports = {
  init() {
    document.addEventListener('click', this.delegateClick)
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


},{"./model":3,"./view":5}],3:[function(require,module,exports){

module.exports = {
  state:0,
  result:'',

  makeResult() {
    return this.result = Math.round(eval(this.result) * 10000) / 10000
  },

  addToListOfNumbers(value) {
    return this.result += value
  },

  backwards() {
    this.result =  this.result.substring(0,  this.result.length - 1)
  },

  eqSquare() {
    return this.result = this.result * this.result
  },

  eqSqrt() {
    if (this.result >= 0) {
      return this.result = Math.sqrt(this.result)
    }
  },
  
  clearResult() {
    return this.result = '' 
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
  }
}

},{"./model":3,"./observer":4}]},{},[1]);
