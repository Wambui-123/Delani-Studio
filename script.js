$('#validate').submit(function(e){
    e.preventDefault(); 
    var mail = $('#email').val().toLowercase();
})
function validateemail(email){
    let regex= /^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\. [a-zA-Z0-9-]+)*$/;
    if(email.match(regex)){
        return (true);
    } else{
        return (false);
    }
};
