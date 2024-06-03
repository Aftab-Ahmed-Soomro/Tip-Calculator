function calculate() {
    let bill = document.getElementById('bill');
    let tip = document.getElementById('tip');
    let total = document.getElementById('total');
    total.innerText = 'Total : ' + bill.value * (1 + tip.value / 100) ;
}