$(document).ready(function() {
    $(".loginButton").on("click", function(){
        $.post(
            "/auth",
            {
                username: $(".useremail").val(),
                password: $(".userpw").val()
            },
            (response)=>{
                console.log(response);
                if(response.login){
                    sessionStorage.setItem("username", response.user.email);
                    sessionStorage.setItem("password", response.user.password);
                    sessionStorage.setItem("interest", response.user.interest);
                    var lastIndex = window.location.href.lastIndexOf("/");
                    window.location.replace(
                      window.location.href.substring(0, lastIndex) + "/profile"
                    );
                }
                else{
                    alert(response.msg);
                }
            }
        )

    });

});