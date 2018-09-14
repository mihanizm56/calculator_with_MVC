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
