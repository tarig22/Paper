////////////////////////////////////////////////
/////////////////////////////////////////////////
function Cookiee(Arg) {
    var CookieName = document.cookie.slice(document.cookie.indexOf(Arg)).split("%3B")[0].split("%3D")[1];
    return CookieName;
}




function SpacialMessage() {
    var myRequest;
    if(window.XMLHttpRequest) {
        myRequest = new XMLHttpRequest();
    }else {
        myRequest = new ActiveXObject("Microsoft.XMLHTTP");
    }
    
    myRequest.onreadystatechange = SpacialMessageResponse;
    myRequest.open("GET","/spacialmessage?me="+ Cookiee('MyName')+" ", true);
    myRequest.send();
    window.location.href = "#PscrollBottom";
}

function SpacialMessageResponse() {
    var DivMainSpacilMs= document.getElementById('DivMainSpacilMs'),
        DivMainContent= document.getElementById('DivMainContent'),
        OlMain = document.getElementById('OlMain'),
        DivMainSpacilMsInner = document.getElementById('DivMainSpacilMsInner'),
        Divsharing= document.getElementById('Divsharing'),
        LoogoDiv = document.getElementsByClassName('LoogoDiv')[0];
    
    if(this.readyState > 0 && this.readyState < 4) {
        LoogoDiv.style.display = "block";
    }else if (this.readyState == 4 || this.readyState == 200) {

        LoogoDiv.style.display = "none";
        
        DivMainContent.style.display = "none";
        Divsharing.style.display = "none";
        document.getElementById('SpanMainPage').classList.remove('SelectClass');
        
        document.getElementById("SapnIconHeader").classList.add('SelectClass');
        DivMainSpacilMs.style.display = "block";
        
        var Message = document.createElement('div');
        Message.innerHTML = this.responseText;
        
        DivMainSpacilMsInner.innerHTML = "";
        OlMain.innerHTML = "";
        
       
        for(mess = 0; mess = Message.childElementCount; mess++){
            OlMain.appendChild(Message.firstElementChild);
        }
        
        
        
        /////////////////////////////////////////////////////////////////////////////////////
        for ( Oi in document.getElementsByClassName('OlLi') ) {
            document.getElementsByClassName('OlLi')[Oi].onclick = function () {

                for(Oli in document.getElementsByClassName('OlLi')){
                    if ( !(isNaN(parseInt(Oli))) ) {
                        document.getElementsByClassName('OlLi')[Oli].classList.remove('FrindValue');
                    }
                }
                this.classList.add("FrindValue");

                document.getElementById('SpanFrindName').innerHTML = this.textContent;
                document.getElementById('OlMain').style.display = "none";
                var This = this;
                SpacialSelsctFrend(This);
            };
        }
        document.getElementById('AddFrends').onclick = AddFrendsNew;
         document.getElementById('SpanFrindName').innerHTML = "";
        
        /////////////////////////////////////////////////////////////////////////////////////
        
        
        
   
    } else {
        DivMainSpacilMsInner.innerHTML = "<span style='color:red' >Access Dinine !</span>";
    }
}









