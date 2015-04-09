function checkPassRegister() {
    var pass = $("#password");
    
    //Ensure the length of the password is at least 6
    if(pass.val().length >= 6) {
        var confirmPass = $("#confirmPassword");

        //Check if the two passwords match, alert user
        if(pass.val() != confirmPass.val()) {
            alert("Passwords do not match!");
            confirmPass.css("background-color", "#ff3232");
            
            confirmPass.get(0).focus(); //Move focus to #confirmPassword
        }
        else {
            return true; //They matched
        }
    }
    else {
        //Password length is less than  6
        pass.css("background-color", "#ff3232");
        alert("Password should have a length of at least 6");

        pass.get(0).focus(); //Move focus to #password
    }
    return false; //Prevent form submission
}


//TODO: Merge to two below functions using "Event/Trigger"
function resetColourPassword(event) {
    //Reset background color
    $("#password").css("background-color", "inherit");
}

function resetColourConfirmPassword(event) {
    //Reset background color
    $("#confirmPassword").css("background-color", "inherit");
}