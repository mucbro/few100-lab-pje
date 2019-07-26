import './styles.css';
import { add, PI } from './utils';
console.log('Ready to Party');

console.log(add(10, 18));

console.log(PI);

let buttons: NodeList;
export function runApp() {
    const promise = fetch('http://localhost:3000/game');
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
    console.log({ evt, this: this });
    const that = this as HTMLButtonElement;
    buttons.forEach((button: HTMLButtonElement) => {
        if (button.classList.contains('selected')) {
            button.classList.remove('selected');
            button.disabled = false;
        }
    })
    that.classList.add('selected');
    that.disabled = true;
}
