const botonNum = document.getElementsByName('boton-num');
const botonOp = document.getElementsByName('boton-op');
const botonIgual = document.getElementsByName('boton-igual')[0];
const botonReset = document.getElementsByName('boton-reset')[0];
var result = document.getElementById('result');
var opeActual = '';
var opeAnterior = '';
var operacion = undefined;

botonNum.forEach(function(boton){
    boton.addEventListener('click', function(){
        agregarNumero(boton.innerText);
    })
});

botonOp.forEach(function(boton){
    boton.addEventListener('click', function(){
        selectOp(boton.innerText);
    })
});

botonIgual.addEventListener('click', function(){
    calcular();
    actualizarDisplay();
});

botonReset.addEventListener('click', function(){
    clear();
    actualizarDisplay();
});

function selectOp(op){
    if(opeActual === '') return;
    if(opeAnterior !== ''){
        calcular();
    };
    operacion = op.toString();
    opeAnterior = opeActual;
    opeActual = '';
}

function calcular(){
    var calculo;
    const anterior = parseFloat(opeAnterior);
    const actual = parseFloat(opeActual);
    if(isNaN(anterior)|| isNaN(actual)) return;
    switch(operacion){
        case '+': 
            calculo = anterior + actual;
            break;
        case '-': 
            calculo = anterior - actual;
            break
        case 'X': 
            calculo = anterior * actual;
            break;
        case '/': 
            calculo = anterior / actual;
            break;
        default:
            return;
    }
    opeActual = calculo;
    operacion = undefined;
    opeAnterior = '';
}

function agregarNumero(num){
    opeActual = opeActual.toString() + num.toString();
    actualizarDisplay();
};

function clear(){
    opeActual = '';
    opeAnterior = '';
    operacion = undefined;
}

function actualizarDisplay(){
    result.value = opeActual;
};

clear();