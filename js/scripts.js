const Model = {
  equality(string){
    View.clearDisplay()
    View.showItems(eval(string))
  },

  addToListOfNumbers(value){
    View.showItems(value)
  },

  clearResult(){
    View.clearDisplay()
  }
}

const View = {
  showItems(number) {
    document.getElementById('display').value += number
  },

  clearDisplay(){
    document.getElementById('display').value = ''
  } 
}

const Controller = {
  init() {
    this.clickListener(document)
  },

  clickListener(whereToListen) {
    whereToListen.addEventListener('click', () => {
      Controller.delegateClick(event)
    })
  },

  delegateClick(event){
    if (event.target.value){
      Model.addToListOfNumbers(event.target.value)
    }
    else if (event.target.className == 'button button-cancel'){
      Model.clearResult()
    }
    else if (event.target.className == 'button button-eq') {
      Model.equality(document.getElementById('display').value)
    }
  }
}

Controller.init()
