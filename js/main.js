function isNumberValid(evt) {
    costAndPeopleChange();
    var charCode = (evt.which) ? evt.which : evt.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        if (charCode == 46) {
            return true;
        }
        return false;
    }
    return true;
}

let globalTip = 0;
let prevActive = null;

const tipChanger = (value) => {
    if (prevActive) {
        let prev = document.getElementById(prevActive);
        prev.classList.remove('active');
    }
    prevActive = `tip${value}`;
    document.getElementById('tipInput').value = '';
    let next = document.getElementById(`tip${value}`);
    next.classList.add('active');
    globalTip = value;
}

const resetCalculator = () => {
    document.getElementById('costInput').value = '';
    document.getElementById('peopleInput').value = ''
    document.getElementById('tipInput').value = '';
    globalTip = 0;
    return true;
}

const costAndPeopleChange = () => {
    let cost = document.getElementById('costInput').value || 0;
    let people = document.getElementById('peopleInput').value || 1;
    if(document.getElementById('tipInput').value && prevActive != null){
        let prev = document.getElementById(prevActive);
        prev.classList.remove('active');
        prevActive = null;
    }
    let tipPercent = document.getElementById('tipInput').value || globalTip;

    let tip = (cost * tipPercent * 0.01) / people;
    let total = (cost / people) + tip;

    document.getElementById('tip').innerText = `$${tip.toFixed(2).toString()}`;
    document.getElementById('total').innerText = `$${total.toFixed(2).toString()}`
}

setInterval(costAndPeopleChange, 400);