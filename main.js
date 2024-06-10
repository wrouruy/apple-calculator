let res = '';
let deleteZero = false;
let firstClick = false;
let equ = false;
let zeroTap = 0

res = '';
monitor.value = res;
monitor.value += '0';
if(firstClick == true){
    monitor.value = '';
}


document.body.onkeydown = function (e) {
    if (e.keyCode == 49) { 
        res += '1';
        monitor.value = res;
        firstClick = true 
    } else if (e.keyCode == 50) { 
        res += '2';
        monitor.value = res;
        firstClick = true
    } else if (e.keyCode == 51) { 
        res += '3';
        monitor.value = res;
        firstClick = true
    } else if (e.keyCode == 52) { 
        res += '4';
        monitor.value = res;
        firstClick = true
    } else if (e.keyCode == 53) { 
        res += '5';
        monitor.value = res;
        firstClick = true
    } else if (e.keyCode == 54) { 
        res += '6';
        monitor.value = res;
        firstClick = true
    } else if (e.keyCode == 55) { 
        res += '7';
        monitor.value = res;
        firstClick = true
    }else if (!e.shiftKey && e.keyCode == 56) { 
        res += '8';
        monitor.value = res;
        firstClick = true
    } else if (!e.shiftKey && e.keyCode == 57) { 
        res += '9';
        monitor.value = res;
        firstClick = true
    } else if (!e.shiftKey && e.keyCode == 48) { 
        if(zeroTap == 0){
            res += '0';
            monitor.value = res;
            firstClick = true
        } else if(zeroTap == 1){
            res += '.';
            monitor.value = res;
        } else if(zeroTap > 1){
            res += '0';
            monitor.value = res;
        }
        zeroTap++
    }else if (e.keyCode == 189) { 
        if(firstClick == true){
            res += '-';
            monitor.value = res;
        }
    }else if (e.keyCode == 187) { 
        if(firstClick == true){
            res += '+';
            monitor.value = res;
        }
    }else if (e.keyCode == 13) { 
        equ = true
        res = eval(res)
        if(res <= Infinity){
            monitor.value = res;
        } else {
            res = Infinity
            monitor.value = res;
        }
    }else if (e.keyCode == 8) { 
        res = res.slice(0, -1);
        monitor.value = res;
        if(res == ''){
            monitor.value += '0';
        }
    }else if (e.keyCode == 190) { 
        if(firstClick == true){
            res += '.';
            monitor.value = res;
        }
    } else if (e.shiftKey && e.keyCode == 56) {
        if (firstClick == true) { 
            res += '*';
            monitor.value = res;
        }
    } else if(e.keyCode == 191){
        if(firstClick == true){
            res += '/';
            monitor.value = res;
        }
    } else if(e.shiftKey && e.keyCode == 57){
        res += '(';
        monitor.value = res;
    } else if(e.shiftKey && e.keyCode == 48){
        res += ')';
        monitor.value = res;
    }else if(e.keyCode == 69){
        res += Math.E; monitor.value = res; firstClick = true
    }
};
btn1.onclick = function () {
    res += '1';
    monitor.value = res;
    firstClick = true 
}
btn2.onclick = function () {
    res += '2';
    monitor.value = res;
    firstClick = true
}
btn3.onclick = function () {
    res += '3';
    monitor.value = res;
    firstClick = true
}
btn4.onclick = function () {
    res += '4';
    monitor.value = res;
    firstClick = true
}
btn5.onclick = function () {
    res += '5';
    monitor.value = res;
    firstClick = true
}
btn6.onclick = function () {
    res += '6';
    monitor.value = res;
    firstClick = true
}
btn7.onclick = function () {
    res += '7';
    monitor.value = res;
    firstClick = true
}
btn8.onclick = function () {
    res += '8';
    monitor.value = res;
    firstClick = true
}
btn9.onclick = function () {
    res += '9';
    monitor.value = res;
    firstClick = true
}

btn0.onclick = function () {
    if(zeroTap == 0){
        res += '0';
        monitor.value = res;
        firstClick = true
    } else if(zeroTap == 1){
        res += '.';
        monitor.value = res;
    } else if(zeroTap > 1){
        res += '0';
        monitor.value = res;
    }
    zeroTap++
}

