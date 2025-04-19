const botonNumeros= document.getElementsByName('dato_numero');
const botonOpera=document.getElementsByName('dato_opera');
const botonResult=document.getElementsByName('dato_result')[0];
const botonClear=document.getElementsByName('dato_clear')[0];
var result = document.getElementById('result');
let opActual='';
let opAnterior='';
let operacion=undefined;

botonNumeros.forEach(function(boton){
    boton.addEventListener('click', function(){
        agregarNumero(boton.innerText);

    })
});

botonOpera.forEach(function(boton){
    boton.addEventListener('click', function(){
        selectOperacion(boton.innerText);
    })
});

botonResult.addEventListener('click',function(){
    calcular();
    actualizarDisplay();
});

botonClear.addEventListener('click',function(){
    clear();
    actualizarDisplay();

});
function selectOperacion(op){
    if(opActual===''){
        return;
    }
    if(opAnterior!==''){
        calcular();
    }
    operacion=op.toString();
    opAnterior=opActual;
    opActual='';
}

function calcular(){
    let calculo;
    const anterior=parseFloat(opAnterior);
    const actual=parseFloat(opActual);
    if(isNaN(anterior)||isNaN(actual)){
        return;
    }
    switch(operacion){
        case '+':
            calculo=anterior+actual;
            break;
        case '-':
            calculo=anterior-actual;
            break;
        case 'x':
            calculo=anterior*actual;
            break;
        case '/':
            calculo=anterior/actual;
            break;
        default:
            return;
    }
    opActual=calculo;
    operacion=undefined;
    opAnterior='';
}

function agregarNumero(num){
    opActual=opActual.toString()+num.toString()
    actualizarDisplay();
}

function actualizarDisplay(){
    result.value= opActual;
}
function clear(){
    opActual='';
    opAnterior='';
    operacion=undefined;
}

clear();