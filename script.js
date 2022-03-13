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

var name= $('#name').val();
  if(validateName(user)!==true){
    alert("Name must be alphabets")
  }

function validateName(user){
    let nameRegex = /^[a-zA-Z]*$/;
    if(nameRegex.test(user)){
        return (true);
    } else {
        return (false);
    }
}


    

