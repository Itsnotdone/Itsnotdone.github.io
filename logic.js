function myFunction() {
    console.log("presed")
    document.getElementById("DropDown").classList.toggle("show");
}
  
window.onclick = function(event) {
    if (!event.target.matches('.hamburger-button')) {
        var dropdowns = document.getElementsByClassName("content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
           ;
            console.log("released")
        }
        }
    }
}