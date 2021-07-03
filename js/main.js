var ctaform = document.getElementById('ctaform');
ctaform.onclick = function () {
    alert('Отправляя данные, Вы соглашаетесь с политикой конфиденциальности')
}

$(function () {
    $(window).scroll(function () {
        $('.opportunity').each(function () {
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+650) {
                $(this).addClass("fadeInUp");
            }
        });
    });
})

$(function () {
    $(window).scroll(function () {
        $('.form').each(function () {
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+550) {
                $(this).addClass("bounceIn");
            }
        });
    });
})