function dropdown() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// window.onclick = function (e) {
//   if (!e.target.matches('.dropbtn')) {
//     var myDropdown = document.getElementById("myDropdown");
//     if (myDropdown.classList.contains('show')) {
//       myDropdown.classList.remove('show');
//     }
//   }
//   // else if (!e.target.matches('.kategori')) {
//   //   var myDropdown = document.getElementById("kategori");
//   //   if (myDropdown.classList.contains('show')) {
//   //     myDropdown.classList.remove('show');
//   //   }
//   // }
// }

function dropdownKategori() {
  var x = document.getElementById('kategori');
	
	if(x.className.indexOf("w3-show") == -1){
		x.className += " w3-show";
	}
	else{
		x.className = x.className.replace(" w3-show","");
	}}

function login(){
  location.replace("SignInPage.html");
}

function register(){
  location.replace("SignUpPage.html");
}

function home(){
  location.replace("index.html");
}