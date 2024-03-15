function signUp() {
    document.querySelector("#signUp").style.display = "block";
    document.querySelector("#signIn").style.display = "none";
    document.querySelector("#myPage").style.display = "none";
}

function signUpSubmit() {
    // alert("회원가입 성공!!!");
    // document.querySelector("#signUp").style.display = "none";

    var name = document.querySelector("#name").value;
    var email = document.querySelector("#email").value;
    var password = document.querySelector("#password").value;
    var phone = document.querySelector("#phone").value;
    var message = document.querySelector("#message").value; 

    // 입력 data를 이용하여 JSON객체 생성.
    var signUpInfo = {
        name: name,
        email: email,
        password: password,
        phone: phone, 
        message: message
    };

    var signUpInfo_json = JSON.stringify(signUpInfo); // JSON객체를 문자열 변환.

    localStorage.setItem("userInfo", signUpInfo_json); // localStorage에 넣기.
    console.log(signUpInfo_json);

    alert("회원가입 성공!!!");
    document.querySelector("#signUp").style.display = "none";

    // opener.document.location.reload(); // 부모창 새로고침.
    // self.close();
}

function login() {
    document.querySelector("#signIn").style.display = "block";
    document.querySelector("#signUp").style.display = "none";
    document.querySelector("#myPage").style.display = "none";
}

function loginSubmit() {
    var userInfo = localStorage.getItem("userInfo");

    if (userInfo) {
        // 회원가입 되어 있는 값
        var info = JSON.parse(userInfo);
        var email = info.email;
        var password = info.password;

        // 입력한 값
        var inputEmail = document.querySelector("#email").value;
        var inputPassword = document.querySelector("#password").value;

        console.log(email);
        console.log(inputEmail);
        console.log(password);
        console.log(inputPassword);
        // if (email == inputEmail && password == inputPassword) {
        
        alert("로그인 성공!!!");
        document.querySelector("#signIn").style.display = "none";

        document.querySelector("#liLogin").style.display = "none";
        document.querySelector("#liSignUp").style.display = "none";
        document.querySelector("#liLogOut").style.display = "block";
        document.querySelector("#liMypage").style.display = "block";

        // }
    }
}

function logout() {
    document.querySelector("#liLogin").style.display = "block";
    document.querySelector("#liSignUp").style.display = "block";
    document.querySelector("#liLogOut").style.display = "none";
    document.querySelector("#liMypage").style.display = "none";

    document.querySelector("#myPage").style.display = "none";
    document.querySelector("#signIn").style.display = "none";
    document.querySelector("#signUp").style.display = "none";
}

function mypage() {
    // document.querySelector("#myPage").style.display = "block";
    document.querySelector("#signIn").style.display = "none";
    document.querySelector("#signUp").style.display = "block";
}

function mypageSubmit() {
    // var info = localStorage.getItem("userInfo").value;

    var name = document.querySelector("#name").value;
    var email = document.querySelector("#email").value;
    var password = document.querySelector("#password").value;
    var phone = document.querySelector("#phone").value;
    var message = document.querySelector("#message").value; 

    // 입력 data를 이용하여 JSON객체 생성.
    var ModifiedInfo = {
        name: name,
        email: email,
        password: password,
        phone: phone, 
        message: message
    };

    var ModifiedInfo_json = JSON.stringify(ModifiedInfo); // JSON객체를 문자열 변환.

    localStorage.setItem("userInfo", ModifiedInfo_json); // localStorage에 넣기.
    console.log(ModifiedInfo_json);

    alert("회원정보 수정 성공!!!");
    document.querySelector("#myPage").style.display = "none";
}