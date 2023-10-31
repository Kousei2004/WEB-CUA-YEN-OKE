function validate(){
    var e =document.getElementById("emai").value;
    var n = document.getElementById("number").value;
    if(n == ""){
        alert("Please enter your email you used!");
        return false;
    }
    if(p == ""){
        alert("Please enter your number phone you used!");
        return false;
    }
    return true;
    }