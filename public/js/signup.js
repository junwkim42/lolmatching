$(document).ready(function() {
    $(".signupButton").on("click", function() {
      $.post(
        "/user_reg",
        {
          username: $(".useremail").val(),
          password: $(".userpw").val(),
          intro: $(".userintro").val()
        },
        (response)=> {
          console.log(response);
          if (response.status) {
            sessionStorage.setItem("username", response.user.email);
            sessionStorage.setItem("password", response.user.password);
            sessionStorage.setItem("interest", response.user.interest);
            var lastIndex = window.location.href.lastIndexOf("/");
            window.location.replace(
              window.location.href.substring(0, lastIndex) + "/profile"
            );
          } else {
            alert(response.msg);
          }
        }
      );
    });

    document.getElementById("reguser").addEventListener("click", function (){
      document.getElementById("reguser").style.opacity = 1.0;
      document.getElementById("loginuser").style.opacity = 0.5;
    });
    
    document.getElementById("loginuser").addEventListener("click", function(){
      document.getElementById("loginuser").style.opacity = 1.0;
      document.getElementById("reguser").style.opacity = 0.5;
    });
  });