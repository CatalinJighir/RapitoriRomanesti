$(document).ready(function () {
  // Return button first page
  $(".acasa").click(function () {
    window.location.href = "index.html";
  });

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

  // Profile - photo change localy
  const fn1 = $(function () {
    $("#fileupload").change(function (event) {
      let x = URL.createObjectURL(event.target.files[0]);
      $("#upload-img").attr("src", x);
      $("#pozaprofil2").attr("src", x);
      localStorage.setItem("pozaprofil2", x);
    });
  });

  $(function () {
    let poza = localStorage.getItem("pozaprofil2");
    if (poza !== null) {
      $("#pozaprofil2").attr("src", poza);
      $("#pozaprofil2").show();
      $("#upload-img").attr("src", poza);
      $("#upload-img").show();
    } else {
    }
  });

  // Here I made the connection to save the data from the registration to appear in the profile page
  $(function () {
    $("#nume1").val(localStorage.getItem("nume"));
    $("#prenume1").val(localStorage.getItem("prenume"));
    $("#email1").val(localStorage.getItem("email"));
    $("#telefon1").val(localStorage.getItem("phone"));
    $("#adresa1").val(localStorage.getItem("address"));
    $("#tara1").val(localStorage.getItem("tara"));
    $("#orasul1").val(localStorage.getItem("oras"));
    $("#codpostal1").val(localStorage.getItem("oras"));
  });

  // New profile data is saved here and can be edited in profile page
  $("#profilebutton").click(function () {
    let phone = $("#telefon1");
    let address = $("#adresa1");
    let tara = $("#tara1");
    let oras = $("#orasul1");
    let codpostal = $("#orasul1");
    localStorage.setItem("phone", phone.val());
    localStorage.setItem("address", address.val());
    localStorage.setItem("tara", tara.val());
    localStorage.setItem("oras", oras.val());
    localStorage.setItem("codpostal", codpostal.val());
    window.location.reload();
    fn1;
  });
});
