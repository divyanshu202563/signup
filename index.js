
// Attach the event listener to your form (replace '#yourFormId' with your actual form id)
document.querySelector("#create").addEventListener("submit", saveData);

function saveData(event) {
    event.preventDefault();

    let a = document.querySelector("#name");
    let b = document.querySelector("#username");
    let c = document.querySelector("#pass");
    let d = document.querySelector("#email");

    // Get the values from the input elements and there is condition ....           Eg.  nameValue is assigned the value of a by trimming the double quotation mark from both starting and back side .
    //  If no value is assigned to a means it is null in that case a alert will pop out saying to fill all the info.

    let nameValue = a ? a.value.trim():"" ;
    let usernameValue = b ? b.value.trim():"";
    let passValue = c ? c.value.trim():"" ;
    let emailValue = d ? d.value.trim():"" ;

    if (nameValue === "" || usernameValue === "" || passValue === "" || emailValue === "") {
        alert("PLEASE FILL EACH INFORMATION");
        return;
    }

    // Stores the data in local storage which can be extracted later.
    localStorage.setItem("userName", nameValue);
    localStorage.setItem("username", usernameValue);
    localStorage.setItem("password", passValue);
    localStorage.setItem("email", emailValue);

    alert("CLICK OK WHILE WE ARE REDIRECTING YOU TO HOME PAGE");

    setTimeout(function (){
        window.location.href = "https://vibeloophome.netlify.app/";
    }, 1000);
}



