const error = (function() {
    const variable = "test";

    const show = function(error) {
        const container = document.querySelector(".container");
        const element = document.createElement("div");

        element.textContent = error;
        element.style = "color: red; border: 1px solid red;"
                        + "padding: 1em; border-radius: 1em;";
        container.appendChild(element);
    }
    
    return {
        show,
        variable
    }
})()
