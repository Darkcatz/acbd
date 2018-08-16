function login() {
    
    var food = window.prompt("Please Enter the password:");
    if (food == null || food == "") {
        window.close()
    } 
    else if(food == "password"){
        alert("Ur ALL SET!");
    }
    else {
        window.close()
    }
    
}

function guess() {
    var c = window.prompt("XD amazing right? I looked up how to do this. Soooo, just enter ur guess")
    var txt;
    if (c == null || c == ""){
        txt = "fine be that way but you wont know how to get to ur present XD press the button again -.-";
    }
    else {
        txt = "So u think that I got you " + c + ". Lets see if ur correct. The password is intel-core-ben-wong" 
    }
    document.getElementById("text").innerHTML = txt;
    
    
}

login()



