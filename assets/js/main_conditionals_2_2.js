
    let changeColor = document.querySelector("body")
    
    function sliderPush() {
        let value = document.querySelector("#slidebar").value   
        let output1 = document.querySelector(".healthConcern")
        let output2 = document.querySelector(".healthEffect")
        console.log(value);
        
        if(value > 0 && value <= 50) {
            output1.innerHTML = "Good"
            output2.innerHTML = "Little or no risk"
            changeColor.style.backgroundColor = ("green")
        } else if (value > 50 && value <= 100) {
            output1.innerHTML = "Moderate"
            output2.innerHTML = "Acceptable quality"
            changeColor.style.backgroundColor = ("yellow")
        } else {
            output1.innerHTML = "Unhealthy for sensitive groups"
            output2.innerHTML = "Generable publics not likely affected"
            changeColor.style.backgroundColor = ("orange")
        }
    }