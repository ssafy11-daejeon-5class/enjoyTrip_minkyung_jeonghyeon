

// 로그인
function signIn() {
    // pollmake.html의 창아이디를 poll로 설정하고 가로 500, 세로 300인 창을 열기.
    window.open("signIn.html", "poll", "width=500,height=450,top=300,left=400");


}

// 회원가입
function signUp() {
    // pollmake.html의 창아이디를 poll로 설정하고 가로 500, 세로 300인 창을 열기.
    window.open("signUp.html", "poll", "width=500,height=650,top=300,left=400");
}

// 회원가입 버튼 클릭
function signUpSubmit() {
    console.log("hihi");

    var info = {
        name: userName,
        phone: phoneNumber,
        email: emailAddress, 
        message: message
    };

    var info_json = JSON.stringify(info);   // JSON객체를 문자열 변환.
    localStorage.setItem("userInfo", info_json); // localStorage에 넣기.
    alert("회원가입이 완료되었습니다.");
    opener.document.location.reload(); // 부모창 새로고침.
    self.close();
  }
  