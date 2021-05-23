function myFunction() {
    var togglingdiv = document.getElementById("staticdiv");
    if (togglingdiv.style.display == "none") {
        togglingdiv.style.display = "block";
    } else {
        togglingdiv.style.display = "none";
    }
  }