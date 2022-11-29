document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('#copyright-date').innerHTML = new Date().getFullYear();




    // var scrollPos;

    // window.onscroll = function() {
    //     var pos = window.pageYOffset | document.body.scrollTop;
    //     var navbar = document.querySelector('nav.navbar');
    //     if(!navbar.classList.contains('lt-lg')) {
    //         if(pos > 120) {
    //             if(!navbar.classList.contains('bg-blur')) {
    //                 navbar.classList.add('bg-blur');
    //             }
    //         } else {
    //             if(navbar.classList.contains('bg-blur')) {
    //                 navbar.classList.remove('bg-blur');
    //             }
    //         }
    //     }
    // }

    // var navbarTogglerMutationObserver = new MutationObserver(function (mutationsList, observer) {
    //     var toggler = document.querySelector('.navbar-toggler');
    //     var navbar = document.querySelector('nav.navbar');
    //     if(!toggler.classList.contains('collapsed')) {
    //         navbar.classList.add('bg-blur');
    //         navbar.classList.add('lt-lg');
    //     }
    // });
    
    // var navbarCollapseCollapseMutationObserver = new MutationObserver(function(mutationsList, observer) {
    //     var navbarCollapseCollapse = document.querySelector('div.navbar-collapse.collapse');
    //     var navbar = document.querySelector('nav.navbar');
    //     if(navbarCollapseCollapse && !navbarCollapseCollapse.classList.contains('show')) {
    //         navbar.classList.remove('bg-blur');
    //         navbar.classList.remove('lt-lg');
    //     }
    // });
    
    // navbarTogglerMutationObserver.observe(document.querySelector('button.navbar-toggler'), { attributes: true });
    // navbarCollapseCollapseMutationObserver.observe(document.querySelector('div.navbar-collapse.collapse'), { attributes: true });
}, false);


