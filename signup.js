function validate(){
    var a =document.getElementById("account").value;
    var p = document.getElementById("pass").value;
    var e =document.getElementById("email").value;
    var r = document.getElementById("repass").value;
    
    if(e == ""){
        alert("Vui lòng nhập email của bạn!");
        return false;
    }
    if(p == ""){
        alert("Vui lòng nhập mật khẩu");
        return false;
    }if( p.length < 6 ){
        alert("Mật khẩu quá ngắn");
        return false;
    }
    if(a == ""){
        alert("Vui lòng nhập tên tài khoản!");
        return false;
    }if(r == ""){
        alert("Vui lòng nhập lại mật khẩu!");
        return false;
    }if(r != p){
        alert("Mật khẩu không giống nhau!");
        return false;    
    return true;
}
}