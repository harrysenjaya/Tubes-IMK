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
  x.className = x.className.replace("w3-hide", "w3-show");
  y.className = y.className.replace("w3-show", "w3-hide");
}

function search(id){
  var temp = document.getElementById(id);
  var value = temp.value;
  var regex = value.replace(/\s+/g, '');
  regex = regex.replace("?","");
  regex = regex.substring(0,regex.length-6);
  location.replace("PageBuku/"+regex+".html");
}

function login() {
  location.replace("../SignInPage.html");
}

function register() {
  location.replace("../SignUpPage.html");
}

function login0(){
  location.replace("SignInPage.html");
}

function register0(){
  location.replace("SignUpPage.html");
}

function home() {
  location.replace("index.html");
}

function autocomplete(input, arr) {
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
      for (i = 0; i < arr.length; i++) {
          if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
              matchelem = document.createElement("DIV");
              matchelem.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
              matchelem.innerHTML += arr[i].substr(val.length);
              matchelem.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
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