var $doc = $(document),
        $body = $('body'),
        y = $doc.scrollTop(),
        color1 = 0;

    $doc.on('scroll', function(){
    y = $doc.scrollTop();
    color1 = y/75 ;
    color2 = y;
    $('header').find('img').css('filter', 'brightness('+ color1 +') grayscale(100)');
    $('header').find('a').css('color', 'hsla(0, 0%, '+ color2 +'%, 1)' )
    
    });

