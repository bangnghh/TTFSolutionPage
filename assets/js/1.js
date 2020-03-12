$(document).ready(function () {
    $(window).scroll(function () {
        if ($(window).scrollTop() > 40) {
            $(".logo").attr("src", "https://bangnghh.github.io/TTFSolutionPage/assets/img/logo-white.png");
            $(".navbar").removeClass("navbar-light");
            $(".navbar").addClass("navbar-dark");
            $(".navbar").addClass("navbar-dark");
            $(".navbar-brand").addClass("red-font");
            $(".header").addClass("blue-bg");
            $(".nav-link").addClass("white-font");
            $(".navbar-collapse").addClass("scroll-lineheight");
            $(".lan-flag").addClass("flag-height");
            $(".lan-flag").removeClass("ml-2");
        } else {
            $(".logo").attr("src", "https://bangnghh.github.io/TTFSolutionPage/assets/img/logo.png");
            $(".navbar").addClass("navbar-light");
            $(".navbar").removeClass("navbar-dark");
            $(".navbar-brand").removeClass("red-font");
            $(".header").removeClass("blue-bg");
            $(".nav-link").removeClass("white-font");
            $(".navbar-collapse").removeClass("scroll-lineheight");
            $(".lan-flag").removeClass("flag-height");
            $(".lan-flag").addClass("ml-2");
        }

    })
})
