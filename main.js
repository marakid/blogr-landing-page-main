
function showMenu(itemId, arrowId) {
  let itemDisplay = document.getElementById(itemId).style.display;
  itemDisplay = itemDisplay || "none";
  if ( itemDisplay === "none") {
    document.getElementById(itemId).style.display = "block";
    document.getElementById(arrowId).style.transform = "rotate(180deg)";
  } else {
    document.getElementById(itemId).style.display = "none";
    document.getElementById(arrowId).style.transform = "rotate(0deg)";
  }
}

function showMobileMenu() {
  let iconSource = document.getElementById("mobile-menu-icon").src;
  if (iconSource.includes("hamburger")) {
    document.getElementById("mobile-menu-icon").src= "images/icon-close.svg";
    document.getElementById("mobile-menu").style.display = "grid";
  } else {
    document.getElementById("mobile-menu-icon").src= "images/icon-hamburger.svg";
    document.getElementById("mobile-menu").style.display = "none";
  }
}
