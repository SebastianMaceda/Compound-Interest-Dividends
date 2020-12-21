const interestUl = document.querySelector('.interestPerYear');

class calculator{
    constructor(intialInvestment, lengthOfTime, interestRate, monthlyContribution){
        this.intialInvestment = parseInt(intialInvestment);
        this.lengthOfTime = parseInt(lengthOfTime);
        this.interestRate = 1 + (interestRate/ 100);
        this.monthlyContribution = monthlyContribution * 12;
    }
    get compoundInterestCalculator(){
        return this.compoundInfo();
    }
    compoundInfo() {
        // let total = parseInt(intialCapital);
        let total = this.intialInvestment;
        let ransom;
        for (let i = 0; i < this.lengthOfTime; i++) {
            // if (i > 0){
                this.intialInvestment = parseInt(this.intialInvestment + monthlyContribution)
            // }
            console.log("--------------1--------------");
            console.log(this.intialInvestment);
            console.log(this.lengthOfTime);
            console.log(this.interestRate);
            console.log(this.monthlyContribution);
            console.log(total, "Total");
            console.log('-randson', ransom);

        
            total += this.intialInvestment * (this.interestRate);
            console.log(this.intialInvestment, "Intial");
            // ransom = this.intialInvestment * (this.interestRate - 1);
            total = this.intialInvestment + this.monthlyContribution;
            

            const randomLi = document.createElement('li');
            randomLi.classList = "randomLi";
            total = Math.round(total * 100)/ 100;

            randomLi.textContent = `${this.intialInvestment}`

            interestUl.appendChild(randomLi);


            console.log("--------------2--------------");
            console.log(this.intialInvestment);
            console.log(this.lengthOfTime);
            console.log(this.interestRate);
            console.log(this.monthlyContribution);
            console.log(total, "Total");
            console.log('-randson', ransom);

            

        }
        return this.intialInvestment;
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


    // p = new calculator(intialCapital, timeInYears, interestRate, monthlyContribution);
    p = new calculator(5000, 5, 5, 75);

    p.compoundInterestCalculator;
    // console.log(intialCapital, timeInYears, interestRate);
}


export {calculator, cheerio}



// (Intial Investment + (MonthlyContribution * 12)) interest * years 