(function () {
    let header = document.querySelector('.header__wrapper');
    window.onscroll = () =>{
        if (window.pageYOffset > 50){
            header.classList.add('header_active');
        } else{
           header.classList.remove('header__active');
        }
    };
   }());