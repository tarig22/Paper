var express = require('express');
var fs = require('fs');
var cookieParser = require('cookie-parser');
var app = express();
var mysql = require('mysql');

app.use(cookieParser());
app.use(express.static('public'));

var db = mysql.createConnection({
  host: "ba7pil75r9jfrowdotzx-mysql.services.clever-cloud.com",
  user: "ubeutckfecyffpyz",
  password: "ScN7OY0BlLb9Z2j42SB3",
  database: "ba7pil75r9jfrowdotzx"
});

db.connect(function(err) {
    if (err) throw err
});



 app.get('/',function(req, res){
     
     if(req.cookies.MyName !== undefined){
         fs.readFile('public/index.txt', function(err, data) {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            res.end();
        });
     }else if(req.query.username !== undefined && req.cookies.MyName == undefined){
         
          db.query("SELECT password FROM users WHERE username = '"+req.query.username+"'", function (err, row, fields) {
    			if (err) throw err;
          
              if(row[0] !== undefined){
                  if(req.query.password == row[0].password){
                      var val = 'name='+req.query.username+';pass='+req.query.password+'';
                      
                      res.cookie("MyName", val, {expire: 400000 + Date.now()});
                      fs.readFile('public/index.txt', function(err, data){
                          res.writeHead(200, {'Content-Type': 'text/html'});
                          res.write(data);
                          res.end();
                      });
                  }else{
                     var MyBody = "<script>window.location.href = '/login';</script>"
                     res.clearCookie('MyName');
                     res.end(MyBody);
                  }
              }else{
                  var MyBody = "<script>window.location.href = '/login';</script>"
                 res.clearCookie('MyName');
                 res.end(MyBody);
              }
          });
     
     }else{
         var MyBody = "<script>window.location.href = '/login';</script>"
         res.clearCookie('MyName');
         res.end(MyBody);
     }
 })



 app.get('/login',function(req, res){
     res.clearCookie('MyName');
     fs.readFile('public/Login.txt', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
      });
 })


app.get('/newacount',function(req, res){
    fs.readFile('public/newacount.txt', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
    });
});


app.get('/singn',function(req, res){
    
    
     var sql = "INSERT INTO `users` (`Id`, `name`, `username`, `password`, `image`, `frends`, `date`) VALUES (null, '"+req.query.fn+"','"+req.query.us+"','"+req.query.ps+"','','force',null)";
      
      db.query(sql, function (err, result) {
        if (err) throw err;
      });   

     var myrq = "<table> <tr> تم التسجيل </tr><tr><td> اسم المستحدم هو </td><td> "+req.query.us+" </td></tr><tr><td> كلمة مرور هو </td> <td>"+req.query.ps+"</td></tr></table> "+
         '<div class="NewUserPage" onclick=\'Href("/login");\'> <a href="/login"> تسجيل الدخول </a> </div>'; 
     

     res.send(myrq);
});


app.get('/globalemessage',function(req,res){
    
    db.query("SELECT * FROM globalemessage", function(err, roo,fields) {
        db.query("SELECT * FROM globalemessage WHERE Id > ("+roo.length+"-20);", function(err, row,fields) {
           
            var lop = row.map(function (e){
                 return e.Id;
            }) ;
            var lop1 = row.map(function (e){
                 return e.sharinmessage;
            }) ;
            var lop2 = row.map(function (e){
                 return e.sender;
            }) ;
            function mylop() {
                        var coo =" ";
                for (var i = 0; i < lop.length; i++) {
                    coo += '<div class="ContenerDiv ">'+
                        '<span class="ParsonSpan">'+
                        '</span>'+
                        '<span class="TheNameSpan">'+lop2[i]+
                        '</span>'+
                        '<br>'+
                        '<!-- content of massege which shering-->'+
                        '<span class="PublicationSpan">'+lop1[i]+
                        '</span>'+
                        '<!-- mange the coments and stars by adding or show -->'+
                        '<span class="ConmmentManageSpan">'+
                            '<!-- click to show the comentss -->'+
                            '<span class="CommentSpan" onclick=""> تعليقت </span>'+
                            '<!-- click to do star -->'+
                            '<span class="StarSpan">'+
                                '<span class="StarIco">\u2605</span>|'+
                                '<span class="StarCount">0</span>'+
                            '</span>'+
                                '<!-- form for writing coments  -->'+
                            '<input type="text" name="TheComment" placeholder="اكتب تعليق..."/>'+
                            '<button   class="Commenting" > ارسل </button>'+
                        '</span>'+
                        '<!-- contaning all the comants for the massege-->'+
                        '<span class="CommentsSpan '+lop[i]+'">'+
                        '</span>'+
                    '</div>';
            }
            return coo;
        }
            res.send(mylop());
        });
    });
});


