let output = document.querySelector("body")
    output.innerHTML += `<p id="output"></p>`

function greaterThan() {
    let age = document.querySelector("#input").value
    let output = document.querySelector("#output")

    if(age >= 18) {
        output.innerHTML = "Du kannst Shisha rauchen"
        console.log(true);
    } else {
        output.innerHTML = "Du darfst noch nicht Shisha rauchen"
        console.log(false);
        event.preventDefault()
    }
}