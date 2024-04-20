function activemenu(menu) {
    var href = window.location.href;
    //alert(href.substring(href.length-9));
    if (href.substring(href.length-9) == "home.html") var home = "<a class=\"active\" href=\"home.html\">Home</a> <br>";
    else var home = "<a href=\"home.html\">Home</a> <br>";
    if (href.substring(href.length-10) == "about.html") var about = "<a class=\"active\" href=\"about.html\">About</a> <br>";
    else var about = "<a href=\"about.html\">About</a> <br>";
    if (href.substring(href.length-13) == "services.html") var services = "<a class=\"active\" href=\"services.html\">Services</a> <br>";
    else var services = "<a href=\"services.html\">Services</a> <br>";
    if (href.substring(href.length-12) == "history.html") var history = "<a class=\"active\" href=\"history.html\">History</a> <br>";
    else var history = "<a href=\"history.html\">History</a> <br>";


    if (menu == 1) {
        if (href.substring(href.length-15) == "contact-us.html") var contact = "<a class=\"active\" href=\"contact-us.html\">Contact Us</a>";
        else var contact = "<a class=\"btn\" href=\"contact-us.html\">Contact Us</a>";
    
        return("<ul class=\"nav\"><li>" + home + "</li><li>" + about + "</li><li>" + services + "</li><li>" + history + "</li><li>" + contact + "</li></ul>");
    }
    if (menu == 2) {
        if (href.substring(href.length-15) == "contact-us.html") var contact = "<a class=\"active\" id=\"mobtn\" href=\"contact-us.html\">Contact Us</a>";
        else var contact = "<a class=\"btn\" id=\"mobtn\" href=\"contact-us.html\">Contact Us</a>";
    
        return("<div class=\"mobile\"><div class=\"nav\">" + home + about + services + history + contact + "</div></div>");
    }
}

function winresize() {
    var w = window.innerWidth;
    //alert(w + ' pixels');
    var srv = document.getElementById("services-container");
    var lau = document.getElementById("laurel");
    if (w < 480) {
        document.getElementById("bmenu").innerHTML = "<input onclick=\"menuopen();\" class=\"menubtn\" type=\"image\" src=\"images/mobilebutton.png\">";
        if (srv) srv.style.paddingLeft = "0px";
        if (lau) lau.style.height = "500px";
    } else {
        document.getElementById("bmenu").innerHTML =  activemenu(1);
        if (srv) srv.style.paddingLeft = "10%";
        if (lau) lau.style.height = "650px";
    }
}

function menuopen() {

    document.getElementById("headerimg").innerHTML = activemenu(2);
    document.getElementById("bmenu").innerHTML = "<input onclick=\"menuclose();\" class=\"menubtn\" type=\"image\" src=\"images/mobilebutton.png\">";
}

function menuclose() {
    document.getElementById("headerimg").innerHTML = "<img src=\"images/Map Header Picture.png\" class=\"mappic\" alt=\"mappic\"></img>";
    document.getElementById("bmenu").innerHTML = "<input onclick=\"menuopen();\" class=\"menubtn\" type=\"image\" src=\"images/mobilebutton.png\">";
}