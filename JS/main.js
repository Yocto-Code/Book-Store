alert("Sorry But The Website Isn't Done To Now Because There Is'nt Back End Developer.")

let Books = document.querySelectorAll(".Book");

let Height = window.innerHeight;

let Nav = document.querySelector("nav");

let UpButton = document.querySelector(".up");

UpButton.onclick = () => {

    window.scroll({

        top: 0,

        left: 0,

        behavior: "smooth"

    })

}

window.onscroll = () => {

Books.forEach(Book => {
    
    if (window.scrollY >= Book.offsetTop - window.innerHeight / 5 && window.scrollY <= Book.offsetTop + window.innerHeight / 5) {
    
        Book.style.left = "-100%";

        Book.style.opacity= "0";

    } else {

        Book.style.left = "0%";

        Book.style.opacity= "1";

    }

})

if (window.scrollY >= Height) {

    Nav.style.opacity = 0.8;

    Nav.style.top = "0%";

} else {

    Nav.style.opacity = 0;

    Nav.style.top = "-8%"

}

if (window.scrollY >= (Height)) {

    UpButton.style.opacity = 0.8;
    
    UpButton.style.bottom = "2%";

} else {

    UpButton.style.opacity = 0;
    
    UpButton.style.bottom = "-75px";


}

}