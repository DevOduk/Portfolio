var menu = document.getElementById("menuList");
menu.style.transition = ".4s ease-in-out";
    function CloseMenu() {
        menu.style.left = "-500px";
    }
    function OpenMenu() {
        if (menu.style.left == "0px") {
            menu.style.left = "-500px";            
        } else {
        menu.style.left = "0px";
        }
    }



var State = false;
var slash = document.getElementsByClassName("fa-slash");


function Password() {
    var passwordInput = document.getElementById("password");
    if (State) {
        passwordInput.setAttribute("type", "password");
        State = false;
    } else {
        passwordInput.setAttribute("type", "text");
        State = true;
        slash.style.opacity = "1";
    }
}
function Password5() {
    var input1 = document.getElementById("password5");
    
    if (State) {
        input1.setAttribute("type", "password");
        State = false;
    } else {
        input1.setAttribute("type", "text");
        State = true;
    }
}
function Password2() {
    var passwordInput2 = document.getElementById("password2");
    if (State) {
        passwordInput2.setAttribute("type", "password");
        State = false;
    } else {
        passwordInput2.setAttribute("type", "text");
        State = true;
    }
}

    function CloseForm(){
        var form = document.getElementById("formContainer");
        form.style.opacity = "0";
        setTimeout(function() {
        form.style.display = "none";
    }, 1000);
    }
    


function Login() {
    var form = document.getElementById("formContainer");

    if (form.style.opacity == "0" || form.style.display == "none") {
        form.style.opacity = "0";
        form.style.display = "block";
        form.style.visibility = "visible"; // Set visibility to show the element
        
        // Force a reflow to ensure the transition works properly
        form.offsetWidth;

        form.style.transition = "opacity 1s ease";
        form.style.opacity = "1";

        setTimeout(function() {
            form.style.transition = "";
        }, 1000);
    } else {
        form.style.opacity = "0";
        form.style.transition = "opacity 1s ease";
        
        // Using a callback to set display and visibility after the animation completes
        setTimeout(function() {
            form.style.visibility = "hidden"; // Hide the element
            form.style.display = "none";
            form.style.transition = "";
        }, 1000);
    }
}

function ToggleNav() {
    var nav = document.getElementById("Navigatio");
    var navp = document.getElementById("popuppolicies");
    nav.style.bottom = "-230px";
    navp.style.opacity = "1";
        navp.style.top = "50%";
}

function ToggleCookiesNav(){
    var nav = document.getElementById("Navigatio");
    nav.style.bottom = "-230px";
}

function TogglePolicies() {
    var navp = document.getElementById("popuppolicies");
    navp.style.top = "-130vh";
    navp.style.opacity = "0";
}
/* function CloseCookiePolicies() {
    var navp = document.getElementById("popuppolicies");
    var confirmed = document.getElementById("confirmed");
    navp.style.top = "-130vh";
    navp.style.opacity = "0";
    setTimeout(function() {
        confirmed.style.display = "block"
        }, 400);
    
}
*/
function CloseCookiePolicies() {
    var navp = document.getElementById("popuppolicies");
    var confirmed = document.getElementById("confirmed");
    navp.style.top = "-130vh";
    navp.style.opacity = "0";

    setTimeout(function() {
        navp.style.opacity = "0"; // Fade out the popup
        confirmed.style.display = "block";
        confirmed.style.transform = "scale(1)"; // Display the confirmation

        setTimeout(function() {
            confirmed.style.display = "none"; // Hide the confirmation
            navp.style.display = "none"; // Hide the popup
            navp.style.opacity = "1"; // Reset opacity for next display
        }, 2100); // 3000 milliseconds = 3 seconds for confirmation display
    }, 400); // 3000 milliseconds = 3 seconds for popup display
}



var now = new Date();
var hours = now.getHours();
var greetingElement = document.getElementById("greeting");

setTimeout(function(){
    if (hours >= 0 && hours < 12) {
    greetingElement.textContent = "Good Morning!🥰";
} else {
    greetingElement.textContent = "Good Evening!🥰";
} 
    }, 0);




/*/ 
    const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

function switchTheme(e) {
    if (e.target.checked) {
        document.querySelector("body").style.backgroundColor = "white";
        document.querySelector(".mainnav").style.backgroundColor = "gainsboro";
        document.querySelector(".active").style.backgroundColor = "black";
        document.querySelector(".active").style.color = "white";
        document.querySelectorAll(".mainnav ul a").forEach(link => { link.style.color = "black"; });
        document.querySelectorAll(".active li").forEach(link => { link.style.color = "white"; });
        document.getElementById("heroDecription").style.color = "black";
        document.querySelector(".title h1").style.color = "black";
        document.querySelector(".hero ").style.backgroundColor = "rgba(220, 220, 220, 0.693)";
        document.querySelectorAll(".social-media1, .social-media i").forEach(icon => { icon.style.color = "black"; });
        document.getElementById("contactSocials").style.backgroundColor = "rgb(153, 153, 153)";
        document.getElementById("contactSocials").style.color = "black";
        document.querySelector("footer").style.backgroundColor = "gainsboro";
        document.querySelector("footer").style.color = "black";
        document.querySelectorAll("footer a").forEach(link => { link.style.color = "blue"; });
        
        document.querySelectorAll(".AboutContainer .right p").forEach(p =>{p.style.color = "black"; p.style.fontWeight = "500";})
        document.querySelectorAll(".AboutContainer .right li").forEach(p =>{p.style.color = "black"; p.style.fontWeight = "400";})

    }
    else {
        document.querySelectorAll(".AboutContainer .right p").forEach(p =>{p.style.color = "white"; p.style.fontWeight = "300";})
        document.querySelectorAll(".AboutContainer .right li").forEach(p =>{p.style.color = "white"; p.style.fontWeight = "300";})
        document.querySelector("body").style.backgroundColor = "black";
        document.querySelector(".mainnav").style.backgroundColor = "black";
        document.querySelector(".mainnav").style.color = "white";
        document.querySelector(".hero ").style.backgroundColor = "transparent";
        document.getElementById("heroDecription").style.color = "white";
        document.querySelectorAll(".mainnav ul a").forEach(link => { link.style.color = "white"; });
        document.querySelectorAll(".active li").forEach(link => { link.style.color = "white"; });
        document.querySelectorAll(".social-media1, .social-media i").forEach(icon => { icon.style.color = "white"; });
        document.getElementById("contactSocials").style.backgroundColor = "transparent";
    }    
}

toggleSwitch.addEventListener('change', switchTheme, false);
/*/


const arrowUp = document.querySelector('.ArrowUp');
arrowUp.style.opacity = '0';
window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    // Calculate the scroll position to show the element when halfway to the bottom
    const halfwayPosition = documentHeight - windowHeight - windowHeight / .3;

    // Toggle the visibility of the element
    if (scrollPosition >= halfwayPosition) {
        arrowUp.style.opacity = '1';
    } else {
        arrowUp.style.opacity = '0';
    }
});