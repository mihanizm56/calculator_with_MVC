const Model = {
  a,
  b,
  sum(a,b){
    return a+b
  },
  diff(a,b){
    return a-b
  },
  mul(a,b){
    return a*b
  },
  div(a,b){
    if(b!==0){ 
      return a/b
    }
    alert('введите делитель отличный от нуля!')
    throw new Error()
  },
  insertNUmber(number){
    return View.showNumber(number)
  }
}

const View = {
  showNumber(number){
    const display = document.getElementById('display')
    display.value = number
  }
}

const Controller = {
  delegateClick(event){
    if(event.target.className = ''){}
    if (event.target.className = ''){}
    if(event.target.className = ''){}
    if (event.target.className = ''){}
    //console.log(event.target.value)
    //Model.insertNUmber(event.target.value)
  }
}

const Router = {
  Listeners(whereToListen,callback){
    whereToListen.addEventListener('click',()=>{
      Controller.delegateClick(event)
    })
  }
}

const initialize = () => {
  Router.Listeners(document)
}
initialize()