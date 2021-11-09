function ExchangeRate() {

    let local = document.getElementById('1').value
    let foreign = document.getElementById('2').value
    let amount = parseFloat(document.getElementById('amount').value)

    if (local === "1") {
        if (foreign === "f2") {
            alert('Exchange amount' + ' ' + amount / parseFloat(document.getElementById('12').value))
        } else if (foreign === "f3") {
            alert('Exchange amount' + ' ' + amount / parseFloat(document.getElementById('13').value))
        } else if (foreign === "f4") {
            alert('Exchange amount' + ' ' + amount / parseFloat(document.getElementById('14').value))
        } else {
            alert(amount)
        }
    }
    if (local === "2") {
        if (foreign === "f1") {
            alert('Exchange amount' + ' ' + amount / parseFloat(document.getElementById('21').value))
        } else if (foreign === "f3") {
            alert('Exchange amount' + ' ' + amount / parseFloat(document.getElementById('23').value))
        } else if (foreign === "f4") {
            alert('Exchange amount' + ' ' + amount / parseFloat(document.getElementById('24').value))
        } else {
            alert('Exchange amount' + ' ' + amount)
        }
    }
    if (local === "3") {
        if (foreign === "f1") {
            alert('Exchange amount' + ' ' + amount / parseFloat(document.getElementById('31').value))
        } else if (foreign === "f2") {
            alert('Exchange amount' + ' ' + amount / parseFloat(document.getElementById('32').value))
        } else if (foreign === "f4") {
            alert('Exchange amount' + ' ' + amount / parseFloat(document.getElementById('34').value))
        } else {
            alert('Exchange amount' + ' ' + amount)
        }
    }
    if (local === "4") {
        if (foreign === "f1") {
            alert('Exchange amount' + ' ' + amount / parseFloat(document.getElementById('41').value))
        } else if (foreign === "f2") {
            alert('Exchange amount' + ' ' + amount / parseFloat(document.getElementById('42').value))
        } else if (foreign === "f3") {
            alert('Exchange amount' + ' ' + amount / parseFloat(document.getElementById('43').value))
        } else {
            alert('Exchange amount' + ' ' + amount)
        }
    }
}






