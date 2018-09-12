const Model = {
  equality(string){
    View.clearDisplay()

    const result = Math.round(eval(string) * 10000) / 10000
    View.showItems(result)
  },

  addToListOfNumbers(value){
    View.showItems(value)
  },
  backwards(value){
    View.clearDisplay()

    const result = value.substring(0, value.length - 1)
    View.showItems(result)
  },
  eqSquare(number){
    View.clearDisplay()
    
    View.showItems(number * number)
  },
  eqSqrt(number) {
    View.clearDisplay()

    if(number>=0){
      const result = Math.sqrt(number)
      View.showItems(result)

      return
    }
  },
  clearResult() {
    View.clearDisplay()
  }
}

const View = {
  showItems(number) {
    if(number=='Infinity'){
      number = '0'
    }
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
      if (event.target.value == '^2'){
        Model.eqSquare(document.getElementById('display').value)
        return
      } 
      if(event.target.value == 'sqrt') {
        Model.eqSqrt(document.getElementById('display').value)
        return
      } 
      if (event.target.value == 'back') {
        Model.backwards(document.getElementById('display').value)
        return
      } 
      Model.addToListOfNumbers(event.target.value) 
    }
    if (event.target.className == 'button button-cancel'){
      Model.clearResult()
      return
    }
    if (event.target.className == 'button button-eq') {
      Model.equality(document.getElementById('display').value)
      return
    }
  }
}

Controller.init()
