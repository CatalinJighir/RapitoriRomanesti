$(document).ready(function () {
    let htmlProducts = "";
  
    for (i = 0; i < products.length; i++) {
      htmlProducts +=
      "<div class='col-sm-12 col-md-6 col-lg-4 col-xl-3 product'>" +
        "<div class='card'>" +
          "<div class='card-body text-center product-box'>" +
            "<a href = 'products.html?id="+ products[i].Id +"'>" + "<img src='" + products[i].Image + "'class='mb3 product-img' alt='Poza-Produs'>" + "</a>" +
            "<h6 class='card-title mb-1 product-title'> " + products[i].Title + " </h6> " +
            "<h4 class='card-text price'><b> " + products[i].Price + "</b></h4>" +
            "<i class='bi bi-bag h4 add-cart'></i>" +
          "</div>" +
        "</div>" +
      "</div>";
    }
  
    $("#product-list").html(htmlProducts);

    // Add to cart
      let addCart = document.getElementsByClassName("add-cart");
        for (let i = 0; i < addCart.length; i++) {
           let button = addCart[i];
          button.addEventListener("click", addCartClicked);
        }
  });

