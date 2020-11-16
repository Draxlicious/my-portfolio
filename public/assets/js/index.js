let contactForm = document.querySelector(".contact-form") 

contactForm.addEventListener("click", function(e){
    e.preventDefault();

    let nameInput = document.querySelector(".contact-form input[name]").value
    let emailInput = document.querySelector(".contact-form input[name=email]").value
    let textAreaInput = document.querySelector(".contact-form textarea").value
    let errorMessage = document.querySelector(".error_message")

    if (nameInput === "" || nameInput === "" || textAreaInput === "" ) {
        errorMessage.innerHTML = "Udfyld venligst alle felter"
    }else{
        if(nameInput.length < 3){
            errorMessage.innerHTML = "Name must be atleast 3 characters"
        }else{
                var atpos = emailInput.indexOf("@");
                var dotpos = emailInput.lastIndexOf(".");
                if( atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= emailInput.length){
                    errorMessage.innerHTML = "Brug en gyldig email"
            }else{
                errorMessage.classList.add("contact_confirmed")
                errorMessage.innerHTML = nameInput + ' er regristeret med ' + emailInput;
            }
        }
    }
})