        (function ($) {
            $(document).ready(function () {
                $('.current-cat-parent').addClass('opened');
				$('.current-cat').parentsUntil('ul.product-categories').css("display", "block");
				
				
                //$('.current-cat-parent').find('.cat-menu-close').addClass('gurpreet');
                //$('.current-cat-parent').find('.cat-menu-close').next().next('ul.children').slideDown();
                //$('.current-cat-parent').next().addClass('gurpreet');

                // Categories menu opening
                $('.widget_product_categories .product-categories li.cat-parent').prepend('<div class="cat-menu-close"></div>');

                $(document).on("click", ".widget_product_categories .product-categories li.cat-parent:not(.opened) > .cat-menu-close", function (e) {
                    $(this).parent().addClass('opened');
                    $(this).next().next('ul.children').slideDown();
                });
                $(document).on("click", ".widget_product_categories .product-categories li.opened > .cat-menu-close", function (e) {
                    $(this).parent().removeClass('opened');
                    $(this).next().next('ul.children').slideUp();
                });

jQuery(".related.products h4").html("Relaterte produkter");

            });
        })(jQuery);