function SpacialSelsctFrend(Arg) {
    var myRequest,
        
        sento = document.getElementsByClassName('FrindValue')[0].classList[1].trim();
  

    if(window.XMLHttpRequest) {
        myRequest = new XMLHttpRequest();
    }else {
        myRequest = new ActiveXObject("Microsoft.XMLHTTP");
    }
    
    
    myRequest.onreadystatechange = function () {

        var DivMainSpacilMsInner= document.getElementById('DivMainSpacilMsInner'),
            LoogoDiv = document.getElementsByClassName('LoogoDiv')[0];

        if(this.readyState > 0 && this.readyState < 4) {
            LoogoDiv.style.display = "block";
        }else if (this.readyState == 4 || this.readyState == 200) {
            LoogoDiv.style.display = "none";
             
            
            var Message = document.createElement('div');
            Message.innerHTML = this.responseText;
            
            DivMainSpacilMsInner.innerHTML = "";


            for(mes = 0; mes = Message.childElementCount; mes++){
                DivMainSpacilMsInner.appendChild(Message.firstElementChild);
            }
            
            for( cme in document.getElementsByClassName('c'+Cookiee('MyName')) ){
                if ( !(isNaN(parseInt(cme))) ) {
                    document.getElementsByClassName('c'+Cookiee('MyName'))[cme].classList.add('LeftClass');
                }
            }
            window.location.href = "#PscrollBottom";



            setTimeout(function () {
                
                if(Arg.textContent == document.getElementById('SpanFrindName').textContent ){
                    
                    SpacialSelsctFrend1(Arg);
                    
                    //SpacialSelsctFrendResponse();
                }else{
                    
                }
            }, 10000);

        } else {
            DivMainSpacilMsInner.innerHTML = "<span style='color:red' >Access Dinine !</span>";
        }
    };
    
    myRequest.open("GET","/spacialselectfrend?me="+Cookiee('MyName')+"&sento="+sento+"", true);
    myRequest.send();
}

    // scopy
    function SpacialSelsctFrend1(Arg) {
    var myRequest;
        
    if(document.getElementsByClassName('FrindValue')[0] != undefined){
        var sento = document.getElementsByClassName('FrindValue')[0].classList[1].trim();
    }else{
        var sento = " ";
    }

    if(window.XMLHttpRequest) {
        myRequest = new XMLHttpRequest();
    }else {
        myRequest = new ActiveXObject("Microsoft.XMLHTTP");
    }
    
    
    myRequest.onreadystatechange = function () {

        var DivMainSpacilMsInner= document.getElementById('DivMainSpacilMsInner'),
            LoogoDiv = document.getElementsByClassName('LoogoDiv')[0];

        if(this.readyState > 0 && this.readyState < 4) {
            //LoogoDiv.style.display = "block";
        }else if (this.readyState == 4 || this.readyState == 200) {
            //LoogoDiv.style.display = "none";
            
            var Message = document.createElement('div');
            Message.innerHTML = this.responseText;

            setTimeout(function () {
                
                if(Arg.textContent == document.getElementById('SpanFrindName').textContent ){
                    
                    SpacialSelsctFrend1(Arg);
                    
                    if( Message.childElementCount == DivMainSpacilMsInner.childElementCount ){
                        
                       //do not updaet
                        
                        
                    } else {
                        // updaet
                        DivMainSpacilMsInner.innerHTML = "";

                        for(mes = 0; mes = Message.childElementCount; mes++){
                            DivMainSpacilMsInner.appendChild(Message.firstElementChild);
                        }
                        for( cme in document.getElementsByClassName('c'+Cookiee('MyName')) ){
                            if ( !(isNaN(parseInt(cme))) ) {
                                document.getElementsByClassName('c'+Cookiee('MyName'))[cme].classList.add('LeftClass');
                            }
                        }
                        window.location.href = "#PscrollBottom";
                    }
                    
                }else{
                    
                }
                
                
            }, 100);

        } else {
            DivMainSpacilMsInner.innerHTML = "<span style='color:red' >Access Dinine !</span>";
        }
    };
        
    myRequest.open("GET","/spacialselectfrend?me="+Cookiee('MyName')+"&sento="+sento+"", true);
    myRequest.send();
}
 
        
        
        
        
//
//function SpacialSelsctFrendResponse() {
//    var DivMainSpacilMsInner= document.getElementById('DivMainSpacilMsInner'),
//        LoogoDiv = document.getElementsByClassName('LoogoDiv')[0];
//    
//    if(this.readyState > 0 && this.readyState < 4) {
//        LoogoDiv.style.display = "block";
//    }else if (this.readyState == 4 || this.readyState == 200) {
//        LoogoDiv.style.display = "none";
//        
//        
//        var Message = document.createElement('div');
//        Message.innerHTML = this.responseText;
//        
//        DivMainSpacilMsInner.innerHTML = "";
//
//       
//        for(mes = 0; mes = Message.childElementCount; mes++){
//            DivMainSpacilMsInner.appendChild(Message.firstElementChild);
//        }
//        window.location.href = "#PscrollBottom";
//        
//        
//                   
//        setTimeout(function () {
//            console.log(Arg.textContent);
//            console.log(document.getElementById('SpanFrindName').textContent);
////            if(Arg.textContent == document.getElementById('SpanFrindName').textContent ){
////                SpacialSelsctFrendResponse();
////            }else{
////                
////            }
//        }, 1000);
//        
//    } else {
//        DivMainSpacilMsInner.innerHTML = "<span style='color:red' >Access Dinine !</span>";
//    }
//}














