let SYR = document.getElementById('setValue');
let USD = document.getElementById('textBox');
let alertBox = document.getElementById('alertBox');
let result = 1;

function setValue(){
    result = SYR.value * 14700;
    return result;
}

function convert(){
    USD.innerHTML = setValue();
}

function clearBoxes(){
    SYR.value = '';
    USD.innerHTML = 'USD $';
}