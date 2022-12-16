// Narbar Login

var loginstatus = JSON.parse(localStorage.getItem("PhoneNumber")) || [];

//log out funnction
function logoutFunc(){
    localStorage.clear();
    alert("Log Out Succesfully ");
    window.location.href="Cart_Page.html";  
}

function ShopFunc(){

}

function carFunc(){

}

function OfferFunc(){

}

//  Login Page 

if(loginstatus.length>0){
    // document.getElementById("loginbtn").innerHTML=<i class="fa-solid fa-user"></i>;
    document.getElementById("loginbtn").innerText="Team Titan";
    // document.getElementById("LoginToViewOffer").innerText="Hurray ! Click Here To View Offers"
    var div = document.createElement("div");
        div.setAttribute("class" ,"dropdown");
        var span = document.createElement("span");
        span.innerText="See More";
       
        var div2= document.createElement("div");
        div2.setAttribute('class', "dropdown-content");
        var p = document.createElement("p");
        p.setAttribute("id","logoutNavBar");
        p.addEventListener("click", logoutFunc);
        p.innerText= "Log Out";

        var p2 = document.createElement("p");
        p2.addEventListener("click", ShopFunc);
        p2.innerText= "Shop";

        var p3 = document.createElement("p");
        p3.addEventListener("click", carFunc);
        p3.innerText= "Cart";

        var p4 = document.createElement("p");
        p4.addEventListener("click", OfferFunc);
        p4.innerText= "Offer";

        div2.append(p2,p3,p4,p);
        div.append(span ,div2);
        document.getElementById("navbarLogin").append(div);

  }

document.querySelector("#loginbtn").addEventListener("click", validateLogin)


function validateLogin(){
        console.log(loginstatus.length)
      if(loginstatus.length==0){
        showlogin();
      }
      
}

function showlogin() {
    document.querySelector("#loginpage").style.display = "block";
  
    document.querySelector("#loginpage").style.opacity = "1";

}
document.querySelector("#closebtn").addEventListener("click", hidelogin)

function hidelogin() {
    document.querySelector("#loginpage").style.display = "none";
    document.querySelector('body').style.opacity = "1";

}
// var phnnumber = loginform.loginphone.value;
document.querySelector("#loginform").addEventListener("submit", function () {
    event.preventDefault()
    var phnnumber = loginform.loginphone.value;
    // console.log('number:', typeof(phnnumber))
    if (phnnumber.length == 10) {
        document.querySelector("#loginbottom").innerHTML = "";
        var para = document.createElement("p")
        para.innerText = "Enter OTP sent to +91 " + phnnumber;
        var otpinput = document.createElement("input");
        otpinput.setAttribute("type", "number");
        otpinput.setAttribute('placeholder', "Enter OTP here")
        var btn = document.createElement("input");
        btn.setAttribute('type', 'submit');
        btn.setAttribute('value', "CONTINUE");
        btn.style.backgroundColor = "#10847e";
        btn.style.color = "white"
        var paralast = document.createElement('p');
        var error = document.createElement('p');
        error.style.color = "red"

        paralast.innerText = "By clicking continue, you agree with our Privacy Policy"
        btn.addEventListener('click', function () {
            otpconfirm(otpinput.value, error,phnnumber)
        })

        document.querySelector("#loginbottom").append(para, otpinput, error, btn, paralast);

    } else {
        document.querySelector("#errormsg").innerText = "Enter a 10 Digit Valid Mobile number"
        document.querySelector("#errormsg").style.color = "red";
    }


})
function otpconfirm(v, error, phnnumber) {
   
    if (v == "1234") {
        localStorage.setItem("PhoneNumber",JSON.stringify(phnnumber));
        document.querySelector("#loginpage").style.display = "none";
        document.querySelector("#loginbtn").innerText = "Team Titan"

        alert("Login Succesfully");
        
        window.location.href="Cart_Page.html";  
        

 
    } else {
        error.innerText = "The OTP entered is incorrect."
    }
    
}