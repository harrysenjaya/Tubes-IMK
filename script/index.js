function dropdown() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function (e) {
  if (!e.target.matches('.dropbtn')) {
    var myDropdown = document.getElementById("myDropdown");
    if (myDropdown.classList.contains('show')) {
      myDropdown.classList.remove('show');
    }
  }
  // else if (!e.target.matches('.kategori')) {
  //   var myDropdown = document.getElementById("kategori");
  //   if (myDropdown.classList.contains('show')) {
  //     myDropdown.classList.remove('show');
  //   }
  // }
}

// function dropdownKategori() {
//   document.getElementById("kategori").classList.toggle("show");
// }

