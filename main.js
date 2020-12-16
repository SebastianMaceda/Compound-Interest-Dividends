const interestUl = document.querySelector('.interestPerYear');

class random{
    constructor(intialInvestment, lengthOfTime, interestRate){
        this.intialInvestment = intialInvestment;
        this.lengthOfTime = lengthOfTime;
        this.interestRate = interestRate/ 100;
    }
    get compoundInterestCalculator(){
        return this.compoundInfo();
    }
    compoundInfo() {
        let total = 0;
        for (let i = 0; i <= this.lengthOfTime; i++) {
            this.intialInvestment += this.intialInvestment * this.interestRate;
            total = this.intialInvestment;


            const randomLi = document.createElement('li');
            randomLi.classList = "randomLi";
            randomLi.textContent = `${total}`

            
            console.log(total);
            console.log(i);
            interestUl.appendChild(randomLi);


        }
        return this.intialInvestment;
    }
}

const p = new random(10, 5, 7);

p.compoundInterestCalculator;