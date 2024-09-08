let SYR = document.getElementById('textBoxSYR');
let USD = document.getElementById('setValueUSD');
let worngAlert = document.getElementById('wrongAlert');
let UsdResult = 1;

function converter(){
    UsdResult = USD.value * 14700;
    SYR.innerHTML = UsdResult;
}

function clearBoxes(){
    SYR.innerHTML = 'SYR';
    USD.value = '';
}

function wrong(){
    if(USD.value == ''){
        worngAlert.style.cssText = `
            z-index: 99;
            width: 260px;
            height: 40vh;
            opacity: 1;
        `
    }
    else{
        converter();
    }

}

function okBtn(){
    worngAlert.style.cssText = `
    z-index: 97;
    width: 0px;
    height: 0vh;
    opacity: 0;
`
}