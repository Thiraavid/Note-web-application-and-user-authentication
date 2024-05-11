gsap.from('#li',{
    y:-100,

    duration:1,
    stagger: 0.1
})


gsap.from('#mt',{
    y:10,
    opacity:0,
    duration:1,
    stagger: 0.1
})
gsap.from('#mp',{
    y:10,
    opacity:0,
    delay:0.8,
    duration:1,
    stagger: 0.1
})
gsap.from('#re',{
    x:-100,
   
 
    duration:1,
 
})
gsap.from('#lo',{
    x:100,
   
 
    duration:1,
 
})


ScrollReveal().reveal('.card-body',{
    origin: 'bottom' ,
    duration:1000,
    interval:200,
distance:'30px',
});
ScrollReveal().reveal('#h1',{
    origin: 'bottom' ,
    duration:1000,
    interval:200,
distance:'30px',
});
ScrollReveal().reveal('#p',{
    origin: 'bottom' ,
    duration:1000,
    interval:200,
distance:'30px',
});
ScrollReveal().reveal('#li1',{
  origin:'left',
    duration:1000,
    interval:200,
distance:'30px',
});

ScrollReveal().reveal('#li2',{
    origin: 'right' ,
    duration:1000,
    interval:200,
distance:'30px',
});