let bill = 0
let tipPercentage = 0
let numberOfPeople = 0
let buttonselectd
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


if(button-selectd !== null){
buttonSelectd.classList.remove("button-selectd")
   
}

let buttonSelectd = document.querySelector('#button-${value}')
buttonSelectd.classList.add("button-selectd")
tipPercentage = value / 100

let customTipInput = document.querySelector("custom-tip")

customTipInput.value = ""

calculate()



}

function receiveCustomTipPercentage(){

    let customTipInput = document.querySelector("custom-tip")

    tipPercentage = customTipInput.valueasNumber / 100
    calculate()


    if(buttonselectd !== null){
   

    buttonselectd.classList.remove("button-selctd")
    buttonselectd = null

}
}



function calculate() {

    if(bill !==0 && tipPercentage !== 0 && numberOfPeople !== 0){
        console.log("calcular")

        tipAmountStrong = document.querySelector(".amount strong")




        let tipAmountperson = (bill * tipPercentage) / numberOfPeople
        tipAmountStrong.innerText = '$${tipAmountPerson.tofixed(2)}'

        let totalstrong = document.querySelector(".total Strong")

        let total = (bill / numberOfPeople) + tipAmountPerson
        totalstrong.innerText = '$ ${total.tofixed(2)}'

} else {
    console.log("Ainda não é possível calcular")
}
}

function reset(){


    billInput.value = ""

    bill = 0
    numberOfPeopleInput.value = ""
   numberOfPeople = 0

 removeclassbuttonSelectd()
 document.querySelector("custom-tip").value = ""

tipPercentage = 0

document.querySelector(".amount strong").innerText = "$0.00"
document.querySelector(".total strong").innerText = "$0.00"

}

function removeclassbuttonSelectd(){

    if(button-selectd !== null){
        buttonSelectd.classList.remove("button-selectd")
           
        }
        

}