import {calculator} from './compoundCalculator.js'

let intialCapital;
let timeInYears;
let interestRate;

const intialInvestmentInput = document.querySelector('#intialInvestmentInput');
const lengthOfTimeInput = document.querySelector('#lengthOfTimeInput');
const interestRateInput = document.querySelector('#interestRateInput');

const calculateBtn = document.querySelector('#calculateBtn');

function myFunction(e) {
    console.log("bruv");
    preventDefault();
    
    intialCapital = intialInvestmentInput.value;
    timeInYears = lengthOfTimeInput.value;
    interestRate = interestRateInput.value;

    console.log(intialCapital, timeInYears, interestRate);
}

calculateBtn.addEventListener('submit', myFunction());



let p = new calculator(intialCapital, timeInYears, interestRate)

p.compoundInterestCalculator;
