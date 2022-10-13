$(document).ready(function () {
 // Login - Autenticate (new account)
  const arrayUser = [];

  $(".authenticate").click(function () {
    let prenume = $("#prenume");
    let nume = $("#nume");
    let email = $("#email");
    let pswd = $("#pwd");
    let phone = $("#phone");
    let address = $("#address");

    if (
      prenume.val() == "" ||
      nume.val() == "" ||
      email.val() == "" ||
      pswd.val() == ""
    ) {
      alert("Completati campurile nume, prenume, email si parola");
    } else {
      arrayUser.push(prenume.val());
      arrayUser.push(nume.val());
      arrayUser.push(email.val());
      arrayUser.push(pswd.val());
      arrayUser.push(phone.val());
      arrayUser.push(address.val());

      // Here are the elements that will appear in the profile after authentication
      localStorage.setItem("nume", nume.val());
      localStorage.setItem("prenume", prenume.val());
      localStorage.setItem("email", email.val());
      localStorage.setItem("phone", phone.val());
      localStorage.setItem("address", address.val());

      // Here I have hidden the elements for authentication
      prenume.val("");
      nume.val("");
      email.val("");
      pswd.val("");
      phone.val("");
      address.val("");

      alert("Utilizatorul a fost creat cu succes");
    }
  });

  // Sign in
  $(".login").click(function () {
    let emailCheck = $("#emailCheck").val();
    let pwdCheck = $("#pwdCheck").val();
    if (emailCheck === arrayUser[2] && pwdCheck === arrayUser[3]) {
      alert("Datele de logare sunt corecte");
      localStorage.setItem("user", arrayUser);
      window.location.href = "index.html";
    } else {
      alert("Email sau Parola gresite");
    }
  });

  // User display method or authentication + logout
  let user = localStorage.getItem("user");

  if (user !== null) {
    $("#sign").hide();
    $("#pozaprofil1").hide();
    $("#logout").show();
    const splitUser = user.split(",");
    $("#displayUser").text(splitUser[0] + " " + splitUser[1]);
  } else {
    $("#sign").show();
    $("#logout").hide();
    $("#pozaprofil2").hide();
  }

  // Log out method
  $("#logout").click(function () {
    localStorage.clear();
    alert("Ati fost deconectat cu succes");
    window.location.href = "index.html";
  });
});
