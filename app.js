function calculate() {
    let bill = document.getElementById('bill');
    let tip = document.getElementById('tip');
    let total = document.getElementById('total');
    let percentage = (bill.value * tip.value) / 100;
    // total.innerText = Number(bill.value) + Number(percentage);
    let full = Number(bill.value) + Number(percentage);
    total.innerText = full.toFixed(2);
}