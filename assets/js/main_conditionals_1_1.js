function checkAge() {
    let age = document.querySelector("#ageInput").value
    let output = document.querySelector("#message")
    if(age < 18) {
        output.innerHTML = "Du bist Minderjährig"
        console.log(true);
    } else {
        output.innerHTML = "Du bist Volljährig"
        console.log(false);
    }
}