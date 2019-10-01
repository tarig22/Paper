function Cookiee(Arg) {
    var CookieName = document.cookie.slice(document.cookie.indexOf(Arg)).split("%3B")[0].split("%3D")[1];
    return CookieName;
}


function PageUpdate() {
    
    var myRequest,
        firstMessageShring = parseInt(document.getElementById('DivMainContent').firstElementChild.lastElementChild.classList[1]),
        lastMessageShring = parseInt(document.getElementById('PFooter').previousElementSibling.lastElementChild.classList[1]);
        

    if(window.XMLHttpRequest) {
        myRequest = new XMLHttpRequest();
    }else {
        myRequest = new ActiveXObject("Microsoft.XMLHTTP");
    }
    myRequest.onreadystatechange = PageUpdateResponse;
    myRequest.open("GET","/newmessage?me="+Cookiee('MyName')+"&firsId="+firstMessageShring+"&lastId="+lastMessageShring+" ", true);
    myRequest.send();
    
    
}

function PageUpdateResponse() {
    var DivMainContent = document.getElementById("DivMainContent"),
        DivMainSpacilMs = document.getElementById("DivMainSpacilMs"),
        Divsharing = document.getElementById("Divsharing"),
        LoogoDiv = document.getElementsByClassName('LoogoDiv')[0];
    
    if(this.readyState > 0 && this.readyState < 4) {
        LoogoDiv.style.display = "block";
    }else if (this.readyState == 4 || this.readyState == 200) {
        LoogoDiv.style.display = "none";
        DivMainSpacilMs.style.display = "none";
        document.getElementById("SapnIconHeader").classList.remove('SelectClass');
        
        document.getElementById('SpanMainPage').classList.add('SelectClass');
        Divsharing.style.display = "flex";
        DivMainContent.style.display = "block";
        
        var DivContenerr = document.createElement('div');
        
        DivContenerr.innerHTML = this.responseText;
        document.getElementById('SpanFrindName').innerHTML = "";
        
        if(DivContenerr.childElementCount > 0){
            for(elemnt = 0; elemnt = DivContenerr.childElementCount; elemnt++ ){
                DivMainContent.prepend(DivContenerr.firstElementChild);
            }
        }
        
        AddEventClassTogle();
        AddEventClassCommenting();
        
    } else {
        DivMainContent.innerHTML = "<span style='color:red' >Access Dinine !</span>";
    }
}




function GlobaleMessage() {
    var myRequest;
    
    
    if(window.XMLHttpRequest) {
        myRequest = new XMLHttpRequest();
    }else {
        myRequest = new ActiveXObject("Microsoft.XMLHTTP");
    }
    
    myRequest.onreadystatechange = GlobaleMessageResponse;
    myRequest.open("GET","/globalemessage?me="+Cookiee('MyName')+"", true);
    myRequest.send();
    
    
}GlobaleMessage();

function GlobaleMessageResponse() {
    var DivMainContent = document.getElementById('DivMainContent'),
        DivMainSpacilMs = document.getElementById('DivMainSpacilMs'),
        LoogoDiv = document.getElementsByClassName('LoogoDiv')[0];
    
    if(this.readyState > 0 && this.readyState < 4) {
        
        LoogoDiv.style.display = "block";
        
    }else if (this.readyState == 4 || this.readyState == 200) {
        DivMainSpacilMs.style.display = "none";
        DivMainContent.style.display = "block";
        LoogoDiv.style.display = "none";
        
        var DivContenerr = document.createElement('div');
        DivContenerr.innerHTML = this.responseText;
        

        for(elemnt = 0; elemnt = DivContenerr.childElementCount; elemnt++ ){
            DivMainContent.prepend(DivContenerr.firstElementChild);
        }
        
        
        
        AddEventClassTogle();
        AddEventClassCommenting();
        
    } else {
        DivMainContent.innerHTML = "<span style='color:red' >Access Dinine !</span>";
    }
}



function MoreMessage() {
    var myRequest,
        firstMessageShring = parseInt(document.getElementById('DivMainContent').firstElementChild.lastElementChild.classList[1]),
        lastMessageShring = parseInt(document.getElementById('PFooter').previousElementSibling.lastElementChild.classList[1]);
        
    if(window.XMLHttpRequest) {
        myRequest = new XMLHttpRequest();
    }else {
        myRequest = new ActiveXObject("Microsoft.XMLHTTP");
    }
    myRequest.onreadystatechange = MoreMessageResponse;
    myRequest.open("GET","/moremessage?me="+Cookiee('MyName')+"&firsId="+firstMessageShring+"&lastId="+lastMessageShring+" ", true);
    myRequest.send();
}

function MoreMessageResponse() {
    var DivMainContent = document.getElementById('DivMainContent'),
        DivMainSpacilMs = document.getElementById('DivMainSpacilMs'),
        LoogoDiv = document.getElementsByClassName('LoogoDiv')[0];
    
    if(this.readyState > 0 && this.readyState < 4) {
        
        LoogoDiv.style.display = "block";
        
    }else if (this.readyState == 4 || this.readyState == 200) {
        DivMainSpacilMs.style.display = "none";
        DivMainContent.style.display = "block";
        
        LoogoDiv.style.display = "none";
        
        var DivContenerr = document.createElement('div');
        
        
        DivContenerr.innerHTML += this.responseText;
        
        if(DivContenerr.childElementCount == 0){
            document.getElementById('PFooter').textContent = "لايوجد مزيد";
        }else{
            for(elemnt = 0; elemnt = DivContenerr.childElementCount; elemnt++ ){
                DivMainContent.insertBefore(DivContenerr.lastElementChild, DivMainContent.lastElementChild);
            }
        }
        AddEventClassTogle();
        AddEventClassCommenting();
        
    } else {
        DivMainContent.innerHTML = "<span style='color:red' >Access Dinine !</span>";
    }
}




function SaringMessageSend()  {
       var myRequest,
           SharingValue  = document.getElementById('SharingValue').value;

    if(window.XMLHttpRequest) {
        myRequest = new XMLHttpRequest();
    }else {
        myRequest = new ActiveXObject("Microsoft.XMLHTTP");
    }
   // myRequest.onreadystatechange = GlobaleMessageResponse;
    
    
    
    myRequest.open("GET","/globalemessagee?me="+Cookiee('MyName')+"&sharingvalue="+SharingValue+" ", true);
    myRequest.send();
}

