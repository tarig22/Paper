function Cookiee(Arg) {
    var CookieName = document.cookie.slice(document.cookie.indexOf(Arg)).split("%3B")[0].split("%3D")[1];
    return CookieName;
}




function Lodin() {
    var myRequest;
    if(window.XMLHttpRequest) {
        myRequest = new XMLHttpRequest();
    }else {
        myRequest = new ActiveXObject("Microsoft.XMLHTTP");
    }
    myRequest.onreadystatechange = LodinResponse;
    
    myRequest.open("GET","/login?me="+ Cookiee('MyName') +" ", true);
    myRequest.send();
}

function LodinResponse() {
    var ChickUser= document.getElementById('ChickUser');
    
    if(this.readyState > 0 && this.readyState < 4) {
        
    }else if (this.readyState == 4 || this.readyState == 200) {
       ChickUser.className = this.responseText;
        
    } else {
        ChickUser.innerHTML = "<span style='color:red' >Access Dinine !</span>";
    }
}






            