function validate(){
    var c =document.getElementById("code").value;
    if(c == ""){
        alert("Please enter the confirmation code!");
        return false;
    }
    return true;
    }