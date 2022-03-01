// Textarea element, Array of analyzeBtns (ie buttons with class analyzeBtn), message element
let text = document.getElementById("myText");
let analyzeBtns = document.getElementsByClassName("analyzeBtn");
let message = document.getElementById("message");

// Characters Counter
text.addEventListener("keyup", (e) => {
    let value = e.target.value;
    let charactersCount = document.getElementById("charactersCount");
    let characters = value.split('');
    charactersCount.innerText = characters.length;
})

Array.from(analyzeBtns).forEach((element) => {
    element.addEventListener("click", (e) => {
        let btnId = e.target.id;
        // If btnId is toUpper, then covert the text to uppercase
        if(btnId === "toUpper"){
            text.value = text.value.toUpperCase();
            message.innerHTML = "<strong>Success!</strong> Converted to uppercase successfully.";
        }
        // If btnId is toLower, then covert the text to lowerCase
        if(btnId === "toLower"){
            text.value = text.value.toLowerCase();
            message.innerHTML = "<strong>Success!</strong> Converted to lowercase successfully.";
        }
        // If btnId is copyTxt, then copy the text to clipboard
        if(btnId === "copyTxt"){
            navigator.clipboard.writeText(text.value);
            message.innerHTML = "<strong>Success!</strong> Copied text to clipboard successfully.";
        }
        // If btnId is copyTxt, then copy the text to clipboard
        if(btnId === "clearTxt"){
            text.value = "";
            message.innerHTML = "<strong>Success!</strong> Cleared the text successfully.";
        }
        // If btnId is remExtraSpaces, then remove the extra spaces and leave one space
        if(btnId === "remExtraSpaces"){
            let newTxt = text.value.split(/[ ]+/);
            text.value = newTxt.join(" ");
            message.innerHTML = "<strong>Success!</strong> Extra spaces removed successfully.";
        }
        message.setAttribute("class", "alert alert-success");
        // Remove the class attribute and empty the innerHTML of the message element after 2 seconds.
        setTimeout(() => {
            message.setAttribute("class", "");
            message.removeAttribute("class");
            message.innerHTML = "";
        }, 2000);
    })
})