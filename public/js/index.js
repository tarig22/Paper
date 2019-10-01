/*globals document */
/*jslint plusplus:true */



//   show and hide the ul

for ( Li in document.getElementsByClassName('TitleLi') ) {
    document.getElementsByClassName('TitleLi')[Li].onclick = function () {
        if(this.classList.contains('disapple')){
            return false;
        } else {
            for ( UL in document.querySelectorAll('ul') ) {
                if ( !(isNaN(parseInt(UL))) ) {
                    document.querySelectorAll('ul')[UL].style.display = "none";
                }
            }
        }
    };
}




function ShowLi(Arg1,Arg2) {
    document.getElementById(Arg1).style.display="block";
    document.getElementById(Arg2).style.display="none";
}


/// add coment fuction to new sharig message

function AddEventClassTogle(){
    for(Co in document.getElementsByClassName('CommentSpan')){
        document.getElementsByClassName('CommentSpan')[Co].onclick = function () {
            var This = this;
            Comments(This);
        };
    }
}
/// add comenting fuction to set comment

function AddEventClassCommenting(){
    for(Coo in document.getElementsByClassName('Commenting')){
        document.getElementsByClassName('Commenting')[Coo].onclick = function () {
            var This = this;
            
            if(this.previousElementSibling.value == ""){
                
            } else {
            
                Commenting(This);
            }
        };
    }
}

//    Spacial messege function 

function PreventSubmit() {
    event.preventDefault();
}

// MessageManage

document.getElementById('BtnSendMassege').onclick =  function () {
    
    var This = this;
    
    if( this.previousElementSibling.value == "" || this.previousElementSibling.value == " اكتب شيا ... " ){
        
        this.previousElementSibling.value = " اكتب شيا ... ";
        
    }else{
        
        for(Oli in document.getElementsByClassName('OlLi')){
            if ( !(isNaN(parseInt(Oli))) ) {
                if( document.getElementsByClassName('OlLi')[Oli].classList.contains('FrindValue') ){
                    
                    SpacialSendMessage(This);
                    window.location.href = "#PscrollBottom";
                    
                    this.previousElementSibling.value = "";
                }
            }else {
                this.previousElementSibling.value = " اختر صديق من الاعلي ...";
            }
        }
        
    }
    
};




















/// comments functon 

/////////////////////////////////////////////////
document.body.onscroll = function(){
    if(window.pageYOffset < 20 && !document.getElementById("SapnIconHeader").classList.contains('SelectClass') ){
        document.getElementById('SpanMainPage').classList.add('SelectClass');
    }else{
        document.getElementById('SpanMainPage').classList.remove('SelectClass');
    }
};


function Href(Arg){
    window.location.href = Arg;
}



///////cooooooooooookes;

//function RemoveCookie() {
//    if( (document.cookie.indexOf('MyName') > -1) ){
//        document.cookie ="MyName=; expires=Thu Jul 01 2019 23:19:12 GMT+0300 (East Africa Time); path=/";
//        document.cookie ="MyPass=; expires=Thu Jul 01 2019 23:19:12 GMT+0300 (East Africa Time); path=/";
//    }
//    window.location.href = "/login";
//}
//


function Cookie(Arg) {
    var CookieName = document.cookie.slice(document.cookie.indexOf("MyName")).split("%3B")[0].split("%3D")[1];
    return CookieName;
}