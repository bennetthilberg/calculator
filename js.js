let display = document.getElementById('display');
let buttons = Array.from(document.getElementsByClassName('btn'))
let currentOp = ''; // the operation that equals button will execute if pressed now;
// ^ 'add' 'sub' 'div' 'mult'
let fieldA;
let fieldB;
let mode = 'enter'; /* 'enter'ing first field, in 
between fieldA being set and starting to enter b - 'next' */


display.textContent = '0';
for(const button of buttons){
    button.addEventListener('click', () => executeBtn(button.id))
}

function executeBtn(btnName){
    console.log(btnName);
    if(mode == 'enter'){
        if(isNaN(btnName) ==  false)/* if it's a digit*/{
            if(display.textContent == '0'){
                display.textContent = btnName;
            }
            else{display.textContent += btnName;}
        }
        else if(btnName == 'eq'){}
        else if(btnName == 'clear'){clear();}
        else{
            fieldA = display.textContent;
            mode = 'next';
            currentOp = btnName;
        }
    }
    if(mode == 'next'){
        if(isNaN(btnName) ==  false)/* if it's a digit*/{
            if(display.textContent == '0' || display.textContent == fieldA){
                display.textContent = btnName;
            }
            else{display.textContent += btnName;}
        }
        else if(btnName == 'eq'){
            fieldB = display.textContent;
            if(currentOp == 'add'){
                display.textContent = add(fieldA, fieldB);
            }
            if(currentOp == 'sub'){
                display.textContent = sub(fieldA, fieldB);
            }
            if(currentOp == 'div'){
                display.textContent = div(fieldA, fieldB);
            }
            if(currentOp == 'mult'){
                display.textContent = mult(fieldA, fieldB);
            }
        }
        else if(btnName == 'clear'){clear();}
        else{
            /*fieldB = display.textContent;
            mode = 'ready';*/
        }
    }
    /*if(mode == 'ready'){
        
    }*/
}
function add(fieldA, fieldB){
    return `${+fieldA + +fieldB}`;
}
function sub(fieldA, fieldB){
    return `${+fieldA - +fieldB}`;
}
function div(fieldA, fieldB){
    return `${+fieldA / +fieldB}`;
}
function mult(fieldA, fieldB){
    return `${+fieldA * +fieldB}`;
}
function clear(){
    display.textContent = '0';
    fieldA = '0';
    fieldB = '0';
    mode = 'enter';
}