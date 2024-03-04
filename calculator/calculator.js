import { LightningElement, track } from 'lwc';

export default class Calculator extends LightningElement {
    @track result = '';
    buttons = [
        { label: '7', value: '7' },
        { label: '8', value: '8' },
        { label: '9', value: '9' },
        { label: 'C', value: 'clear' },
        { label: '4', value: '4' },
        { label: '5', value: '5' },
        { label: '6', value: '6' },
        { label: '/', value: '/' },
        { label: '1', value: '1' },
        { label: '2', value: '2' },
        { label: '3', value: '3' },
        { label: '*', value: '*' },
        { label: '0', value: '0' },
        { label: '.', value: '.' },
        { label: '=', value: 'equal' },
        { label: '-', value: '-' },
        { label: '+', value: ' +'  },
    ];

    handleButtonClick(event) {
        const buttonValue = event.target.value;

        if (buttonValue === 'clear') {
            this.result = '';
        } else if (buttonValue === 'equal') {
            try {
                this.result = eval(this.result).toString();
            } catch (error) {
                this.result = 'Error';
            }
        } else {
            this.result += buttonValue;
        }
    }
}