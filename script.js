const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}


var flag = 0;
function brackets(){
    if (flag==0){
        display.value += '(';
        flag=1;
    }else{
        display.value += ')';
        flag=0;
    }
}

function backspace(){
    display.value = (display.value).slice(0,-1);
}


function clearDisplay(){
    display.value = "";
    flag=0;
}

function calculate(){
    try {
        display.value=eval(display.value);
    } catch (error) {
        display.value="error"
    }
}