function SpacialSendMessage(Arg) {
    var myRequest,
        mess = Arg.previousElementSibling.value;
    if(document.getElementsByClassName('FrindValue')[0] != undefined){
        var sento = document.getElementsByClassName('FrindValue')[0].classList[1].trim();
    }else{
        var sento = " ";
    }
   
    if(window.XMLHttpRequest) {
        myRequest = new XMLHttpRequest();
    }else {
        myRequest = new ActiveXObject("Microsoft.XMLHTTP");
    }
   // myRequest.onreadystatechange = SpacialSendMessageResponse;
    
    
    myRequest.open("GET","/sendmessage?me="+Cookiee('MyName')+"&sento="+sento+"&mess="+mess+" ", true);
    myRequest.send();
    
}


// get new firend name

function AddFrendsNew() {
        var myRequest;
    
    if(window.XMLHttpRequest) {
        myRequest = new XMLHttpRequest();
    }else {
        myRequest = new ActiveXObject("Microsoft.XMLHTTP");
    }
    myRequest.onreadystatechange = AddFrendsNewResponse;
    myRequest.open("GET","/spacialmessageselect?me="+ Cookiee('MyName')+"&showfrnds=ON", true);
    myRequest.send();
    window.location.href = "#PscrollBottom";
}
function AddFrendsNewResponse() {
     var DivMainSpacilMsInner= document.getElementById('DivMainSpacilMsInner'),
        LoogoDiv = document.getElementsByClassName('LoogoDiv')[0];
    
    if(this.readyState > 0 && this.readyState < 4) {
        LoogoDiv.style.display = "block";
    }else if (this.readyState == 4 || this.readyState == 200) {
        LoogoDiv.style.display = "none";
        
        DivMainSpacilMsInner.innerHTML = this.responseText;
        
        document.getElementById('OlMain').style.display = "none";
        document.getElementById('SpanFrindName').innerHTML = "";
        
        
        
        for ( frSet in document.getElementsByClassName('frSet') ) {
            document.getElementsByClassName('frSet')[frSet].onclick = function () {
                var This = this;
                setNewFrends(This);
            }
        }
    } else {
        DivMainSpacilMsInner.innerHTML = "<span style='color:red' >Access Dinine !</span>";
    }
}


///setnewfrind

function setNewFrends(Arg) {
            var myRequest,
                setfrnds = Arg.classList[1];
    
    if(window.XMLHttpRequest) {
        myRequest = new XMLHttpRequest();
    }else {
        myRequest = new ActiveXObject("Microsoft.XMLHTTP");
    }
    myRequest.onreadystatechange = function () {
        var DivMainSpacilMsInner= document.getElementById('DivMainSpacilMsInner'),
            LoogoDiv = document.getElementsByClassName('LoogoDiv')[0];

        if(this.readyState > 0 && this.readyState < 4) {
            LoogoDiv.style.display = "block";
        }else if (this.readyState == 4 || this.readyState == 200) {
            LoogoDiv.style.display = "none";
            Arg.textContent = " تم ";
        } else {
            DivMainSpacilMsInner.innerHTML = "<span style='color:red' >Access Dinine !</span>";
        }
    };
    
    myRequest.open("GET","/setnewfrind?me="+ Cookiee('MyName')+"&setfrnds="+setfrnds+"", true);
    myRequest.send();
    window.location.href = "#PscrollBottom";
    
}
