function signup(e) {
    event.preventDefault();
    var arr = document.getElementsByTagName('input');
    var name =arr[0].value;
    var email  =arr[1].value;
    var passw =arr[2].value;
    var passw1 =arr[3].value;
    var username=document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    let data=[];
    var user = {
      username: username,
      email: email,
      password: password,
    };
    if (name=="" || email==""|| passw=="" || passw1=="" ){
      alert("Vui lòng điền đầy đủ thông tin")
    }
    else{
    data.push(user);
    var json = JSON.stringify(data);
    localStorage.setItem("data", json);
    alert("dang ky thanh cong");
    }
    
  }
  
  var user = localStorage.getItem("data");
  console.log(user);
  var data = JSON.parse(user);
  function login(e) {
    
    event.preventDefault();
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
   
    console.log(data);
    if (
      email == data[0].email &&
      password == data[0].password
    ) {
      alert("dang nhap thanh cong");
        window.location.href="http://127.0.0.1:5503/home.html"
    } else {
      alert("dang nhap that bai");
    }
  }
