
function showMenu(itemId, arrowId) {
  let itemDisplay = document.getElementById(itemId).style.display;
  itemDisplay = itemDisplay || "none";
  if ( itemDisplay === "none") {
    document.getElementById(itemId).style.display = "block";
    document.getElementById(arrowId).style.transform = "rotate(180deg)";
    document.getElementById(arrowId).style.paddingRight = "9px";
  } else {
    document.getElementById(itemId).style.display = "none";
    document.getElementById(arrowId).style.transform = "rotate(0deg)";
    document.getElementById(arrowId).style.paddingRight = "0px";
  }
}
