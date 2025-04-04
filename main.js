let bill = 0
let tipPercentage = 0
let numberOfPeople = 0
let CurrentPercentage = 0
//receber o valor da conta

let billInput = document.querySelector("#bill")
billInput.addEventListener("input", receiveBillvalue)

function receiveBillvalue(){
    bill = billInput.valueasNumber
    calculate()
}

//receber o número de pessoas

let numberOfPeopleInput = document.querySelector("#people")
numberOfPeopleInput.addEventListener("input, ")


function receitaNumberOfPeople(){

    numberOfPeople = numberOfPeopleInput.valueasNumber
    calculate()

}


receita receiveTipPercentage(value) {

let buttonSelectd = document.querySelector("")

}



function calculate() {

    if(bill !==0 && tipPercentage !== 0 && numberOfPeople !== 0){
        console.log("calcular")
} else {
    console.log("Ainda não é possível calcular")
}
}