// CALCULATOR PROGRAM

const display = document.getElementById('display')

function appendItem(input){
    display.value += input
}

function clearItem(){
    display.value = ''
}

function calculate(){
    try{
        display.value = eval(display.value)
    }
    catch(error){
        display.value = 'error'
    }
    
}