

var descontoInss = function () {
    var salario = Number(document.getElementById("salarioBruto").value)
    var res1 = document.getElementById("res1")
    var desconto = calculoDescontoInss(salario)
    res1.innerHTML = `Inss descontado = R$ ${desconto.toFixed(2)}`
}  

var descontoIrff = function () {
    var salario = Number(document.getElementById("salarioBruto").value)
    var res2 = document.getElementById("res2")
    var desconto = calculoDescontoIrff(salario)
    res2.innerHTML = `IRFF descontado = R$ ${desconto.toFixed(2)}`
}  

var fgtRecolhido = function(){
    var salario = Number(document.getElementById("salarioBruto").value)
    var res3 = document.getElementById("res3")
    var recolhimento = calculoFgts(salario)
    res3.innerHTML = `FGTS recolhido = R$ ${recolhimento.toFixed(2)}`
}

var calculoDescontoInss = function(salario){
    var inss = 0
    if (salario <= 1212.00) {
        inss = (salario * 0.075)
    } else if (salario <= 2427.35) {
        inss = (salario - 1212.01) * 0.09 + 90.90
    } else if (salario <= 3641.03) {
        inss = (salario - 2427.36) * 0.12 + 200.28
    } else if (salario <= 7087.22) {
        inss = (salario - 3641.04) * 0.14 + 345.92;
    } else {
        inss = 828.38
    }
    return inss
}


var calculoDescontoIrff = function(salario) {
    var salarioSemInss = salario - calculoDescontoInss(salario)

    var irff = 0
    if(salarioSemInss <= 1903.98){
        irff = 0;
    }else if(salarioSemInss <= 2826.65){
        irff = salarioSemInss *  0.075 - 142.80;
    }else if(salarioSemInss <= 3751.05){
        irff = salarioSemInss * 0.15 - 354.80;
    }else if(salarioSemInss <= 4664.68){
        irff = salarioSemInss * 0.225 - 636.13;
    }else{
        irff = salarioSemInss * 0.275 - 869.36;
    }
    return irff
}

var calculoFgts = function(salario){
    var fgts = salario * 0.08
    return fgts
}
