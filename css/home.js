
function winresize() {
    var w = window.innerWidth;
    //alert(w + ' pixels');
    if (w < 480) {
        document.getElementById("bmenu").innerHTML = "<input onclick=\"menuopen();\" class=\"menubtn\" type=\"image\" src=\"images/mobilebutton.png\">";
    }
    else {
        document.getElementById("bmenu").innerHTML =  "<ul class=\"nav\">         <li><a class=\"active\" href=\"home.html\">Home</a></li>         <li><a href=\"about.html\">About</a></li>         <li><a href=\"services.html\">Services</a></li>         <li><a href=\"history.html\">History</a></li>         <li><a class=\"btn\" href=\"contact-us.html\">Contact Us</a></li>   </ul>";
    }
}

function menuopen() {
    document.getElementById("headerimg").innerHTML = "<div class=\"mobile\">   <div class=\"nav\"><a class=\"active\" href=\"home.html\">Home</a> <br> <a href=\"about.html\">About</a> <br> <a href=\"services.html\">Services</a> <br> <a href=\"history.html\">History</a> <br> <a class=\"btn\" href=\"contact-us.html\">Contact Us</a>  </div> </div>";
}