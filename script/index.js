var data = ["Harry (User)", "Detektif Conan : Toru Amuro Selection (Buku)", "Aplikasi SPSS untuk Penelitian dan Riset Pasar (Buku)", "Gon 1 (Buku)", "Kolaborasi Macro Excel dan Access untuk Membuat Aplikasi Penjualan (Buku)", "Naruto 72 (Buku)", "Noragami 20 (Buku)",
  "Atlas Binatang Paling Berbahaya Sedunia (Buku)", "Segala Sesuatu tentang Hewan Buas dan Ganas (Buku)", "Opredo Fugo & Stoples Mimpi (Buku)", "Hitler - Sosok Pria di Balik Monster (Buku)", "Shakai Kaizo - Seratus Tahun Reformasi Jepang (Buku)", "The New Seikatsu Kaizen (Buku)", "Kolaborasi Macro Excel dan Access untuk Membuat Aplikasi Penjualan (Buku)",
  "Aplikasi SPSS untuk Penelitian dan Riset Pasar (Buku)", "Penulisan Business Report Menggunakan Microsoft Word (Buku)", "Quarter Life Crisis (Buku)", "The Circle Blueprint (Buku)", "Kerja Kerja Kaya (Buku)", "City Lite: STARTING OVER (Buku)", "Le Mariage: Over the Rain(Collector's Edition) (Buku)", "A Poem I Wrote for You (A Poem with Your Name #2) (Buku)",
  "City Lite: Algoritme Rasa(Job Series #3) (Buku)", "Adaptive Parenting (Buku)", "Functional Food (Buku)", "Obat Malas Dosis Tinggi for Millenial Edition (Buku)", "Pemuda Hebat Penuh Manfaat (Buku)", "Obat Malas Dosis Tinggi (Buku)", "The Puzzles of Life (Buku)", "Why? People - Jean-Henri Fabre (Buku)", "Cookie Run Sweet Escape Adventure! – Fenomena Horor (Buku)",
  "Why? Veterinary Medicine (Buku)", "Basic Railway Photography (Buku)", "Food Photography Series (Buku)"];
var pageActive;

