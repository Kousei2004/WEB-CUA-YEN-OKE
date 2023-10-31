function validate(){
    var a =document.getElementById("account").value;
    var p = document.getElementById("pass").value;
    if(a == ""){
        alert("Hãy nhập tài khoản của bạn!");
        return false;
    }
    if(a != "20224013"){
        alert("Tài khoản không tồn tại!");
        return false;
    }
    if(p == ""){
        alert("Hãy nhập mật khẩu của bạn!");
        return false;
    }
    if(p != "123456"){
        alert("Sai mật khẩu!");
        return false;
    }
    return true;
}
