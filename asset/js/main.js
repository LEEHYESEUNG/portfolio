$(function(){

/**
 * 
 * viewport
 * @version 1.0.0
 * @since 
 * @author 
 * @pram
 */

function setScreenSize(){

    let vh = window.innerHeight * 0.01;

    document.documentElement.style.setProperty('--vh',`${vh}px`);
}

setScreenSize();
window.addEventListener('resize',setScreenSize);




/**
 * 
 * intro
 * @version 1.0.0
 * @since 
 * @author 
 * @pram
 */
const intro = gsap.timeline({})

intro
.addLabel('a')
.to('.intro',{
    yPercent:-100,
    delay: 6.7,
    ease:Power4.easeOut
})
.to('.left-box .char',{
    transform: "translate(0px, 0px)",
    rotateZ:0,
    transition: 1
})
.to(".right-box .char",{
    yPercent:-100,
    delay:0.7,
    stagger:0.05
})





/**
 * 
 * project - title
 * @version 1.0.0
 * @since 
 * @author 
 * @pram
 */
gsap.to('.project .title',{
scrollTrigger:{
    trigger:'.project .title-area',
    start:"top top",
    end:"bottom 50%",
    // markers:true,
    pin:".title-area",
    scrub:true
},
scale:3,
opacity:1
});






/**
 * 
 * project - item
 * @version 1.0.0
 * @since 
 * @author 
 * @pram
 */
$('.project-item').each(function(i,el){

    text = $(this).find('.text-box')
    
    gsap.from(text,{
        scrollTrigger:{
            trigger:el,
            start:"top top",
            end:"top top",
            // markers:true,
            scrub:1
        },
        opacity:0,
        yPercent:30
    })
});






/**
 * 
 * project - mouse
 * @version 1.0.0
 * @since 
 * @author 
 * @pram
 */
$(window).mousemove(function(e){

    w = $('.circle').width()/2;
    h = $('.circle').height()/2;

    x = e.clientX - w;
    y = e.clientY - h;

    gsap.to('.circle',{
        x:x,
        y:y
    })
});

$('.project .title-area').mouseover(function(){
    $('.circle').addClass('hide');
})
$('.title-area').mouseout(function(){
    $('.circle').removeClass('hide');
})
$('.project-item .link-item').mouseover(function(){
    $('.circle').addClass('hide');
})
$('.project-item .link-item').mouseout(function(){
    $('.circle').removeClass('hide');
})
$('.right-box .tel .char').mouseover(function(){
    $('.circle').addClass('contact').text("TELL");
})
$('.right-box .email .char').mouseover(function(){
    $('.circle').addClass('contact').text("Emall");
})
$('.right-box .notion .char').mouseover(function(){
    $('.circle').addClass('contact').text("노션");
})
$('.right-box .char').mouseout(function(){
    $('.circle').removeClass('contact').text("");
})
$('.menu-area').mouseover(function(){
    $('.circle').addClass('hide');
})
$('.menu-area').mouseout(function(){
    $('.circle').removeClass('hide');
})






/**
 * 
 * footer
 * @version 1.0.0
 * @since 
 * @author 
 * @pram
 */
$('.menu').click(function(e){

    $(this).toggleClass('open');

    if ( $(this).hasClass('open') ) {

        $('.menu-area').addClass('height');
        $('.link-item').addClass('on');
    }else{
        $('.menu-area').removeClass('height');
        $('.link-item').removeClass('on');
    }
});

 
$(window).scroll(function(){

    curr = $(this).scrollTop();
    target = $('.project').offset().top;

    if ( curr >= target ) {
        $('.menu-area').addClass('up');
    }else{
        $('.menu-area').removeClass('up');
    }


})











});