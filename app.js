function calculate() {
    let bill = document.getElementById('bill');
    let tip = document.getElementById('tip');
    let total = document.getElementById('total');
    let error = document.getElementById('error');
    if (bill.value === '' && tip.value === '') {
        error.innerText = "Please Enter the required fields!";
    }
    else if (bill.value === '') {
        error.innerText = "Please Enter Bill Amount!";
    }
    else if (tip.value === '') {
        error.innerText = "Please Enter Tip Percentage!";
    }
    else {
        let percentage = (bill.value * tip.value) / 100;
        let full = Number(bill.value) + Number(percentage);
        total.innerText = full.toFixed(2);
    }
    bill.value = '';
    tip.value = '';
}