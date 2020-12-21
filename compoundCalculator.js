const interestUl = document.querySelector('.interestPerYear');

class calculator{
    constructor(intialInvestment, lengthOfTime, interestRate, monthlyContribution){
        this.intialInvestment = parseInt(intialInvestment);
        this.lengthOfTime = parseInt(lengthOfTime);
        this.interestRate = interestRate/ 100;
        this.monthlyContribution = monthlyContribution * 12;
    }
    get compoundInterestCalculator(){
        return this.compoundInfo();
    }
    compoundInfo() {
        // const amount = this.intialInvestment * (Math.pow((1 + (this.interestRate)),  (1 * this.lengthOfTime)));
        let amount = 0;
        let q = 0;
        for (let i = 0; i < this.lengthOfTime; i++) {
            amount += this.intialInvestment * (1 + (this.interestRate));
            q += amount - this.intialInvestment;
            console.log(amount, q);

        }
        console.log(amount);

        // return interest;
            

        const randomLi = document.createElement('li');
        randomLi.classList = "randomLi";
        // amount = Math.round(amount * 100)/ 100;

        randomLi.textContent = `${amount}`

        interestUl.appendChild(randomLi);


            

        return amount;
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
let newValue;

function cheerio(event) {
    event.preventDefault();
    interestUl.innerHTML = "";

    intialCapital = intialInvestmentInput.value;
    timeInYears = lengthOfTimeInput.value;
    interestRate = interestRateInput.value;
    monthlyContribution = monthlyContributionsInput.value;


    // p = new calculator(intialCapital, timeInYears, interestRate, monthlyContribution);
    newValue = new calculator(5000, 5, 5, 75);

    newValue.compoundInterestCalculator;
    // console.log(intialCapital, timeInYears, interestRate);
}


export {calculator, cheerio}



// (Intial Investment + (MonthlyContribution * 12)) interest * years 
