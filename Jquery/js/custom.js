
// instancia jquery e evita conflitos
// jQuery(function($){

$(document).ready(function(){ 

    $('.owl-carousel').owlCarousel();

    let titulos = $('h4') // tag
    let itens = $('.featured-item') // class
    let destaques = $('#featured') // id


    console.log(titulos.first());

    // Configuração de produtos

     $('featured-item a').addClass('btn btn-dark strech-link');

    //  $('.featured-item:first h4').append('<span class ="badge bg-secondary">Novo</span>')
    //  $('.featured-item h4').after('texto simples')
    // $('.featured-item:first h4').start('<span class="badge bg=secondary">Blabla</span>')
    // $('.featured-item:first h4').fadeIn(2000)
    // $('.featured-item:first h4').fadeOut(2000)

    $('.featured-item h4').dblclick(function(){

       $(this).css({
            'color': '#f00',
            'background': '#ff0',
            'font-weight': '100',
        });
    });

    /* MANIPULAÇÃO DE EVENTO */

    $('.featured-item a').on('click', function(event){

        event.preventDefault();

        alert('Produto esgotado');

    })
    
})