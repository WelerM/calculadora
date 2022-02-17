var primeiroNum = 0
var segundoNum =0
var teste = 0
var x = 0
var x2 = 0
var result = 0
var y = 0
//================================================
function soma() {
    y = 1
    teste = 1
    document.getElementById("display1").innerHTML+="+"
}
function subtrai() {
    y = 2
    teste = 1
    document.getElementById("display1").innerHTML+="-"
}
function multi() {
    y = 3
    teste = 1
    document.getElementById("display1").innerHTML+="x"
}
function divide() {
    y = 4
    teste = 1
    document.getElementById("display1").innerHTML+="/"
}
function porcent() {
    y = 5
    teste = 1
    document.getElementById("display1").innerHTML+="%"
}
//==============================
function n1() {
    
    if(teste == 0) {
        primeiroNum = ("" + primeiroNum + 1)
        document.getElementById("display1").innerHTML+="1"
        x = primeiroNum
    }else if (teste > 0) {
        segundoNum = ("" + segundoNum + 1)
        document.getElementById("display1").innerHTML+="1"
        x2 = segundoNum
    }
}
function n2() {
    if(teste == 0) {
        primeiroNum = ("" + primeiroNum + 2)
        document.getElementById("display1").innerHTML+="2"
        x = primeiroNum
    }else if (teste > 0) {
        segundoNum = ("" + segundoNum + 2)
        document.getElementById("display1").innerHTML+="2"
        x2 = segundoNum
    }
}
function n3() {
    if(teste == 0) {
        primeiroNum = ("" + primeiroNum + 3)
        document.getElementById("display1").innerHTML+="3"
        x = primeiroNum
    }else if (teste > 0) {
        segundoNum = ("" + segundoNum + 3)
        document.getElementById("display1").innerHTML+="3"
        x2 = segundoNum
    }
}
function n4() {
    if(teste == 0) {
        primeiroNum = ("" + primeiroNum + 4)
        document.getElementById("display1").innerHTML+="4"
        x = primeiroNum
    }else if (teste > 0) {
        segundoNum = ("" + segundoNum + 4)
        document.getElementById("display1").innerHTML+="4"
        x2 = segundoNum
    }
}
function n5() {
    if(teste == 0) {
        primeiroNum = ("" + primeiroNum + 5)
        document.getElementById("display1").innerHTML+="5"
        x = primeiroNum
    }else if (teste > 0) {
        segundoNum = ("" + segundoNum + 5)
        document.getElementById("display1").innerHTML+="5"
        x2 = segundoNum
    }
}
function n6() {
    if(teste == 0) {
        primeiroNum = ("" + primeiroNum + 6)
        document.getElementById("display1").innerHTML+="6"
        x = primeiroNum
    }else if (teste > 0) {
        segundoNum = ("" + segundoNum + 6)
        document.getElementById("display1").innerHTML+="6"
        x2 = segundoNum
    }
}
function n7() {
    if(teste == 0) {
        primeiroNum = ("" + primeiroNum + 7)
        document.getElementById("display1").innerHTML+="7"
        x = primeiroNum
    }else if (teste > 0) {
        segundoNum = ("" + segundoNum + 7)
        document.getElementById("display1").innerHTML+="7"
        x2 = segundoNum
    }
}
function n8() {
    if(teste == 0) {
        primeiroNum = ("" + primeiroNum + 8)
        document.getElementById("display1").innerHTML+="8"
        x = primeiroNum
    }else if (teste > 0) {
        segundoNum = ("" + segundoNum + 8)
        document.getElementById("display1").innerHTML+="8"
        x2 = segundoNum
    }
}
function n9() {
    if(teste == 0) {
        primeiroNum = ("" + primeiroNum + 9)
        document.getElementById("display1").innerHTML+="9"
        x = primeiroNum
    }else if (teste > 0) {
        segundoNum = ("" + segundoNum + 9)
        document.getElementById("display1").innerHTML+="9"
        x2 = segundoNum
    }
}
function n0() {
    if(teste == 0) {
        primeiroNum = ("" + primeiroNum + 0)
        document.getElementById("display1").innerHTML+="0"
        x = primeiroNum
    }else if (teste > 0) {
        segundoNum = ("" + segundoNum + 0)
        document.getElementById("display1").innerHTML+="0"
        x2 = segundoNum
    }
}
//======================OPERDORES ARITIMÉTICOS===============

//==========RES==============
function res() {
    if (y == 1 ){
        nx2 = parseInt(x2)
        nx = parseInt(x)
        result = parseInt(nx + nx2)
        document.getElementById("display1").innerHTML=`${result}` 
    } else if (y == 2) {
        nx2 = parseInt(x2)
        nx = parseInt(x)
        result = parseInt(nx - nx2)
        document.getElementById("display1").innerHTML=`${result}` 
    } else if (y == 3) {
        nx2 = parseInt(x2)
        nx = parseInt(x)
        result = parseInt(nx * nx2)
        document.getElementById("display1").innerHTML=`${result}` 
    } else if (y == 4) {
        nx2 = parseInt(x2)
        nx = parseInt(x)
        result = parseInt(nx / nx2)
        document.getElementById("display1").innerHTML=`${result}` 
    } else if (y == 5) {
        nx2 = parseInt(x2)
        nx = parseInt(x)
        result = parseInt((nx / 100) * nx2)
        document.getElementById("display1").innerHTML=`${result}` 
    }
}

//================LIMPA===========
function limpa() {
    nx2 = 0
    nx = 0
    result = 0
    primeiroNum = 0
    segundoNum =0
    teste = 0
    x = 0
    x2 = 0
    y  = 0
    document.getElementById("display1").innerHTML="" 
}