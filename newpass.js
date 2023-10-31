function validate(){
    var n =document.getElementById("pass").value;
    var p = document.getElementById("pass1").value;
    if(n == ""){
        alert("Please enter your new password!");
        return false;
    }
    if(p == ""){
        alert("Please re-enter your password!");
        return false;
    }
    if(p.length < 6){
        alert("Password is too short!");
        return false
    }
    return true;
    }