app.get('/newmessage',function(req,res){
    
    db.query("SELECT * FROM globalemessage WHERE Id > "+req.query.firsId+";", function(err, row,fields) {
        if(row.length !== 0) {
            var lop = row.map(function (e){
                 return e.Id;
            });
            var lop1 = row.map(function (e){
                 return e.sharinmessage;
            });
            var lop2 = row.map(function (e){
                 return e.sender;
            });
            function mylop1() {
                        var coo =" ";
                for (var i = 0; i < lop.length; i++) {
                    coo += '<div class="ContenerDiv ">'+
                        '<span class="ParsonSpan">'+
                        '</span>'+
                        '<span class="TheNameSpan">'+lop2[i]+
                        '</span>'+
                        '<br>'+
                        '<!-- content of massege which shering-->'+
                        '<span class="PublicationSpan">'+lop1[i]+
                        '</span>'+
                        '<!-- mange the coments and stars by adding or show -->'+
                        '<span class="ConmmentManageSpan">'+
                            '<!-- click to show the comentss -->'+
                            '<span class="CommentSpan" onclick=""> تعليقت </span>'+
                            '<!-- click to do star -->'+
                            '<span class="StarSpan">'+
                                '<span class="StarIco">\u2605</span>|'+
                                '<span class="StarCount">0</span>'+
                            '</span>'+
                                '<!-- form for writing coments  -->'+
                            '<input type="text" name="TheComment" placeholder="اكتب تعليق..."/>'+
                            '<button   class="Commenting" > ارسل </button>'+
                        '</span>'+
                        '<!-- contaning all the comants for the massege-->'+
                        '<span class="CommentsSpan '+lop[i]+'">'+
                        '</span>'+
                    '</div>';
           
                }
                return coo;
            }
            res.send(mylop1());
        }else{
            res.send(null);
        }
    })
});


app.get('/moremessage',function(req,res){

    db.query("SELECT * FROM globalemessage WHERE (Id < "+req.query.lastId+") AND (Id > ("+req.query.lastId+"-20) );", function(err, row,fields) {
        var lop = row.map(function (e){
             return e.Id;
        });
        var lop1 = row.map(function (e){
             return e.sharinmessage;
        });
        var lop2 = row.map(function (e){
             return e.sender;
        });
        function mylop2() {
                    var coo =" ";
            for (var i = 0; i < lop.length; i++) {
                coo += '<div class="ContenerDiv ">'+
                    '<span class="ParsonSpan">'+
                    '</span>'+
                    '<span class="TheNameSpan">'+lop2[i]+
                    '</span>'+
                    '<br>'+
                    '<!-- content of massege which shering-->'+
                    '<span class="PublicationSpan">'+lop1[i]+
                    '</span>'+
                    '<!-- mange the coments and stars by adding or show -->'+
                    '<span class="ConmmentManageSpan">'+
                        '<!-- click to show the comentss -->'+
                        '<span class="CommentSpan" onclick=""> تعليقت </span>'+
                        '<!-- click to do star -->'+
                        '<span class="StarSpan">'+
                                '<span class="StarIco">\u2605</span>|'+
                                '<span class="StarCount">0</span>'+
                            '</span>'+
                            '<!-- form for writing coments  -->'+
                        '<input type="text" name="TheComment" placeholder="اكتب تعليق..."/>'+
                        '<button   class="Commenting" > ارسل </button>'+
                    '</span>'+
                    '<!-- contaning all the comants for the massege-->'+
                    '<span class="CommentsSpan '+lop[i]+'">'+
                    '</span>'+
                '</div>';
        }
        return coo;
    }
        res.send(mylop2());
    })
});








app.get('/spacialmessage',function(req,res){
    db.query("SELECT frends FROM users WHERE username = '"+req.query.me+"'", function(err, row,fields) {
        var lop = row.map(function (e){
             return e.frends;
        });
        var lop1 = lop[0].split(';');
        function mylop3() {
            var coo =" ";

            for (var i = 0; i < lop1.length; i++) {
                coo += '<li class="OlLi  '+lop1[i]+'" >'+lop1[i]+'</li>';
            }
            coo += '<li id="AddFrends" > اضافة اصدقاء </li><li id="reback" onmouseup="document.getElementById(\'OlMain\').style.display = \'none\';" > رجوع </li>';

            return coo;
        }
        res.send(mylop3());
    })
});










app.get('/spacialmessageselect',function(req,res){

    db.query("SELECT * FROM users", function(err, row,fields) {
        var lop = row.map(function (e){
             return e.Id;
        });
        var lop1 = row.map(function (e){
             return e.name;
        });
        var lop2 = row.map(function (e){
             return e.username;
        });

        function mylop4() {
            var coo =" ";

            for (var i = 0; i < lop.length; i++) {
                coo += '<div id="NewFrinds">'+
                            '<span class="ParsonSpan">'+
                            '</span>'+
                            '<span class="TheNameSpan">'+lop1[i]+
                            '</span>'+
                            '<span class="frSet '+lop2[i]+'" >'+
                             '   اضافة'+
                            '</span>'+
                        '</div>';
            }
            coo += '<div id="NewFrinds" style="justify-content: center; color :navy" onclick="DivMainSpacilMsInner.innerHTML=\'\';"> تم </div>';
            return coo;
        }

        res.send(mylop4());
    })
});

