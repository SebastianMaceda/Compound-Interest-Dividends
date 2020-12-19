const interestUl = document.querySelector('.interestPerYear');

class calculator{
    constructor(intialInvestment, lengthOfTime, interestRate, monthlyContribution){
        this.intialInvestment = parseInt(intialInvestment);
        this.lengthOfTime = lengthOfTime;
        this.interestRate = interestRate/ 100;
        this.monthlyContribution = monthlyContribution * 12;
    }
    get compoundInterestCalculator(){
        return this.compoundInfo();
    }
    compoundInfo() {
        let total = parseInt(intialCapital);
        for (let i = 0; i < this.lengthOfTime; i++) {
            if (i > 0){
                console.log(this.monthlyContribution);
                this.intialInvestment += this.monthlyContribution;
                console.log(i, this.intialInvestment);
            }
            
            this.intialInvestment += this.intialInvestment * this.interestRate;
            total = this.intialInvestment;

            const randomLi = document.createElement('li');
            randomLi.classList = "randomLi";
            total = Math.round(total * 100)/ 100;

            randomLi.textContent = `${this.intialInvestment}`

            interestUl.appendChild(randomLi);

        }
        return this.total;
    }
}



let intialCapital;
let timeInYears;
let interestRate;
let monthlyContribution;

// console.log(intialCapital, timeInYears, interestRate);

const intialInvestmentInput = document.querySelector('#intialInvestmentInput');
const lengthOfTimeInput = document.querySelector('#lengthOfTimeInput');
const interestRateInput = document.querySelector('#interestRateInput');
const monthlyContributionsInput = document.querySelector('#monthlyContributionsInput');
let p;

function cheerio(event) {
    event.preventDefault();
    interestUl.innerHTML = "";

    intialCapital = intialInvestmentInput.value;
    timeInYears = lengthOfTimeInput.value;
    interestRate = interestRateInput.value;
    monthlyContribution = monthlyContributionsInput.value;


    p = new calculator(intialCapital, timeInYears, interestRate, monthlyContribution)

    p.compoundInterestCalculator;
    // console.log(intialCapital, timeInYears, interestRate);
}


export {calculator, cheerio}