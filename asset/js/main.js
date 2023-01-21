const menu = document.querySelector(".header__nav--menu");
const menuButton = document.querySelector(".header__nav--button");
const menuLi = document.querySelectorAll(".nav--links--li")

menuButton.addEventListener("click", () => {classtoggle(menuButton,"active"),classtoggle(menu,"menushow")})
menuLi.forEach(e => e.addEventListener("click", () => {classtoggle(menu,"menushow"), classtoggle(menuButton,"active")}))



function classtoggle (var1,var2){
  var1.classList.toggle(var2)
}

