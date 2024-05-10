const background = document.querySelector(".main-header__background");
const result = document.querySelector("#result");

background.addEventListener("click", (event) => {
    const target = event.target;

   
    if (!target.classList.contains('main-header__button')) {
        return; 
    }

    const value = target.innerText;

    switch (value) {
        case "C":
            result.innerText = "";
            break;

        case "=":
            result.innerText = eval(result.innerText);
            break;

        default:
            result.innerText += value;
    }
});
