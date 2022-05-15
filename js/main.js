var toggleBtnEl = document.querySelector(".toggle-lang")

var inputTxtEl = document.querySelector(".input")
var outputTxtEl = document.querySelector(".output")

var latinToKrill = Boolean(localStorage.getItem("latinToKrill"))
indicatorBtn()
renderInput(inputTxtEl.textContent)

function indicatorBtn() {
    latinToKrill = !latinToKrill
    localStorage.setItem('latinToKrill', latinToKrill)
    if (latinToKrill)
        toggleBtnEl.textContent = "Lotin -> Krill"
    else
        toggleBtnEl.textContent = "Krill -> Lotin"
}

function renderInput(inputValue) {
    let outputValue = latinToKrill ? toKrill(inputValue) : toLatin(inputValue)
    console.log(outputValue)
    outputTxtEl.textContent = outputValue
}
inputTxtEl.addEventListener("change", (e) => {
    renderInput(e.target.textContent)
})

inputTxtEl.addEventListener("keyup", (e) => {
    renderInput(e.target.textContent)
})

toggleBtnEl.addEventListener("click", (e) => {
    indicatorBtn()
    renderInput(inputTxtEl.textContent)
    console.log("Click")
})

outputTxtEl.addEventListener("click", (e) => {
    window.navigator.clipboard.writeText(e.target.textContent)
    e.target.classList.add("copy-success")
})