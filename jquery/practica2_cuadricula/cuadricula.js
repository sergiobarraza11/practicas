$(document).ready(function () {
    
    $('.boton_f1').css({position: 'relative', left: '80%'  });
    $('.boton_f2').css({position: 'relative', left: '80%'  });

    $('.cuadricula').css({border: '3px solid tomato', height: '90', width: '90px', display: 'inline-block'});


    
    $('#boton_f1').click(function () { 
        $('.cuadro .cuadricula:first').css({background: 'blue'});
        $('.cuadro .cuadricula:nth-of-type(2)').css({background: 'blue'});
        
        $('.cuadro .cuadricula:nth-of-type(6)').css({background: 'blue'});
        $('.cuadro .cuadricula:nth-of-type(7)').css({background: 'blue'});
        $('.cuadro .cuadricula:nth-of-type(8)').css({background: 'blue'});
        $('.cuadro .cuadricula:nth-of-type(14)').css({background: 'blue'});
        $('.cuadro .cuadricula:nth-of-type(29)').css({background: 'blue'});
        $('.cuadro .cuadricula:nth-of-type(35)').css({background: 'blue'});
        $('.cuadro .cuadricula:nth-of-type(36)').css({background: 'blue'});
        $('.cuadro .cuadricula:nth-of-type(37)').css({background: 'blue'});
        $('.cuadro .cuadricula:nth-of-type(41)').css({background: 'blue'});
        $('.cuadro .cuadricula:nth-of-type(42)').css({background: 'blue'});
       
        
        
        $('.cuadro .cuadricula:nth-of-type(3)').css({background: 'white'});
        $('.cuadro .cuadricula:nth-of-type(4)').css({background: 'white'});
        $('.cuadro .cuadricula:nth-of-type(5)').css({background: 'white'});

    });
    $('#boton_f2').click(function () { 
    


        $('.cuadro .cuadricula:first').css({background: 'blue'});
        $('.cuadro .cuadricula:nth-of-type(2)').css({background: 'blue'});
        $('.cuadro .cuadricula:nth-of-type(3)').css({background: 'blue'});
        $('.cuadro .cuadricula:nth-of-type(4)').css({background: 'blue'});
        $('.cuadro .cuadricula:nth-of-type(5)').css({background: 'blue'});
        $('.cuadro .cuadricula:nth-of-type(6)').css({background: 'blue'});
        $('.cuadro .cuadricula:nth-of-type(7)').css({background: 'blue'});
        $('.cuadro .cuadricula:nth-of-type(8)').css({background: 'white'});
        $('.cuadro .cuadricula:nth-of-type(14)').css({background: 'white'});
        $('.cuadro .cuadricula:nth-of-type(29)').css({background: 'white'});
        $('.cuadro .cuadricula:nth-of-type(35)').css({background: 'white'});
        $('.cuadro .cuadricula:nth-of-type(36)').css({background: 'white'});
        $('.cuadro .cuadricula:nth-of-type(37)').css({background: 'white'});
        $('.cuadro .cuadricula:nth-of-type(41)').css({background: 'white'});
        $('.cuadro .cuadricula:nth-of-type(42)').css({background: 'white'});
       
    });
    
});


