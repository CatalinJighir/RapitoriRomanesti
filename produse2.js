$(document).ready(function () {
    let htmlProduse = "";
  
    for (i = 0; i < produse.length; i++) {
      htmlProduse +="<div class='col-sm-12 col-md-6 col-lg-4 col-xl-3 '>" +
      "<div class='card'>" +
        "<div class='card-body text-center'>" +
          "<a href =  'produse.html?id="+ produse[i].Id +" '    class='comanche'>" +
            "<img src=   '  " + produse[i].Image + "  '      class='mb3' alt=''width='70%'/>" +
          "</a>" +
          "<h6 class='card-title mb-1'> " + produse[i].Title  + " </h6> " +
          "<h4 class='card-text price'><b> "  + produse[i].Price + "lei </b></h4>" +
          "<a href='' class='link-dark'> <i class='bi bi-bag h4 add-cart'></i></a>" +
          "</div></div></div>" ;
    }
  
    $("#product-list").html(htmlProduse);
  });