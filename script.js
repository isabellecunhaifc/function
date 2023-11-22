function clq1(){
    alert('Você clicou no botão 1')
}

let btn2 = document.getElementById('btn2');
btn2.addEventListener('click', clq2);

function clq2(){
    alert('Você clicou no botão 2')
}

let valor1 = document.querySelector('#valor1')
let valor2 = document.querySelector('#valor2')
let resultado = document.querySelector('#resultado')

let btSoma = document.querySelector('#btSoma')
btSoma.addEventListener('click', function(){
    soma(Number(valor1.value), Number(valor2.value))
})

function soma(a, b){
    resultado.textContent = (a + b)
}

let btSubtracao = document.querySelector('#btSubtracao')
btSubtracao.addEventListener('click', function(){
    subtração(Number(valor1.value), Number(valor2.value))
})

function subtração(a, b){
    resultado.textContent = (a - b)
}

let btMultiplicacao = document.querySelector('#btMultiplicacao')
btMultiplicacao.addEventListener('click', function(){
    multiplicação(Number(valor1.value), Number(valor2.value))
})

function multiplicação(a, b){
    resultado.textContent = (a * b)
}

let btDivisao = document.querySelector('#btDivisao')
btDivisao.addEventListener('click', function(){
    divisão(Number(valor1.value), Number(valor2.value))
})

function divisão(a, b){
    resultado.textContent = (a/b)
}

let selectIdioma = document.querySelector('#idioma')
selectIdioma.addEventListener('change', function(){
    if(this.value == 'br'){
        btSoma.value = 'Somar'
        btSubtracao.value = 'Subtração'
        btMultiplicacao.value = 'Multiplicação'
        btDivisao.value = 'Divisão'
        btn1.value = 'Botão 1'
        btn2.value = 'Botão 2'
    }
    else if(this.value == 'es'){
        btSoma.value = 'Sumar'
        btSubtracao.value = 'Sustracción'
        btMultiplicacao.value = 'multiplicación'
        btDivisao.value = 'División'
        btn1.value = 'Botón 1'
        btn2.value = 'Botón 2'
    }
    else if(this.value == 'fr'){
        btSoma.value = 'Ajouter'
        btSubtracao.value = 'Soustraction'
        btMultiplicacao.value = 'Multiplication'
        btDivisao.value = 'Division'
        btn1.value = 'Bouton 1'
        btn2.value = 'Bouton 2'
    }
    else if(this.value == 'en'){
        btSoma.value = 'Sum'
        btSubtracao.value = 'Subtraction'
        btMultiplicacao.value = 'Multiplication'
        btDivisao.value = 'Division'
        btn1.value = 'Button 1'
        btn2.value = 'Button 2'
    }
})