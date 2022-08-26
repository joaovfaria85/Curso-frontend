
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

    // Callback

    $('.featured-item:nth(1)')
    .hide(2000, function(){
        // este é o callback
        console.log($(this).find('h4').text() + ' esgotado')

    })
    .show(500, function(){
        console.log($(this).find('h4').text() + ' em estoque')
    })

    // Animações

    const duracao = 1000 // equivalente a 1 segundo
    $('.featured-item:nth(0)') // O Contador dos objetos começa do 0 
     .hide(duracao)
     .show(duracao)
     .fadeOut(duracao)
     .fadeIn(duracao)
     .toggle(duracao)
     .toggle(duracao)

    // $('#form-submit').on('click', function(e){

    //     e.preventDefault()

    //     if($('#email').val() !=''){

    //         $('#email').animate({
    //             opacity: "toggle",
    //             top: "-50"

    //         } ,duracao, function(){
    //             console.log($(this).val())
    //         })


    //     }

    // });

    // EventListenner .nav-modal-open

    $('.nav-modal-open').on('click', function(e){

        e.preventDefault();

        let elem = $(this).attr('rel')

        $('.modal-body').html($('#'+elem).html())
        $('.modal-header h5.modal-title').html($(this).text())

        let myModal = new bootstrap.Modal($('#modelId'))

        myModal.show()

    })

    // Validação de campos

    function validate( elem ){
        if( elem.val() == '') {
  
           console.log('o campo de '+ elem.attr('name') + ' é obrigatório')
  
           elem.parent().find('.text-muted').show()
  
           elem.addClass('invalid')
  
           return false
        } else {
           elem.parent().find('.text-muted').hide()
           elem.removeClass('invalid')
        }
     }
  
     $('body').on('submit', '.modal-body .form', function(e){
  
        e.preventDefault()
  
        const inputName = $('#nome')
        const inputEmail = $('#email')
  
        validate(inputName)
        validate(inputEmail)
  
        if(inputEmail.hasClass('invalid') || inputName.hasClass('invalid')){
           console.log('verificar campos obrigatórios')
           return false
        } else {
           $(this).submit()  
        }
  
     })
     $('body').on('submit', '.modal-body .form', function(e){
  
        e.preventDefault()
  
        const inputCPF = $('#CPF')
  
        validate(inputCPF)
  
        if(inputCPF.hasClass('invalid')){
           console.log('verificar campos obrigatórios')
           return false
        } else {
           $(this).submit()  
        }
  
     })
  
     $('body').on('blur', '#nome', function(){
        validate($(this))
     })
  
     $('body').on('blur', '#email', function(){
        validate($(this))
     })
 
     $('body').on('blur', '#date', function(){
        validate($(this))
        $(this).mask('00/00/0000');
     }) 
  
     $('body').on('blur', '#cep', function(){
        validate($(this))
        $(this).mask('00000-000');
     })
  
     $('body').on('blur', '#fone', function(){
        validate($(this))
        $(this).mask('00000-0000');
     })
  
     $('body').on('blur', '#cpf', function(){
        validate($(this))
        $(this).mask('000.000.000-00');
     })
      
})
