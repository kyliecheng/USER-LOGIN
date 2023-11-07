// USER LOGIN

// Button Event Listener
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  // INPUTS
  let password = document.getElementById("Password-in").value;
  let username = document.getElementById("Username-in").value;

  // LOGIN FORM
  if ((password = 1234)) {
    document.getElementById("output").innerHTML = "Login Sucessful";
  } else if ((username = admin)) {
    document.getElementById("output").innerHTML = "Login Sucessful";
  } else if (password > 1234) {
    document.getElementById("output").innerHTML = "Invalid Password";
  } else if (username > admin) {
    document.getElementById("output").innerHTML = "Invalid Username";
  }
}
