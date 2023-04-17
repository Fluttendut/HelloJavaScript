
function sayHello() {

    document.querySelector("h3").textContent = "Hej" + document.querySelector("input").value;
    //Anvend querySelector til at få fat i h3-elementet og igen querySelector til at få fat i værdien fra input-elementet:
}

document.querySelector("button").addEventListener("click", sayHello);
//Knyt et click-event til button-elementet. På “click” kaldes funktionen sayHello:
