console.log("Display Single Food Page");

let containerElement = document.getElementById('container')

const getSingleVeggie = async () => {
    let data = await fetch("/veggies/:veggieName");
    data.json().then((parsedData) => {
        console.log(parsedData); // array of objects
        // map through and put in HTML
        // push each individual one,  or push an array of HTML 
        parsedData.forEach((veggie) => {
            // if not ready to eat- red text
            let pTag = document.createElement("p");
            pTag.textContent = veggie.veggieName;
            if (veggie.readyToEat !== true) {
                pTag.style.color = "red"
            } else {
                pTag.style.color = "green"
            }

            containerElement.appendChild(pTag);
        })
    })
}

getSingleVeggie()