clearBtn.onclick = function () {
    res = '';
    monitor.value = res;
    monitor.value = '0';
    firstClick = false
}
plmnBtn.onclick = function () {
    if(firstClick == true){
        equ = true
        res = eval(res);
        res *= -1
        if(res <= Infinity){
            monitor.value = res;
        } else {
            res = Infinity
            monitor.value = res;
        }
        
    } 
}
addBtn.onclick = function () {
    if(firstClick == true){
        res += '+';
        monitor.value = res;
    }
}
diffBtn.onclick = function () {
    if(firstClick == true){
        res += '-';
        monitor.value = res;
    }
}

mulBtn.onclick = function() {
    if (firstClick == true) {
        res += '*';
        monitor.value = res;
    }
}
divBtn.onclick = function () {
    if(firstClick == true){
        res += '/';
        monitor.value = res;
    }
}



btnDot.onclick = function () {
    if(firstClick == true){
        res += '.';
        monitor.value = res;
    }
}
square.onclick = function () {
    if(firstClick == true){
        res += '**2';
        monitor.value = res;
    }
}
cube.onclick = function () {
    if(firstClick == true){
        res += '**3';
        monitor.value = res;
    } 
}
powY.onclick = function () { 
    if(firstClick == true){
        res += '**';
        monitor.value = res;
    } 
}

eX.onclick = function () { res += Math.E + '**'; monitor.value = res; }
tenX.onclick = function () { res += 10 + '**'; monitor.value = res; }
Rad.onclick = function () { res += Math.Rad; monitor.value = res; }
percentBtn.onclick = function () { res = eval(res) / 100; monitor.value = res; }
let numberPi = Math.PI
pi.onclick = function () {
    res += numberPi;
    monitor.value = res;
    firstClick = true
    
}


equBtn.onclick = function () {
    equ = true
    res = eval(res)
    if(res <= Infinity){
        monitor.value = res;
    } else {
        res = Infinity
        monitor.value = res;
    }
    
}






bracketOpen.onclick = function () {
    res += '(';
    monitor.value = res;
    
}
bracketClose.onclick = function () {
    res += ')';
    monitor.value = res;
    
}






window.addEventListener('resize', function() {
    let width = window.innerWidth;
    let height = window.innerHeight;
    console.log(`width: ${width} px`);
    console.log(`height: ${height} px`);

    // one
    if(width > 500){
        One.style.display = 'flex'
    } else if(width < 1500){
        One.style.display = 'none'
    }
    // two
    if(width > 600){
        Two.style.display = 'flex'
    } else if(width < 1600){
        Two.style.display = 'none'
    }
    // three
    if(width > 700){
        Three.style.display = 'flex'
    } else if(width < 1700){
        Three.style.display = 'none'
    }
    // four
    if(width > 800){
        Four.style.display = 'flex'
    } else if(width < 1800){
        Four.style.display = 'none'
    }
    // five
    if(width > 900){
        Five.style.display = 'flex'
    } else if(width < 1900){
        Five.style.display = 'none'
    }
    // six
    if(width > 1000){
        Six.style.display = 'flex'
    } else if(width < 2000){
        Six.style.display = 'none'
    }

});


sin.onclick = function () { 
    res += 'Math.sin('; monitor.value = res;}
cos.onclick = function () { 
    res += 'Math.cos('; monitor.value = res;}
tan.onclick = function () {
    res += 'Math.tan('; monitor.value = res;}
sinh.onclick = function () {
    res += 'Math.sinh('; monitor.value = res;}
cosh.onclick = function () { 
    res += 'Math.cosh('; monitor.value = res;}
tanh.onclick = function () { 
    res += 'Math.tanh('; monitor.value = res;}


logTen.onclick = function () { res += 'Math.log10('; monitor.value = res; firstClick = true}
ln.onclick = function () { res += 'Math.log('; monitor.value = res; firstClick = true}
// exp.onclick = function () { addToMonitor('Math.exp('); }
// cubeRoot.onclick = function () { addToMonitor('Math.cbrt('); }
e.onclick = function () { res += Math.E; monitor.value = res; firstClick = true}
EE.onclick = function () { res += eval(Math.E ** 2); monitor.value = res; firstClick = true}
Rand.onclick = function () {res += Math.floor(Math.random() * 1000);; monitor.value = res; firstClick = true}