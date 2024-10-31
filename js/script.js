$(document).ready(function () {

    //search input
    $(".search-icon").click(function () {
        $(".header-search").toggle();
    })
    //menu
    $(".menu-icon").click(function () {
        $(".hided-black").show();
        $(".hided-menu").show();
        $(".menu-icon").hide();
        $(".menu-icon2").show();
    })
    $(".menu-icon2").click(function () {
        $(".hided-black").hide();
        
        $(".hided-menu").hide();
        
        $(".menu-icon").show();
        $(".menu-icon2").hide();
    })


    //فرم ورود و ثبت نام
    $(".user-icon").click(function () {
        $(".form-section1").show();

    })


    //بستن فرم ثبت نام و ورود
    $(".form-close").click(function () {
        $(".form-section1").hide();

    })


    // کارت ها
    $('.owl-carousel').owlCarousel({
        items: 5,
        loop: true,
        center: true,
        autoplay: true,
        margin: 10,
        responsive: {
            0: {
                items: 1.5
            },
            500: {
                items: 3
            },
            700: {
                items: 4
            },
            1000: {
                items: 6
            },

        }



    });

    $(".menu-icon2").click(function () {
       
    })


    $(".page-chat").click(function(){
        $(".chat").toggle(500);
    })


    $('.parent-container').magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        gallery:{
            enabled:true
        },
        
      });

      $(".little-color").click(function(){
        $(".color-panel").toggle();
      })
})

/* let x = document.querySelector(".hided-black");
let y = document.querySelector(".menu-icon");
let y2 = document.querySelector(".menu-icon2");
function show_menu() {
    x.style.display = "inline-block";
    y.style.display = "none";
    y2.style.display = "inline-block";
}
function hide_menu() {
    x.style.display = "none";
    y.style.display = "inline-block";
    y2.style.display = "none";
}
 */

