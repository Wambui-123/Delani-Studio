$('#validate').submit(function(e){
    e.preventDefault;
    var mail = $('#email').val().toLowerCase();
    if(validateEmail(mail)!== true){
        alert('Enter a valid email')
    }
    
})

function validateEmail(email){
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(email.match(regex)){
        return (true);
    } else {
        return (false);
    }
  
}

var user= $('#name').val(); 
  if(validateName(user)!==true){
    alert("Name must be alphabets")
  }

function validateName(name){
    let nameRegex = /^[a-zA-Z]*$/;
    if(name.match(nameRegex)){
        return (true);
    } else {
        return (false);
    }
}
$('#design-logo').click(function(){
    $('#design').show();
});
$('#design').click(function(){
    $('#design').slideUp();
    $('#design-logo').slideDown('1500');
});
$('#develop-logo').click(function(){
    $('#develop').show();
});
$('#develop').click(function(){
    $('#develop').slideUp();
    $('#develop-logo').slideDown('1500');
});
$('#project-logo').click(function(){
    $('#project').show();
});
$('#project').click(function(){
    $('#project').slideUp();
    $('#project-logo').slideDown('1500');
});
$('#img1').hover(function(){
    $('#hover1').show().offset($('#img1').offset());
}, function(){
    $('#hover1').hide();
});
$('#img2').hover(function(){
    $('#hover2').show().offset($('#img2').offset());
}, function(){
    $('#hover2').hide();
});
$('#img3').hover(function(){
    $('#hover3').show().offset($('#img3').offset());
}, function(){
    $('#hover3').hide();
});
$('#img4').hover(function(){
    $('#hover4').show().offset($('#img4').offset());
}, function(){
    $('#hover4').hide();
});
$('#img5').hover(function(){
    $('#hover5').show().offset($('#img5').offset());
}, function(){
    $('#hover5').hide();
});
$('#img6').hover(function(){
    $('#hover6').show().offset($('#img6').offset());
}, function(){
    $('#hover6').hide();
});
$('#img7').hover(function(){
    $('#hover7').show().offset($('#img7').offset());
}, function(){
    $('#hover7').hide();
});
$('#img8').hover(function(){
    $('#hover8').show().offset($('#img8').offset());
}, function(){
    $('#hover8').hide();
});


    

