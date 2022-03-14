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
    $('#design-logo').slideDown('1500');
    $('#design').show();
});
$('#design').click(function(){
    $('#design').slideUp();
    $('#design-logo').slideDown('1500');
});


    

