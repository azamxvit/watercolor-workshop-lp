$(document).ready(function() {
    
    $("a.scroll-link, .nav-link").on("click", function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top - 75
            }, 800);
            $('.navbar-collapse').collapse('hide');
        }
    });

    $("#toggleMaterials").click(function() {
        $("#materialsList").slideToggle(400);
        $(this).text(function(i, text){
            return text.includes("Посмотреть") ? "Скрыть список материалов" : "Посмотреть список материалов";
        });
    });

    let isUsd = false;
    const rate = 95;

    $("#currencyToggle").click(function() {
        isUsd = !isUsd;
        
        $(".current-price, .old-price").each(function() {
            let rubVal = $(this).data("rub");
            
            if (isUsd) {
                let usdVal = Math.round(rubVal / rate);
                $(this).text(usdVal + " $");
            } else {
                let formatted = rubVal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
                $(this).text(formatted + " ₽");
            }
        });

        if (isUsd) {
            $(this).text("Вернуть цены в Рублях (₽)");
        } else {
            $(this).text("Показать цены в USD ($)");
        }
    });
});