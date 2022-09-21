$(document).ready(function () {
  // Buton sa te intorci la prima pagina
  $(".acasa").click(function () {
    window.location.href = "index.html";
  });

  // Login - Autentificare (creare cont nou)
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

      // Aici sunt elementele care vor aparea in profil dupa autentificare

      localStorage.setItem("nume", nume.val());
      localStorage.setItem("prenume", prenume.val());
      localStorage.setItem("email", email.val());
      localStorage.setItem("phone", phone.val());
      localStorage.setItem("address", address.val());

      // Aici am ascuns elementele pentru autentificare
      prenume.val("");
      nume.val("");
      email.val("");
      pswd.val("");
      phone.val("");
      address.val("");

      alert("Utilizatorul a fost creat cu succes");
    }
  });

  // Sign in - Logare

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

  // Metoda afisare user sau autentificare + logout
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

  // Metoda log out

  $("#logout").click(function () {
    localStorage.clear();
    alert("Ati fost deconectat cu succes");
    window.location.href = "index.html";
  });

  // Profil - schimbare poza

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

  // Aici am facut legatura pentru a salva datele din interistrare in profil automat

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

  // Aici se salveaza date noi in profil si pot fi editabile

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
