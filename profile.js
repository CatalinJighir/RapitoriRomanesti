$(document).ready(function () {
// Profile picture upload
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