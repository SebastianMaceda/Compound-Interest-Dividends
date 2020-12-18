class calculator{
    constructor(intialInvestment, lengthOfTime, interestRate){
        this.intialInvestment = intialInvestment;
        this.lengthOfTime = lengthOfTime;
        this.interestRate = interestRate/ 100;
    }
    get compoundInterestCalculator(){
        return this.compoundInfo();
    }
    compoundInfo() {
        const interestUl = document.querySelector('.interestPerYear');
        let total = 0;
        for (let i = 0; i < this.lengthOfTime; i++) {
            this.intialInvestment += this.intialInvestment * this.interestRate;
            total = this.intialInvestment;


            const randomLi = document.createElement('li');
            randomLi.classList = "randomLi";
            total = Math.round(total * 100)/ 100;

            randomLi.textContent = `${total}`

            
            console.log(total);
            console.log(i);
            interestUl.appendChild(randomLi);


        }
        return this.intialInvestment;
    }
}

export {calculator}