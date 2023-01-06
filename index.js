//document.getElementById("count-el").innerText = 5

// let count = 5
// count = count + 1
// console.log(count)

// Initialize count as 0
// listen for clicks on increment button
// increment count variable when button is clicked
// change count-el in the html to reflect the new count

// 1. Grab the save-el paragraph and store it in a variable called saveEl
// 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
// 3. Render the variable in the saveEl using innerText
// NB: Make sure to not delete the existing content of the paragraph

// on save() > set count to 0

let countEl = document.getElementById("count-el")
let count = 0
let saveEl = document.getElementById("save-el")

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countDash = count + " - "
    saveEl.textContent += countDash
    count = 0
    countEl.textContent = count
}

