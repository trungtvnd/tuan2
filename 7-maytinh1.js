
    function Addition() {
    let number1 = parseFloat(document.getElementById('number1').value)
    let number2 = parseFloat(document.getElementById('number2').value)
    let sum = number1 + number2
    alert('Giá trị bằng: ' + ' ' + sum )
}
    function Subtraction() {
    let number1 = parseFloat(document.getElementById('number1').value)
    let number2 = parseFloat(document.getElementById('number2').value)
    let sub = number1 - number2
    alert('Giá trị bằng: ' + ' ' + sub )
}
    function Multiplication() {
    let number1 = parseFloat(document.getElementById('number1').value)
    let number2 = parseFloat(document.getElementById('number2').value)
    let mul = number1 * number2
    alert('Giá trị bằng: ' + ' ' + mul )
}
    function Division() {
    let number1 = parseFloat(document.getElementById('number1').value)
    let number2 = parseFloat(document.getElementById('number2').value)
    if (number2 === 0) {
    alert('Không được chia cho 0, Bạn vui lòng nhập số khác')
}
    let div = number1 / number2
    alert('Giá trị bằng: ' + ' ' + div )
}