function changePage(id, id2) {
  var page = document.getElementById(id);
  if (this.pageActive == null) {
    this.pageActive = page;
    autocomplete(document.getElementById(id2));
  }
  else {
    this.pageActive.className = this.pageActive.className.replace("w3-show", "w3-hide");
    this.pageActive = page;
    this.pageActive.className = this.pageActive.className.replace("w3-hide", "w3-show");

    if (id2 == 'searchBarIndex') {
      this.data = ["Harry (User)", "Detektif Conan : Toru Amuro Selection (Buku)", "Aplikasi SPSS untuk Penelitian dan Riset Pasar (Buku)", "Gon 1 (Buku)", "Kolaborasi Macro Excel dan Access untuk Membuat Aplikasi Penjualan (Buku)", "Naruto 72 (Buku)", "Noragami 20 (Buku)",
        "Atlas Binatang Paling Berbahaya Sedunia (Buku)", "Segala Sesuatu tentang Hewan Buas dan Ganas (Buku)", "Opredo Fugo & Stoples Mimpi (Buku)", "Hitler - Sosok Pria di Balik Monster (Buku)", "Shakai Kaizo - Seratus Tahun Reformasi Jepang (Buku)", "The New Seikatsu Kaizen (Buku)", "Kolaborasi Macro Excel dan Access untuk Membuat Aplikasi Penjualan (Buku)",
        "Aplikasi SPSS untuk Penelitian dan Riset Pasar (Buku)", "Penulisan Business Report Menggunakan Microsoft Word (Buku)", "Quarter Life Crisis (Buku)", "The Circle Blueprint (Buku)", "Kerja Kerja Kaya (Buku)", "City Lite: STARTING OVER (Buku)", "Le Mariage: Over the Rain(Collector's Edition) (Buku)", "A Poem I Wrote for You (A Poem with Your Name #2) (Buku)",
        "City Lite: Algoritme Rasa(Job Series #3) (Buku)", "Adaptive Parenting (Buku)", "Functional Food (Buku)", "Obat Malas Dosis Tinggi for Millenial Edition (Buku)", "Pemuda Hebat Penuh Manfaat (Buku)", "Obat Malas Dosis Tinggi (Buku)", "The Puzzles of Life (Buku)", "Why? People - Jean-Henri Fabre (Buku)", "Cookie Run Sweet Escape Adventure! – Fenomena Horor (Buku)",
        "Why? Veterinary Medicine (Buku)", "Basic Railway Photography (Buku)", "Food Photography Series (Buku)"];
    }
    else if (id2 == 'searchBarBakalTerbit') {
      this.data = ["Detektif Conan : Toru Amuro Selection (Buku)", "Noragami 20 (Buku)"];
      autocomplete(document.getElementById(id2));
    }
    else if (id2 == 'searchBarTelahBeredar') {
      this.data = ["Aplikasi SPSS untuk Penelitian dan Riset Pasar (Buku)", "Kolaborasi Macro Excel dan Access untuk Membuat Aplikasi Penjualan (Buku)"];
      autocomplete(document.getElementById(id2));
    }
    else if (id2 == 'searchBarCetakUlang') {
      this.data = ["Gon 1 (Buku)", "Naruto 72 (Buku)"];
      autocomplete(document.getElementById(id2));
    }
    else if (id2 == 'searchBarKategoriAnak') {
      this.data = ["Atlas Binatang Paling Berbahaya Sedunia (Buku)", "Segala Sesuatu tentang Hewan Buas dan Ganas (Buku)", "Opredo Fugo & Stoples Mimpi(Buku)"];
      autocomplete(document.getElementById(id2));
    }
    else if (id2 == 'searchBarKategoriHumaniora') {
      this.data = ["Hitler - Sosok Pria di Balik Monster (Buku)", "The New Seikatsu Kaizen (Buku)", "Shakai Kaizo - Seratus Tahun Reformasi Jepang"];
      autocomplete(document.getElementById(id2));
    }
    else if (id2 == 'searchBarKategoriKomik') {
      this.data = ["Detektif Conan : Toru Amuro Selection (Buku)", "Noragami 20 (Buku)", "Naruto 72(Buku)", "Gon 1(Buku)"];
      autocomplete(document.getElementById(id2));
    }
    else if (id2 == 'searchBarKategoriKomputer') {
      this.data = ["Kolaborasi Macro Excel dan Access untuk Membuat Aplikasi Penjualan (Buku)", "Penulisan Business Report Menggunakan Microsoft Word (Buku)", "Aplikasi SPSS untuk Penelitian dan Riset Pasar (Buku)"];
      autocomplete(document.getElementById(id2));
    }
    else if (id2 == 'searchBarKategoriManajemen') {
      this.data = ["Quarter Life Crisis (Buku)", "The Circle Blueprint (Buku)", "Kerja Kerja Kaya(Buku)"];
      autocomplete(document.getElementById(id2));
    }
    else if (id2 == 'searchBarKategoriNovel') {
      this.data = ["City Lite: STARTING OVER (Buku)", "Le Mariage: Over the Rain(Collector's Edition) (Buku)", "A Poem I Wrote for You (A Poem with Your Name #2) (Buku)", "City Lite: Algoritme Rasa(Job Series #3)(Buku)"];
      autocomplete(document.getElementById(id2));
    }
    else if (id2 == 'searchBarKategoriParenting') {
      this.data = ["Functional Food (Buku)", "Adaptive Parenting (Buku)", "Solutif Parenting (Buku)", "Menjadi Orangtua(Buku)"];
      autocomplete(document.getElementById(id2));
    }
    else if (id2 == 'searchBarKategoriPendidikan') {
      this.data = ["Why? People - Jean-Henri Fabre (Buku)", "Why? Veterinary Medicine (Buku)", "Cookie Run Sweet Escape Adventure! – Fenomena Horor"];
      autocomplete(document.getElementById(id2));
    }
    else if (id2 == 'searchBarKategoriQuanta') {
      this.data = ["Obat Malas Dosis Tinggi for Millenial Edition (Buku)", "Pemuda Hebat Penuh Manfaat (Buku)", "Obat Malas Dosis Tinggi(Buku)", "The Puzzles of Life(Buku)"];
      autocomplete(document.getElementById(id2));
    }
    else if (id2 == 'searchBarKategoriRupa') {
      this.data = ["Basic Railway Photography (Buku)", "Food Photography Series (Buku)"];
      autocomplete(document.getElementById(id2));
    }
  }
}

function changePageFromBook(id, id2) {
  window.location = "../index.html#" + id + "/" + id2;
}

function changePageFromProfile(id, id2) {
  window.location = "index.html#" + id + "/" + id2;
}

function pageLoad() {
  if (window.location.hash) {
    var id = window.location.hash.split("/");
    changePage(id[0].substring(1, id[0].length), id[1]);
    window.location.hash = "";
  }
}

function dropdown() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function (e) {
  if (!e.target.matches('.dropbtn') && !e.target.matches('#dropKategori')) {
    var myDropdown = document.getElementById("myDropdown");
    if (myDropdown.classList.contains('show')) {
      myDropdown.classList.remove('show');
    }
  }
}

function dropdownKategori() {
  var x = document.getElementById('kategori');
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
    var kategori = document.getElementById('dropKategori');
    kategori.innerHTML = "Kategori <i class='fa fa-caret-down'></i>"
  }
  else {
    x.className = x.className.replace(" w3-show", "");
    var kategori = document.getElementById('dropKategori');
    kategori.innerHTML = "Kategori <i class='fa fa-caret-right'></i>"
  }
}

function pageCetakUlang(id1, id2) {
  var x = document.getElementById(id1);
  var y = document.getElementById(id2);
  console.log(x);
  console.log(y);
  x.className = x.className.replace("w3-hide", "w3-show");
  y.className = y.className.replace("w3-show", "w3-hide");
  console.log(x);
  console.log(y);
}

