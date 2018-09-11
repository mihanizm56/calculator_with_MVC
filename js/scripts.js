const Model = {
  result:'',
  equality(string){
    return View.showItems(eval(string))
  },
  insertNUmber(number){
    return View.showNumber(number)
  },
  addToString(value){
    this.result += value
    View.showItems(...this.result)
    return this.result
  },
  clearResult(){
    this.result = ''
    View.clearDisplay()
  }
}

const View = {
  showItems() {
    let result = ''
    for (item of arguments) {
      result += item
    }
    document.getElementById('display').value = result
  },
  clearDisplay(){
    document.getElementById('display').value = ''
  } 
}

const Controller = {
  delegateClick(event){
    if (event.target.value){
      Model.addToString(event.target.value)
    }
    else if (event.target.className == 'button button-cancel'){
      Model.clearResult()
    }
    else if (event.target.className == 'button button-eq') {
      Model.equality(document.getElementById('display').value)
    }
    //console.log(event.target.value)
    //Model.insertNUmber(event.target.value)
  }
}

const Router = {
  init() {
    this.Listeners(document)
  },
  Listeners(whereToListen){
    whereToListen.addEventListener('click',()=>{
      Controller.delegateClick(event)
    })
  }
}


Router.init()
