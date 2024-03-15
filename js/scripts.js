
// 로그인
function signIn() {
    // pollmake.html의 창아이디를 signIn로 설정하고 가로 500, 세로 300인 창을 열기.
    window.open("signIn.html", "signIn", "width=500,height=450,top=300,left=400");
}

// 로그인 버튼 클릭
function signInSubmit() {
    var emailAddress = document.querySelector("#emailAddress").value;
    var password = document.querySelector("#password").value;

    var info = {
        email: emailAddress, 
        password: password
    };

    // localStorage에서 회원가입 되어 있는 userInfo이름의 data 얻기.
    var userInfo = localStorage.getItem("userInfo");

    if (userInfo) {
        var uInfo = JSON.parse(userInfo);
        var userInfoEmail = uInfo.email; // 이메일
        var userInfoPassWord = uInfo.password; // 비밀번호

        if (emailAddress == userInfoEmail && password == userInfoPassWord) {
            console.log("123")
            alert("로그인 성공!!!");
            console.log("1234")
            
             document.querySelector("#liSignOut").style.display = "block";
             document.querySelector("#liMyPage").style.display = "block";

            // opener.document.location.reload(); // 부모창 새로고침.
            // window.close();

          } else {
            alert("아이디 또는 비밀번호 확인!!!");
          }
    }
}

// 회원가입
function signUp() {
    // pollmake.html의 창아이디를 signUp로 설정하고 가로 500, 세로 300인 창을 열기.
    window.open("signUp.html", "signUp", "width=500,height=650,top=300,left=400");

}

// 회원가입 버튼 클릭
function signUpSubmit() {
    console.log("hihi");

    var userName = document.querySelector("#userName").value;
    var phoneNumber = document.querySelector("#phoneNumber").value;
    var emailAddress = document.querySelector("#emailAddress").value;
    var password = document.querySelector("#password").value;
    var message = document.querySelector("#message").value;

    var info = {
        name: userName,
        phone: phoneNumber,
        email: emailAddress, 
        password: password,
        message: message
    };

    var info_json = JSON.stringify(info);   // JSON객체를 문자열 변환.
    localStorage.setItem("userInfo", info_json); // localStorage에 넣기.

    alert("회원가입이 완료되었습니다.");
    // opener.document.location.reload(); // 부모창 새로고침.
    // self.close();
  }
  