function search(id) {
  var temp = document.getElementById(id);
  var value = temp.value;
  if (value != "") {
    if (value == "Harry (User)") {
      location.replace("Profile.html");
    }
    else {
      var regex = value.replace(/\s+/g, '');
      regex = regex.replace("?", "");
      regex = regex.replace("#", "");
      regex = regex.replace(":", "");
      regex = regex.substring(0, regex.length - 6);
      location.replace("PageBuku/" + regex + ".html");
    }
  }
}

function post(id, id2) {
  var idInput = document.getElementById(id);
  var value = idInput.value;
  var idImage = document.getElementById(id2);
  if (value != "" || idImage.value != "") {
    var div = document.createElement("div");
    div.style.marginTop = "5%";
    div.style.padding = "1%";
    div.style.border = "1px solid black";
    var name = document.createElement("b");
    name.style.marginLeft = "1%";
    name.innerHTML = "Harry<br><br>";
    var p = document.createElement("p");
    p.style.marginLeft = "1%";
    p.innerHTML = value;
    if (idImage.value != "") {
      var image = document.createElement("img");
      image.src = URL.createObjectURL(idImage.files[0]);
      image.style.width = "300px";
      image.style.height = "300px";
    }
    div.appendChild(name);
    div.appendChild(p);
    if (idImage.value != "") {
      div.appendChild(image);
    }
    var feed = document.getElementById("feed");
    var children = feed.childNodes;
    feed.insertBefore(div, children[6]);
  }
}

function toProfile() {
  location.replace("Profile.html");
}

function login() {
  location.replace("../SignInPage.html");
}

function register() {
  location.replace("../SignUpPage.html");
}

function home() {
  location.replace("index.html");
}

function autocomplete(input) {
  var currentFocus;

  input.addEventListener("input", function (e) {
    var container, matchelem, i, val = this.value;
    closeAllLists();
    if (!val) {
      return false;
    }
    currentFocus = -1;
    container = document.createElement("DIV");
    container.setAttribute("id", this.id + "autocomplete-list");
    container.setAttribute("class", "autocomplete-items");
    this.parentNode.appendChild(container);
    for (i = 0; i < data.length; i++) {
      if (data[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
        matchelem = document.createElement("DIV");
        matchelem.innerHTML = "<strong>" + data[i].substr(0, val.length) + "</strong>";
        matchelem.innerHTML += data[i].substr(val.length);
        matchelem.innerHTML += "<input type='hidden' value='" + data[i] + "'>";
        matchelem.addEventListener("click", function (e) {
          input.value = this.getElementsByTagName("input")[0].value;
          closeAllLists();
        });
        container.appendChild(matchelem);
      }
    }
  });

  input.addEventListener("keydown", function (e) {
    var x = document.getElementById(this.id + "autocomplete-list");
    if (x) {
      x = x.getElementsByTagName("div");
    }
    if (e.keyCode == 40) {
      currentFocus++;
      addActive(x);
    }
    else if (e.keyCode == 38) {
      currentFocus--;
      addActive(x);
    }
    else if (e.keyCode == 13) {
      e.preventDefault();
      if (currentFocus > -1) {
        if (x) {
          x[currentFocus].click();
        }
      }
    }
  });

  function addActive(x) {
    if (!x) {
      return false;
    }
    removeActive(x);
    if (currentFocus >= x.length) {
      currentFocus = 0;
    }
    if (currentFocus < 0) {
      currentFocus = (x.length - 1);
    }
    x[currentFocus].classListAdd("autocomplete-active");
  }

  function removeActive(x) {
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }

  function closeAllLists(elmnt) {
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != input) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }

  document.addEventListener("click", function (e) {
    closeAllLists(e.target);
  });
}

var checkCaptcha = false;

function Captcha() {
    var alpha = new Array('A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z');
    var i;
    for (i = 0; i < 6; i++) {
        var a = alpha[Math.floor(Math.random() * alpha.length)];
        var b = alpha[Math.floor(Math.random() * alpha.length)];
        var c = alpha[Math.floor(Math.random() * alpha.length)];
        var d = alpha[Math.floor(Math.random() * alpha.length)];
        var e = alpha[Math.floor(Math.random() * alpha.length)];
        var f = alpha[Math.floor(Math.random() * alpha.length)];
        var g = alpha[Math.floor(Math.random() * alpha.length)];
    }
    var code = a + ' ' + b + ' ' + ' ' + c + ' ' + d + ' ' + e + ' ' + f + ' ' + g;
    document.getElementById("mainCaptcha").innerHTML = code
}

function ValidCaptcha() {
    var string1 = removeSpaces(document.getElementById('mainCaptcha').innerHTML);
    var string2 = removeSpaces(document.getElementById('txtInput').value);
    var temp = document.getElementById("wrongCaptcha");
    if (string1 == string2) {
        this.checkCaptcha = true;
        temp.className = temp.className.replace("w3-show", "w3-hide");
    }
    else {
        this.checkCaptcha = false;
        temp.className = temp.className.replace("w3-hide", "w3-show");
    }
}

function removeSpaces(string) {
    return string.split(' ').join('');
}

function check() {
    if (checkCaptcha) {
        console.log("true");
        return true;
    }
    else{
        console.log("false");
        return false;
    }
}