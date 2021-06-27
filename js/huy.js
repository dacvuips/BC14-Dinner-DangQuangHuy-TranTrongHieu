// button overlay
function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
    document.getElementById("mySidenav").style.opacity = "1";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("mySidenav").style.opacity = "0";
  }

// dark theme
document.getElementById("switchButton").onclick = function () {
    document.getElementById("body").classList.toggle("dark");
};