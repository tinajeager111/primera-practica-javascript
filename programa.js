let openFormButton = document.getElementById("openFormButton");
let popup = document.getElementById("popup");
let closeFormButton = document.getElementById("closeFormButton");
let form = document.getElementById("form");

openFormButton.onclick = function() {
  popup.style.display = "block";
}

closeFormButton.onclick = function() {
  popup.style.display = "none";


}

form.addEventListener("submit", function(e) {
  e.preventDefault();
  popup.style.display = "none";

let checkboxes = document.getElementsByTagName("input");

  // Iterar sobre los checboxes y deseleccionar los checked
  for (let i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].type === "checkbox") {
      checkboxes[i].checked = false;
    }
  }

  // Seleccionar el select
  let select = document.getElementById("tamaño");

  // Deseleccionar el option seleccionado
  select.selectedIndex = '';
});




/*
function resetForm(){
  form.reset();
}

*/ 

