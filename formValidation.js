function validtion(){
    ///var user = document.getElementById(user).value;
    var pass = document.getElementById("pass").value;
    //var conpass = document.getElementById(conpass).value;
    //var num = document.getElementById(num).value;
    //var email = document.getElementById(email).value;

    console.log(typeof pass)
    console.log(pass.length)
   if(pass.length===0){
       document.getElementById("passErr").innerHTML = "EMPTY STRING";
   }
   else{
    document.getElementById("passErr").innerHTML = pass;
   }
    //passErr

}