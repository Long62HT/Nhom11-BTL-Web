function signup(e) {
  // Huỷ bỏ event nếu nó có thể huỷ mà không dừng sự lan rộng(propagation) của event tới phần khác.
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
  // User Nhận giá trị của mục lưu trữ cục bộ là data và ghi vào bảng điều khiển
  var user = localStorage.getItem("data");
  console.log(user);
  //  hàm này có thể chuyển đổi các giá trị của đối tượng trước khi chúng được trả về khi ta chuyển vào thì ta phải chuyển về để sử dụng
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
    } 
    else if(
      email=="tranvankhanh2812002@gmail.com" &&
      password=="123456"
    ) {
      alert("dang nhap thanh cong");
        window.location.href="http://127.0.0.1:5503/admin/admin-user.html"
    }
    else {
      alert("dang nhap that bai");
    }
  }
