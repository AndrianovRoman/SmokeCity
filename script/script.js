

$('.sale-inside-image').magnificPopup({
    delegate: 'a',
    type: 'image',
    gallery: {
        enable: true
    }
    // other options
});

$('.sale-inside-image2').magnificPopup({
    delegate: 'a',
    type: 'image',
    gallery: {
        enable: true
    }
    // other options
});

$('.masters-items').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1087,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 901,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                arrows: false
            }
        }]
});

$('.sale-items').slick({
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    responsive: [
        {
            breakpoint: 1110,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
            }
        }]
})

// if(window.innerWidth  > 1110){
//     console.log(window.innerWidth );
//     $('.sale-inside-image').slick('unslick');
// } else {
//     $('.sale-inside-image').slick({
//         infinite: false,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         dots: false,
//         arrows: false,
//         responsive: [
//             {
//                 breakpoint: 1110,
//                 settings: {
//                     slidesToShow: 1,
//                     slidesToScroll: 1,
//                     dots: true,
//                 }
//             }]
//     })
// }

$('.sale-inside-image2').slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    responsive: [
        {
            breakpoint: 1112,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
            }
        }]
})


const btnM = $('#btnMain');
const btnF = $('#btnFooter')
const order = $('#Order');

btnM.click(() => {
    $('html, body').animate({
        scrollTop: $(order).offset().top
    }, 1000);
})

btnF.click(() => {
    $('html, body').animate({
        scrollTop: $(order).offset().top
    }, 1000);
})

const topLink = $('.topLink');

$(topLink).click(function() {
    $('html, body').animate({
        scrollTop: $($(this).attr("href")).offset().top + "px"
    }, {
        duration: 1000,
        easing: "swing"
    });
    return false;
});

const menuLink = $('.menuLink');

const hookah = $('.hookah');
const snacks = $('.snacks');
const teaCocktail = $('.teaCocktail');
const barCard = $('.barCard');

snacks.hide();
teaCocktail.hide();
barCard.hide();

menuLink.click((e) => {
    e.preventDefault();

    let pred = $('.menu-active');
    let link = e.target;

    hookah.hide();
    snacks.hide();
    teaCocktail.hide();
    barCard.hide();

    if(link.innerText === 'Кальяны'){
        $(pred).removeClass('menu-active');
        $(link).parent().addClass("menu-active");
        hookah.show();
    } else if(link.innerText === 'Закуски') {
        $(pred).removeClass('menu-active');
        $(link).parent().addClass("menu-active");
        snacks.show();
    } else if(link.innerText === 'Чай и б/а коктейли') {
        $(pred).removeClass('menu-active');
        $(link).parent().addClass("menu-active");
        teaCocktail.show();
    } else if(link.innerText === 'Барная карта'){
        $(pred).removeClass('menu-active');
        $(link).parent().addClass("menu-active");
        barCard.show();
    }
})

const form = $('.form-btn');

form.click((e) => {
    e.preventDefault();

    let name = $('#name');
    let phone = $('#phone');
    let input = $('.form-input');
    let hasError = false;

    input.css('border-color', 'rgb(98, 36, 223)');

    $('.error-input').hide();

    if(!name.val()){
        name.css('border-color', 'red');
        name.next().show();
        hasError = true;
    }
    if(!phone.val()) {
        phone.css('border-color', 'red');
        phone.next().show();
        hasError = true;
    }

    if(!hasError) {
        $.ajax({
            method: "POST",
            url: "https://testologia.site/checkout",
            data: { name: name.val(), phone: phone.val() }
        })
            .done(function( msg ) {
                if(msg.success) {
                    $('.order-inside-title').text('Спасибо, мы свяжемся с Вами в ближайшее время!');
                    $('.form').hide();
                } else {
                    alert('Возникла ошибка при оформлении заказа, позвоните нам и сделайте заказ!');
                }
            });
    }
})




const wow = new WOW(
    {
        boxClass:     'wow',      // animated element css class (default is wow)
        animateClass: 'animate__animated', // animation css class (default is animated)
        offset:       0,          // distance to the element when triggering the animation (default is 0)
        mobile:       true,       // trigger animations on mobile devices (default is true)
        live:         true       // act on asynchronously loaded content (default is true)
    }
);
wow.init();


$('#burger').click( function () {
    console.log('open');
    $('.menu').addClass('open');
});

document.querySelectorAll('#menu *').forEach((item) => {
    item.onclick = () => {
        document.getElementById('menu').classList.remove('open')
    }
})