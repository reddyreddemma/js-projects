var myp1 = document.querySelector(".myp1");
var mydiv1 = document.querySelector(".mydiv1");
var myp2 = document.querySelector(".myp2");
var mydiv2 = document.querySelector(".mydiv2");

myp1.addEventListener("click", function() {
    mydiv1.style.background = "lightblue";
});

myp1.addEventListener("click", changtext);

mydiv1.addEventListener("click", changtext2, true);

mydiv1.addEventListener("mouseover", function() {
    mydiv2.style.background = "lightpink";
});

function changtext() {
    myp1.textContent += "Welcome! We create simple and modern designs that meet your needs.";
}

function changtext2() {
    myp2.textContent += "Welcome!";
}

// Remove event listener after its use
myp1.removeEventListener("click", changtext);