app.get('/spacialselectfrend',function(req,res){


    db.query("SELECT * FROM spacialmessage WHERE (sender='"+req.query.me+"' AND sendto='"+req.query.sento+"') OR (sender='"+req.query.sento+"' AND sendto='"+req.query.me+"');", function(err, row,fields) {
         
        if (row.length >0) {
            var lop = row.map(function (e){
                 return e.Id;
            });
            var lop1 = row.map(function (e){
                 return e.message;
            });
            var lop2 = row.map(function (e){
                 return e.sender;
            });
        
        function mylop5() {
            var coo =" ";
            for (var i = 0; i < lop.length; i++) {
                coo += '<div class="MessageContenrDiv c'+lop2[i]+'" >'+
                    '<span class="ParsonSpan">'+
                    '</span>'+
                    '<span class="TheNameSpan">'+lop2[i]+
                    '</span> <br>'+
                    '<span class="TheMessageSpan">'+lop1[i]+
                    '</span>'+
                '</div>';

            }
            return coo;
        }
        
        res.send(mylop5());
        }else{res.send()}
    });
});

app.get('/comment',function(req,res){
        db.query("SELECT * FROM comments WHERE sendto = '"+req.query.thisId+"'", function(err, row,fields) {
        var lop = row.map(function (e){
             return e.Id;
        });
        var lop1 = row.map(function (e){
             return e.comment;
        });
        var lop2 = row.map(function (e){
             return e.sender;
        });

        function mylop6() {
            var coo =" ";
            for (var i = 0; i < lop.length; i++) {
                coo += '<div class="CommentContenrDiv">'+
                            '<span class="TheNameSpan">'+lop2[i]+
                            '</span>'+
                            '<br>'+
                            '<span class="TheCommentSpan">'+lop1[i]+
                                                
                            '</span>'+
                        '</div>';

            }
            return coo;
        }
        res.send(mylop6());
    });
})




app.get('/globalemessagee',function(req,res){
    var sql = "INSERT INTO globalemessage (`Id`, `sharinmessage`, `sender`, `stars`, `date`) VALUES (null,'"+req.query.sharingvalue+"','"+req.query.me+"',null,null)";

    db.query(sql, function (err, result) {
      if (err) throw err;
    });   
    res.send("Good");
})

app.get('/commenting',function(req,res){
    var sql = "INSERT INTO `comments` (`Id`, `comment`, `sender`, `sendTo`, `date`) VALUES (NULL, '"+req.query.comment+"', '"+req.query.me+"', "+req.query.thisId+", null)";
    db.query(sql, function (err, result) {
      if (err) throw err;
    });

     db.query("SELECT * FROM comments WHERE sendTo = "+req.query.thisId+"", function(err, row,fields) {
        var lop = row.map(function (e){
             return e.Id;
        });
        var lop1 = row.map(function (e){
             return e.comment;
        });
        var lop2 = row.map(function (e){
             return e.sender;
        });

        function mylop6() {
            var coo =" ";
            for (var i = 0; i < lop.length; i++) {
                coo += '<div class="CommentContenrDiv">'+
                            '<span class="TheNameSpan">'+lop2[i]+
                            '</span>'+
                            '<br>'+
                            '<span class="TheCommentSpan">'+lop1[i]+
                                                
                            '</span>'+
                        '</div>';

            }
            return coo;
        }
        res.send(mylop6());
    });
})





app.get('/sendmessage',function(req,res){
     var sql = "INSERT INTO `spacialmessage` (`Id`, `message`, `sender`, `sendto`, `date`) VALUES (NULL, '"+req.query.mess+"', '"+req.query.me+"', '"+req.query.sento+"', null)";
     db.query(sql, function (err, result) {
        if (err) throw err;
      });
    res.send("Good");
})


app.get('/setnewfrind',function(req,res){
    db.query("SELECT frends FROM users WHERE username = '"+req.query.me+"'", function(err, row,fields) {
        
        function lapin() {
            var sql = "UPDATE `users` SET `frends` = '"+row[0].frends+";"+req.query.setfrnds+"' WHERE username = '"+req.query.me+"'";
            db.query(sql, function (err, result) {
              if (err) throw err;
            });
        } lapin();
    });
    
    res.send("Good");
    
})



app.get('/profile',function(req, res){
     fs.readFile('public/profile.txt', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
      });
 })



app.get('/option',function(req, res){
     fs.readFile('public/option.txt', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
      });
 })

// app.get('/login',function(req,res){
//     res.send("login");
// })

// app.get('/login',function(req,res){
//     res.send("login");
// })


        

 



 var server = app.listen(8080, function() {
     var host = server.address().address;
     var port = server.address().port;
     console.log('running !!..');

 }) 
 