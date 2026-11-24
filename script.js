
function login() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if (email == "admin@gmail.com" && password == "12345") {
        document.getElementById("msg").innerHTML =
            "Login Successful!";
    }
    else {
        document.getElementById("msg").innerHTML =
            "Invalid Email or Password!";
    }
}
