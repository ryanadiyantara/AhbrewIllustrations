// Navbar Scroll
window.onscroll = function () {
  var currentScroll = window.pageYOffset;
  if (currentScroll >= 125) {
    document.getElementById("navbar").style.visibility = "visible";
  } else {
    document.getElementById("navbar").style.visibility = "hidden";
  }
  p = currentScroll;
};

// Change Illustrations Color
function changeColor() {
  let colorInput = document.getElementById("color-input").value;
  document.querySelectorAll(".colorChange").forEach((changeColor) => {
    changeColor.style.fill = colorInput;
  });
}

function changeColorNav() {
  let colorInput = document.getElementById("color-input-nav").value;
  document.querySelectorAll(".colorChange").forEach((changeColor) => {
    changeColor.style.fill = colorInput;
  });
}
