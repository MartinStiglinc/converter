/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound 
*/

const inputEL = document.getElementById("input-el")
const lenghtEL = document.getElementById("lenght-el")
const volumeEL = document.getElementById("volume-el")
const massEL = document.getElementById("mass-el")
const convertBtn = document.getElementById("convert-btn")

function convert(num, koef, round){
    let result = []
    result[0] = (num*koef).toFixed(round)
    result[1] = (num/koef).toFixed(round)

    return result
}

convertBtn.addEventListener("click", function(){

    let inputNumber = inputEL.value

    let lenght = convert(inputNumber,3.281,3)
    let volume = convert(inputNumber,0.264,3)
    let mass = convert(inputNumber,2.204,3)

    if (inputNumber < 1) {
        lenghtEL.textContent = `Enter number greater then ZERO`
        volumeEL.textContent = `Enter number greater then ZERO`
        massEL.textContent = `Enter number greater then ZERO`
    } else if (inputNumber > 1) {
        lenghtEL.textContent = `${inputNumber} meters = ${lenght[0]} feets | ${inputNumber} feets = ${lenght[1]} meters`
        volumeEL.textContent = `${inputNumber} liters = ${volume[0]} gallons | ${inputNumber} gallons = ${volume[1]} liters`
        massEL.textContent = `${inputNumber} kilograms = ${mass[0]} pounds | ${inputNumber} pounds = ${mass[1]} kilograms`
    } else {
        lenghtEL.textContent = `${inputNumber} meter = ${lenght[0]} feets | ${inputNumber} feet = ${lenght[1]} meter`
        volumeEL.textContent = `${inputNumber} liter = ${volume[0]} gallon | ${inputNumber} gallon = ${volume[1]} liters`
        massEL.textContent = `${inputNumber} kilogram = ${mass[0]} pounds | ${inputNumber} pound = ${mass[1]} kilogram`
    }

})




