(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){

const Controller = require('./controller.js')

Controller.init()

},{"./controller.js":2}],2:[function(require,module,exports){
const Model = require('./model')

module.exports = {
  init() {
    this.clickListener(document)
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
      if (event.target.value == '^2') {
        return Model.eqSquare(document.getElementById('display').value)
      }
      if (event.target.value == 'sqrt') {
        return Model.eqSqrt(document.getElementById('display').value)
      }
      if (event.target.value == 'back') {
        return Model.backwards(document.getElementById('display').value)
      }
      if (event.target.value == 'cancel') {
        return Model.clearResult()
      }
      if (event.target.value == 'equal') {
        return Model.equality(document.getElementById('display').value)
      }

      Model.addToListOfNumbers(event.target.value)
    }
  }
}


},{"./model":3}],3:[function(require,module,exports){

const View = require('./view')

module.exports = {
  equality(string) {
    View.clearDisplay()
    View.showItems(Math.round(eval(string) * 10000) / 10000)
  },

  addToListOfNumbers(value) {
    View.showItems(value)
  },

  backwards(value) {
    View.clearDisplay()
    View.showItems(value.substring(0, value.length - 1))
  },

  eqSquare(number) {
    View.clearDisplay()
    View.showItems(number * number)
  },

  eqSqrt(number) {
    View.clearDisplay()

    if (number >= 0) {
      View.showItems(Math.sqrt(number))
    }
  },
  
  clearResult() {
    View.clearDisplay()
  }
}

},{"./view":4}],4:[function(require,module,exports){
module.exports = {
  showItems(number) {
    if (number == 'Infinity') {
      number = '0'
    }
    
    document.getElementById('display').value += number
  },

  clearDisplay() {
    document.getElementById('display').value = ''
  }
}

},{}]},{},[1]);
