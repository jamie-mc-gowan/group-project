function checkPassRegister()
    {
        var pass = $("#password");
        //Ensure the length of the password is at least 6
        if (pass.val().length >= 6)
        {
            var confirmPass = $("#confirmPassword");
            //Check if the two passwords match, alert user if not
            if (pass.val() != confirmPass.val())
            {
                alert("Passwords do not match!");
                confirmPass.css("background-color", "#ff3232");
                confirmPass.get(0).focus(); //Move focus to #confirmPassword
            }
            else
            {
                return true; //They matched, submit form
            }
        }
        else
        {
            //Password length is less than  6
            pass.css("background-color", "#ff3232");
            alert("Password should have a length of at least 6");
            pass.get(0).focus(); //Move focus to #password
        }
        return false; //Prevent form submission
    }

//TODO: Merge to two below functions using "Event/Trigger"
function resetColourPassword()
{
    //Reset background color
    $("#password").css("background-color", "inherit");
}

function resetColourConfirmPassword()
{
    //Reset background color
    $("#confirmPassword").css("background-color", "inherit");
}

function addToBasket() {
    var size = $("#size").val();
    //Ensure the user specified a size
    if(size == "default") {
        alert("Please choose a size");
    }
    
    //...... can't implement yet without PHP stuff.
}

/*
    Calculate the price of the items in the user's basket. Takes into consideration
    the individual unit price and quantity of each item. It the shows the result
    on screen.
*/
function calculateUnitPrice() {
    var total = 0.0; //will store the total price of all items in basket
    var basket = document.getElementById("basket_items");
    var items = basket.getElementsByClassName("item"); //pick each item
    for(var i = 0; i < items.length; i++) { //cycle through each item
        var price = items[i].getElementsByClassName("unit_price"); //get ref
        price = price[0].innerHTML; //get actual value
        price = parseFloat(price.substring(1)); //remove € and parse float
        
        var quantity = items[i].getElementsByClassName("unit_quantity");
        quantity = parseInt(quantity[0].innerHTML); //get value and convert to int
        
        var totalPriceRef = items[i].getElementsByClassName("unit_total_price")[0]; //reference to where the total price will be shown
        var totalPrice = quantity * price; //calculate price
        totalPriceRef.innerHTML = "€" + totalPrice; //show price
        
        total += totalPrice;
    }
    
    document.getElementById("total_price").innerHTML = "€" + total;
}


/*
    Removes the item from the users basket.
    NOTE that this is only visual, it doesn't actually effect the users basket,
    i.e. the items will reappear on reload.
    
    TODO: recalculate the total price upon removal of an item.
*/
function removeFromBasket(caller) {
    //Delete item from basket
    caller.parentElement.parentElement.innerHTML = "";
}