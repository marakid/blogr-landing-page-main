
function showMenuProduct() {
  let itemDisplay = document.getElementById("ddItem1").style.display;
  itemDisplay = itemDisplay || "none";
  if ( itemDisplay === "none") {
    document.getElementById("ddItem1").style.display = "block";
    document.getElementById("productArrow").style.transform = "rotate(180deg)";
    document.getElementById("productArrow").style.paddingRight = "9px";
  } else {
    document.getElementById("ddItem1").style.display = "none";
    document.getElementById("productArrow").style.transform = "rotate(0deg)";
    document.getElementById("productArrow").style.paddingRight = "0px";
  }
}

function showMenuCompany() {
  let itemDisplay = document.getElementById("ddItem2").style.display;
  itemDisplay = itemDisplay || "none";
  if ( itemDisplay === "none") {
    document.getElementById("ddItem2").style.display = "block";
    document.getElementById("companyArrow").style.transform = "rotate(180deg)";
    document.getElementById("companyArrow").style.paddingRight = "9px";
  } else {
    document.getElementById("ddItem2").style.display = "none";
    document.getElementById("companyArrow").style.transform = "rotate(0deg)";
    document.getElementById("companyArrow").style.paddingRight = "0px";
    
  }
}

function showMenuConnect() {
  let itemDisplay = document.getElementById("ddItem3").style.display;
  itemDisplay = itemDisplay || "none";
  if ( itemDisplay === "none") {
    document.getElementById("ddItem3").style.display = "block";
    document.getElementById("connectArrow").style.transform = "rotate(180deg)";
    document.getElementById("connectArrow").style.paddingRight = "9px";
  } else {
    document.getElementById("ddItem3").style.display = "none";
    document.getElementById("connectArrow").style.transform = "rotate(0deg)";
    document.getElementById("connectArrow").style.paddingRight = "0px";
  }
}
