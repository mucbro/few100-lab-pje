import './styles.css';
import { add, PI } from './utils';


let buttons: NodeList;
export function runApp() {
    console.log('making your request');
    // promise.then((response) => {
    //     response.json().then(x => {
    //         secretSquareId = x.secret;
    //         setUp();
    //     })
    //})
    setUp();
    function setUp() {
        buttons = document.querySelectorAll('.btn-secondary');

        buttons.forEach((button, index) => {
            const that = button as HTMLButtonElement;
            that.classList.remove('selected');
            button.addEventListener('click', handleClick)
        })
    }
}


function handleClick(evt) {
    //console.log({ evt, this: this });
    const that = this as HTMLButtonElement;
    const textField = <HTMLInputElement>document.getElementById('subtotal');
    const tipPercentage = +that.value;
    const tipPercentageDisplay = tipPercentage* 100;
    const billAmountRaw = +textField.value;
    const billAmount = billAmountRaw.toFixed(2)
    console.log(billAmount);
    const tipAmountRaw = tipPercentage * +billAmount;
    const tipAmount = tipAmountRaw.toFixed(2)
    console.log(tipAmount);
    const totalToBePaidRaw = +billAmount + +tipAmount;
    const totalToBePaid = totalToBePaidRaw.toFixed(2)
    console.log(totalToBePaid);
    console.log(tipPercentage);
    document.getElementById("BillAmount").innerHTML = billAmount;
    document.getElementById("TipPercentage").innerHTML = tipPercentageDisplay.toString();
    document.getElementById("TipAmount").innerHTML = tipAmount.toString();
    document.getElementById("TotalToBePaid").innerHTML = totalToBePaid.toString();
    buttons.forEach((button: HTMLButtonElement) => {
        if (button.classList.contains('selected')) {
            button.classList.remove('selected');
            button.disabled = false;
        }
    })
    that.classList.add('selected');
    that.disabled = true;
}
