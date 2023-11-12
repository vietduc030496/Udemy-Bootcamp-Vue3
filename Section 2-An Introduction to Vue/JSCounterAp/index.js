let count = 0

const countHeader = document.getElementById("count")
const countSubtractBtn = document.getElementById("subtract");
const countAddBtn = document.getElementById("add")


countHeader.innerText = count

countSubtractBtn.addEventListener("click", () => {
    --count
    countHeader.innerText = count
})

countAddBtn.addEventListener("click", () => {
    ++count
    countHeader.innerText = count
})