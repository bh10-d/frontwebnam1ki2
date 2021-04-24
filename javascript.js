let varNavbar = document.getElementsByClassName("navbar");
window.onscroll = function() {addClassNav()};

function addClassNav() {
    if(document.body.scrollTop>100 || document.documentElement.scrollTop>100){
        varNavbar[0].classList.add("scrollScreen");
    }
    else{
        varNavbar[0].classList.remove("scrollScreen");
    }
}

