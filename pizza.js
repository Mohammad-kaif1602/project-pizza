

var main = {
    distance: '0%',
    origin: 'left',
    opacity: 4,
    reset:true,
    duration: 1500,
    // interval: 600,
    delay: 200,
    easing: 'ease-out',
    scale: 0.85,
    opacity: 0
}
var about = {
    distance: '150%',
    origin: 'left',
    opacity: 0,
    reset:true,
    duration: 1500,
    scale: 0.55,
    // delay: 500,
}
var about_text = {
    distance: '150%',
    origin: 'left',
    opacity: 0,
    reset:true,
    duration: 1500,
    scale: 0.55,
    // delay: 500,
}

var card = {
    
    opacity: 0,
    reset:true,
    duration: 700,
    scale: .85,
    
    // delay: 500,
}
var form = {
    
    opacity: 0,
    reset:true,
    duration: 800,
    scale: .85,
    
    // delay: 500,
}


var review = {
    distance: '100%',
    origin: 'top',
    opacity: 0,
    reset:true,
    duration: 500,
    scale: .80,
    // delay: 500,
}

var profile = {
    distance: '150%',
    origin: 'bottom',
    opacity: 0,
    reset:true,
    duration: 1500,
    scale: 0.55,
    // delay: 500,
}


var main_image = {
    distance: '150%',
    origin: 'top',
    opacity: 0,
    reset:true,
    duration: 1500,
    scale: 0.55,
    // delay: 500,
}
var h1 = {
    distance: '150%',
    origin: 'left',
    opacity: 0,
    reset:true,
    duration: 1500,
    scale: 0.55,
    // delay: 500,
}


ScrollReveal().reveal(".main" ,main,{delay:200, interval:200 })


ScrollReveal().reveal(".img" ,about,{delay:200, easing:"ease-out",interval:200 })


ScrollReveal().reveal(".about-text" ,about_text,{delay:200, easing:"ease-out",interval:200 })


ScrollReveal().reveal(".menu-card" ,card,{delay:200, easing:"ease-out",interval:200 })


ScrollReveal().reveal(".galary-card" ,card,{delay:200, easing:"ease-out",interval:200 })


ScrollReveal().reveal("h1",about,{delay:200, easing:"ease-out",interval:200 })


ScrollReveal().reveal("form",form,{delay:200, easing:"ease-out",interval:200 })


ScrollReveal().reveal(".review-card",review,{delay:200, easing:"ease-out",interval:200 })


ScrollReveal().reveal(".profile",profile,{delay:200, easing:"ease-out",interval:200 })


ScrollReveal().reveal("section",form,{delay:200, easing:"ease-out",interval:200 })


ScrollReveal().reveal(".main-image",main_image,{delay:200, easing:"ease-out",interval:200 })


ScrollReveal().reveal("h1",h1,{delay:200, easing:"ease-out",interval:200 })








// ScrollReveal().reveal ( ".main",main);