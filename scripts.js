const API_URL = "https://api.exchangerate-api.com/v4/latest/"

const form = document.getElementById("converter-form")
const fromCurrency = document.getElementById("fromCurrency")
const toCurrency = document.getElementById("toCurrency")
const amount = document.getElementById("amount")
const convertedAmount = document.getElementById("convertedAmount")
const loading = document.querySelector(".loading")
const result = document.querySelector(".result")
const error = document.querySelector(".error")

const convertMoney = async () => {

    loading.style.display = "block"

    try {

        const response = await fetch(API_URL + fromCurrency.value)
        const data = await response.json()
        const rate = data.rates[toCurrency.value]
        const convertedRate = (amount.value * rate).toFixed(2)
        convertedAmount.value = convertedRate
        
        
    } catch (error) {
        alert("erro")
    }

    loading.style.display = "none"
}

form = addEventListener("submit", (event) => {
    event.preventDefault()
    convertMoney()
})

