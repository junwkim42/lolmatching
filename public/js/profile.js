$(document).ready(function() {
    $("#un").append(sessionStorage.getItem("username"));
    $("#pw").append(sessionStorage.getItem("password"));
    $("#uint").append(sessionStorage.getItem("interest"));
});