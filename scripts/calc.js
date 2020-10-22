class formula {
    constructor(n1, n2, n3) {
        this.formula = [n1, n2, n3];
        this.sinais = ['-', '-'];
    }
}
var polos, pm;
//var numeros = [2.5, 3];
//f = new formula(3, 8, 2);
//pm = pontoMedio(numeros);
//polos = definirPolos(polos, numeros, f);


function calcular(f, num) {
    var exp = Math.pow(num, f.formula[0]);
    var mult = num * f.formula[1];
    var res;
    //Primera parte
    if (f.sinais[0] === '-') {
        res = exp - mult;
    } else if (f.sinais[0] === '+') {
        res = exp + mult;
    } else {
        console.log('Sinal nao reconhecido');
    }
    //console.log('Resp '+res);
    //Segunda parte
    if (f.sinais[1] === '-') {
        res -= f.formula[2];
    } else if (f.sinais[1] === '+') {
        res += f.formula[2];
    } else {
        console.log('Sinal nao reconhecido');
    }
    //console.log(res);
    res = setPrecision(res);
    return res;
}

function definirPolos(polos, num, f) {
    //se A for o negativo
    /* FUTURO
    FUTURAMENTE
    if((calcular(formula, num[0]) < 0) && (calcular(formula, num[1]) > 0)){
        polos = {'n': num[0], 'p':num[1]};
    }else if((calcular(formula, num[0]) > 0) && (calcular(formula, num[1]) < 0)){
        polos = {'n': num[1], 'p':num[0]};
    }else{
        console.log('Numeros inseridos nao batem com padrao');
    }
    */
    //0 eh negativo
    //1 eh positivo
    if ((calcular(f, num[0]) < 0)) {
        //polos = { 'n': num[0], 'p': num[1] };
        polos = [num[0], num[1]]; 
    } else {
        //polos = { 'n': num[1], 'p': num[0] };
        polos = [num[1], num[0]]; 
    }
    //console.log(polos);
    return polos;
}

function pontoMedio(num) {
    var pm = (num[0] + num[1]) / 2;
    pm = setPrecision(pm);
    return pm;
}

//Seta para precisao de 4 decimais
function setPrecision(num) {
    //console.log('Antes de setPrecision:'+num+'\n');
    num = Math.floor(num * 10000) / 10000;
    //console.log(num);
    return num;
}

function resolver(f, polos, pm) {
    var res = 1;
    while (res < -0.01 || res > 0.01) {
        pm = pontoMedio(polos);
        res = calcular(f, pm);

        document.getElementById('result').value += ('Negativo: '+polos[0]+'\n'+'Positivo: '+polos[1]+'\n'+'PM: '+pm+'\n'+'Res: '+res+'\n\n');


        console.log('Negativo: '+polos[0]+'\n'+'Positivo: '+polos[1]+'\n'+'PM: '+pm+'\n'+'Res: '+res+'\n');
        if(res > 0){
            polos[1] = pm;
        }else if( res < 0){
            polos[0] = pm;
        }
    }
    document.getElementById('result').value += ('------------------Finalizado------------------');
}