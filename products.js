const products = [
  {
    Id: "1",
    Title: "Lanseta Baracuda CatfishFighter ",
    Price: "99 lei",
    Image: "imagini/produse/lanseta-Baracuda-CatfishFighter.jpg",
    Description: "Lanseta Baracuda Catfish Figther este o lanseta din amestec de fibra de carbon si fibra de sticla, ceea ce ii confera un grad de rezistenta ridicat atunci cand pescuiti somnul sau alti pesti de talie mare din barca sau de pe mal.",
    Characteristics: "Lungime: 2.70m; Putere: 50-150g; Numar tronsoane: 2; Lungime transport: 142cm; Greutate: 373g; Inele: 6; Blank: compozit; Maner: EVA",
  },

  {
    Id: "2",
    Title: "Lanseta Comanche Spin Baracuda",
    Price: "124 lei",
    Image: "imagini/produse/lanseta-comanche-spin-baracuda-.jpg",
    Description: "Lanseta pentru spinning, din mixtură de carbon, cu două variante de lungime (2,4m și respectiv 2,7m), din gama low cost.",
    Characteristics: "Lungime: 2,4 m; Actiune: A: 30-60g; Lungime stransa: 124cm; Greutate: 218g; Tronsoane: 2; Inele 9; Material: mix carbon 24T+F.S.",
  },

  {
    Id: "3",
    Title: "Lanseta Travel Spin Baracuda",
    Price: "149 lei",
    Image: "imagini/produse/lanseta-travel-spin-baracuda-fibra-de-carbon-pentru-spinning-stationar.jpg",
    Description: "Lansetele fibra de carbon Baracuda Travel Spin sunt lansete din carbon H.Q. în două variante de lungime, destinate exclusiv pescarilor care doresc lansete de dimensiuni foarte reduse, care pot fi transportate în orice bagaj, în orice excursie.",
    Characteristics: "Lungime: 2.40m; Actiune: A: 10-40g; Lungime stransa: 41cm; Greutate: 160g; Tronsoane: 9+maner ; Inele: 9 ; Material: carbon 30T<95% ",
  },

  {
    Id: "4",
    Title: "Lanseta Vow Baracuda Spin Light",
    Price: "223 lei",
    Image: "imagini/produse/lanseta-vow-baracuda-18m-21m-.jpg",
    Description:
      "Lanseta Vow Baracuda in 2 variante de lungime 1.8m si 2.1m foarte usoara recomandate in mod special pentru rapitorii de talie mica clean pastrav atunci cand se utilizeaza momeli foarte usoare.",
    Characteristics:
      "Lungime: 1,8 m; Actiune: A: 2-7g.; Lungime stransa: 95cm; Greutate: 93g; Tronsoane: 2; Inele 7; Material: carbon 30T<99% ",
  },

  {
    Id: "5",
    Title: "Mulineta Haidon Kosumai MC2000",
    Price: "69 lei",
    Image: "imagini/produse/haidon-kosumai-mc2000.jpg",
    Description: "Mulinetă compactă și robustă, destinată pescuitului la plută sau spinning-ului, cu un raport de recuperare mare, echilibrată computerizat și cu frană micrometrică.",
    Characteristics: "Capacitate: 0,18mm/200m; Raport recuperare: 5.5:1; 6 rulmenti; Greutate: 220g; Tambur: Al; Mulinetă compactă și robustă",
  },

  {
    Id: "6",
    Title: "JM3000 Mulineta Spinning Stationar",
    Price: "55 lei",
    Image: "imagini/produse/jm3000-mulineta-spinning-stationar.jpg",
    Description: "Este o mulineta importata din firma Baracuda, dar care nu poarta acest brand.",
    Characteristics: "Capacitate: 0,25mm/200m; Raport recuperare: 5.5:1; 8 rulmenti; Greutate: 241g; Tambur: Grf. metaliz.",
  },

  {
    Id: "7",
    Title: "Mulineta Vox 1000 ultralight",
    Price: "119 lei",
    Image: "imagini/produse/mulieneta-vox-1000-pescuit-rapitor-ultralight.jpg",
    Description: "Mulineta Baracuda Vox 1000 pentru bolognesa/spinning usor este o mulineta de talie mică, cu tambur metalic și frână micrometrică frontală, destinata pescuitului la bolognesă sau la spinning ușor.",
    Characteristics: "Capacitate: 0,205mm/130m ; Raport recuperare: 5.2:1; 8 rulmenti; Greutate: 197g; Variante: Al.+Grf.",
  },

  {
    Id: "8",
    Title: "Mulineta Spinning-Baitcasting",
    Price: "79 lei",
    Image: "imagini/produse/mulineta-spinning-baitcasting-beihaichen-.jpg",
    Description: "Mulinetă baitcasting ușoară și fiabilă, având 9 rulmenți și tambur adânc de capacitate mare. Este prevăzută cu frână mecanică și magnetică și sistem de așezare a firului pe tambur de mare precizie.",
    Characteristics: "Capacitate: 0,30mm/100m ; Raport recuperare: 7.2:1; 9 rulmenti; Greutate: 238g; Variante: Al.",
  },

  {
    Id: "9",
    Title: "Fir TEXTIL 250m Aqua Crocodile",
    Price: "59 lei",
    Image: "imagini/produse/fir-textil-250m-aqua-crocodile-som.jpg",
    Description: "Fir textil Baracuda Aqua Crocodile ( Rolă de 250m) este un fir textil fluo, multifilament, alcătuit din fibre împletite de culoare galben-fluorescent, având rezistență deosebită la tracțiune și abraziune, cu vizibilitate mare înafara apei.",
    Characteristics: "Diametru: 0,40mm/ 39kg; Multifilament ",
  },

  {
    Id: "10",
    Title: "Fir Textil 4x Power Baracuda",
    Price: "35 lei",
    Image: "imagini/produse/fir-textil-4x-power-baracuda-camuflaj.jpg",
    Description: "Fir textil Baracuda 4X Power 100m este un fir textil produs in Japonia, compus din 4 fire împletite, de culoare verde ce asigură un bun camuflaj în apă, având totodată o rezistenţă extraordinară la nod şi în coloană.",
    Characteristics: "Diametru: 0,20mm/ 12,5kg; Fir textil",
  },

  {
    Id: "11",
    Title: "Fir Textil Chameleon 150m",
    Price: "39 lei",
    Image: "imagini/produse/fir-textil-chameleon-150m-.jpg",
    Description: "Fir textil Baracuda Chameleon 150m este un  fir textil produs in Japonia, compus din 4 fire împletite, rezultând o secțiune perfect circulară. Este acoperit cu un strat fin de silicon care favorizează aruncările lungi și lipsa abraziunii.",
    Characteristics: "Diametru: 0,16mm/ 9,2kg; Fir textil",
  },

  {
    Id: "12",
    Title: "Nylon Competition 1000m",
    Price: "119 lei",
    Image: "imagini/produse/nylon-monofilament-competition-1000-m.jpg",
    Description: "Monofilament japonez specializat pentru pescuitul la crap/somn, recomandat pentru competitii. Culoarea este “brown camo”, adica o multitudine de tonalitati de maro, ultimul trend în domeniu.",
    Characteristics: "Diametru: 0,25mm/ 12kg; monofilament",
  },

  {
    Id: "13",
    Title: "Twister LW 005 baracuda 6.5cm",
    Price: "21 lei",
    Image: "imagini/produse/twister-lw-005-baracuda-65cm-5buc.jpg",
    Description: "Twistere Baracuda LW 005",
    Characteristics: "Dimensiune: 6.5cm; 5 buc./set",
  },

  {
    Id: "14",
    Title: "Set 12 Momeli Biban Clean Pastrav",
    Price: "13 lei",
    Image: "imagini/produse/set-12-momeli-biban-clean-pastrav-5cm.jpg",
    Description: "Momeli pentru pescuitul la Biban Clean Pastrav .",
    Characteristics: "Dimensiune: 5cm; 12 buc./set",
  },

  {
    Id: "15",
    Title: "Set Mini-Spoon-1090,2,2g/ 3cm",
    Price: "11 lei",
    Image: "imagini/produse/set-5-mini-spoon-1090-22g-3cm-pastrav-clean-biban-rosioara.jpg",
    Description: "Lingurite Mini Spoon pentru la Pastrav Clean Biban Rosioara etc.",
    Characteristics: "Dimensiune: 5cm; 5 buc./set",
  },

  {
    Id: "16",
    Title: "Trendex Vedado Blade Pastrav",
    Price: "19 lei",
    Image: "imagini/produse/momeala-trendex-vedado-blade-pentru-pescuit-la-pastrav-.jpg",
    Description: "Momeală ideală pentru pescuitul la păstrăv, fiind o combinație între o mini-linguriță și un mini spinner bait sistem, cu un ac foarte ascuțit în care se poate atașa un mini-twister sau un mini-shad.",
    Characteristics: "Greutate: 2,5g; 2 buc./set",
  },

  {
    Id: "17",
    Title: "Vobler Dancer 30mm",
    Price: "8 lei",
    Image: "imagini/produse/vobler-dancer-30mm.jpg",
    Description: "Momeală ideală pentru pescuitul la păstrăv, biban si salau.",
    Characteristics: "Floating; Greutate: 1,5g; 4 buc./set; Dimensiune: 30mm",
  },

  {
    Id: "18",
    Title: "Voblere Baracuda Deluxe 9155A",
    Price: "37 lei",
    Image: "imagini/produse/voblere-baracuda-deluxe-9155a-125-mm.jpg",
    Description: "Voblere Baracuda Deluxe 9155A 125 mm",
    Characteristics: "Greutate: 34,5g; Dimensiune: 125mm; Sinking",
  },

  {
    Id: "19",
    Title: "Vobler Baracuda Deluxe Maxi 9105",
    Price: "18 lei",
    Image: "imagini/produse/voblere-baracuda-deluxe-maxi-9105.jpg",
    Description: "Momeală ideală pentru pescuitul la păstrăv",
    Characteristics: "Greutate: 18g; Dimensiune: 75mm; Sinking",
  },

  {
    Id: "20",
    Title: "Voblere Baracuda Foozy floating",
    Price: "18 lei",
    Image: "imagini/produse/voblere-baracuda-foozy-120mm-floating.jpg",
    Description: "Voblerele floating sunt recomandate pentru pescuitul in ape cu multe structuri la suprafata ( ex: la stiuca)",
    Characteristics: "Greutate: 22g; Dimensiune: 120mm; Floating",
  },

  {
    Id: "21",
    Title: "Set 10 Jiguri Baracuda Spinning",
    Price: "15 lei",
    Image: "imagini/produse/set-10-jiguri-baracuda-spinning-rapitor-.jpg",
    Description: "Gramaje: 1,75g/ 2,5g/ 3,5g/ 5g/ 7,5g/ 10,5g/ 14g",
    Characteristics: "Greutate: 1,75; 10 buc./set",
  },

  {
    Id: "22",
    Title: "Sistem aditional (1x7) cu 2 ancore",
    Price: "11 lei",
    Image: "imagini/produse/sistem-aditional-1x7-cu-2-ancore-pentru-twister.jpg",
    Description: "Sistem adițional (1x7) cu două ancore pt. pescuit cu twister",
    Characteristics: "Lungime: 9 cm; max. 15 kg; dotat cu ancore Mustad #2; 1 buc./blister",
  },

  {
    Id: "23",
    Title: "Sistem shad spirala cu 2 ancore Behr",
    Price: "8 lei",
    Image: "imagini/produse/sistem-de-prindere-shad-in-spirala-cu-2-ancore-behr.jpg",
    Description: "Sistem prindere Shad cu 2 ancore",
    Characteristics: "Dotat cu ancore Mustad #2",
  },

  {
    Id: "24",
    Title: "Sistem aditional (7x7) cu o ancora",
    Price: "12 lei",
    Image: "imagini/produse/sistem-aditional-7x7-cu-o-ancora-pentru-twister.jpg",
    Description: "Sistem adițional (7x7) cu o ancoră pentru pescuit cu twister",
    Characteristics: "Lungime: 5,5 cm; max. 12 kg; dotat cu ancore Mustad #6; 3 buc./blister",
  },

  {
    Id: "25",
    Title: "Set 5 Jiguri Cheburashka Plumb",
    Price: "8 lei",
    Image: "imagini/produse/set-5-jiguri-mobile-buc-cheburashka.jpg",
    Description: "Cheburashka ofera o mobiletate mare de miscare nalucii si sunt perfecte  pescuitului la biban, pastrav, salau sau stiuca. Plumb care se adauga la carligele simple sau la cele offset pentru a le transforma in jig",
    Characteristics: "Greutate: 3g,5g,7g,10g; blister; 5 buc./set",
  },

  {
    Id: "26",
    Title: "Set 2 strune Behr NLC 1x19 30cm",
    Price: "8 lei",
    Image: "imagini/produse/set-2-strune-behr-kevlar-ultra-x-30cm12kg.jpg",
    Description: "Pentru pescuitul la spinning rapitor stiuca avat biban clean.",
    Characteristics: "Rezistenta: 8kg ; Dimensiune: 30cm",
  },

  {
    Id: "27",
    Title: "Set 5 legaturi T pt. monturi spinning",
    Price: "5 lei",
    Image: "imagini/produse/set-5-legaturi-t-pt-monturi-spinning.jpg",
    Description: "Monturi spinning/rapitor.",
    Characteristics: "Set 5 legaturi",
  },

  {
    Id: "28",
    Title: "Sistem Multirig cu 3/5 brate Behr",
    Price: "25 lei",
    Image: "imagini/produse/sistem-multiring-cu-3-sau-5.jpg",
    Description: "Sistem multirig pentru utilizarea mai multor Shaduri deodatata. Create in Germania de catre cei de la BEHR acest sistem creste sansa de reusita atunci cand se pescuieste la stiuca biban avat sau alt rapitor. ",
    Characteristics: "Variante pentru 3 sau 5 shaduri. Varianta se va comunica in momentul in care clientul v-a fi contactat pentru confirmarea livrarii. ",
  },
];

$(document).ready(function () {
  const id = parseInt(window.location.search.replace("?id=", ""));
  const product = products[id - 1];
  if (product !== undefined) {
  $("#prods").find(".h2Products").text(product.Title);
  $("#prods").find(".imgProducts").attr("src", product.Image);
  $("#prods").find(".priceProducts").text(product.Price);
  $("#prods").find(".infoProducts").text(product.Description);
  $("#prods").find(".infoCharacteristics").text(product.Characteristics);
}
});


