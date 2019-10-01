

function Cookiee(Arg) {
    var CookieName = document.cookie.slice(document.cookie.indexOf(Arg)).split("%3B")[0].split("%3D")[1];
    return CookieName;
}

function Comments(Arg) {
    var myRequest,
        classId = Arg.parentElement.nextElementSibling;

    if(window.XMLHttpRequest) {
        myRequest = new XMLHttpRequest();
    }else {
        myRequest = new ActiveXObject("Microsoft.XMLHTTP");
    }
    myRequest.onreadystatechange = function () {
        
        var CommentsSpan = Arg.parentElement.nextElementSibling;

        if(this.readyState > 0 && this.readyState < 4) {

            CommentsSpan.innerHTML = " انتظر ... ";

        }else if (this.readyState == 4 || this.readyState == 200) {

            CommentsSpan.innerHTML = this.responseText;
            
            
            if ( CommentsSpan.classList.contains('show') ) {
                
                CommentsSpan.classList.remove("show");
                
            } else {
                
                for(Hd in document.getElementsByClassName('CommentsSpan')){
                    if ( !(isNaN(parseInt(Hd))) ) {
                        document.getElementsByClassName('CommentsSpan')[Hd].classList.remove('show');
                    }
                }
                CommentsSpan.classList.add("show");
                
            }
            
            
        } else {
            CommentsSpan.innerHTML = "<span style='color:red' >Access Dinine !</span>";
        }
    };
    var valId = parseInt(classId.classList[1]);
    myRequest.open("GET","/comment?thisId="+valId+"", true);
    myRequest.send();
}


////////////////////////////////////////////////
//////////commd send/////////////////////


function Commenting(Arg) {
    var myRequest,
        classId = Arg.parentElement.nextElementSibling,
        comment = Arg.previousElementSibling.value;
    
    
    if(window.XMLHttpRequest) {
        myRequest = new XMLHttpRequest();
    }else {
        myRequest = new ActiveXObject("Microsoft.XMLHTTP");
    }
    myRequest.onreadystatechange = function () {
        
        var CommentsSpan = Arg.parentElement.nextElementSibling;
        
        if(this.readyState > 0 && this.readyState < 4) {

            CommentsSpan.innerHTML = " انتظر ... ";

        }else if (this.readyState == 4 || this.readyState == 200) {
            
            var StrogDiv = document.createElement('div');
            StrogDiv.innerHTML = this.responseText;
            
            Arg.previousElementSibling.value = "";
            CommentsSpan.innerHTML = "";
            

            for(ele = 0; ele = StrogDiv.childElementCount; ele++ ){     
                CommentsSpan.prepend(StrogDiv.firstElementChild);
                
            }
           
            if ( CommentsSpan.classList.contains('show') ) {
                
                //CommentsSpan.classList.add("show");
                
            } else {
                
                for(Hd in document.getElementsByClassName('CommentsSpan')){
                    if ( !(isNaN(parseInt(Hd))) ) {
                        document.getElementsByClassName('CommentsSpan')[Hd].classList.remove('show');
                    }
                }
                CommentsSpan.classList.add("show");
                
            }
            
            
        } else {
            CommentsSpan.innerHTML = "<span style='color:red' >Access Dinine !</span>";
        }
    };
    
    var valId = parseInt(classId.classList[1]);
    myRequest.open("GET","/commenting?thisId="+valId+"&me="+Cookiee('MyName')+"&comment="+comment+" ", true);
    myRequest.send();
}


