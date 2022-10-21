const progress = document.querySelector(".progress-done")
const input = document.querySelector(".input")
const maxInput = document.querySelector(".maxInput")
let finalValue = 0
let max = 0


function changewidth() {
    if (max > 0 && finalValue > max) {
        alert(Error)
        
    }
    else {
        progress.style.width = `${(finalValue / max) * 100}%`
    }
}

input.addEventListener("keyup", function () {
    finalValue = parseInt(input.value, 10)
    changewidth()
})
maxInput.addEventListener("keyup", function () {
    max = parseInt(maxInput.value, 10)
    changewidth()
})
