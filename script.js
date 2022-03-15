function validateEmail(email) {
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email.match(regex)) {
      return true;
    } else {
      return false;
    }
  }
  
  function validateName(name) {
    let nameRegex = /^[a-zA-Z]*$/;
    if (name.match(nameRegex)) {
      return true;
    } else {
      return false;
    }
  }
  
  $("#btn").click(function (e) {
    e.preventDefault;
    var mail = $("#email").val().toLowerCase();
    var user = $("#name").val();
  
    if (validateEmail(mail) !== true) {
      alert("Enter a valid email");
    }
  
    if (validateName(user) !== true) {
      alert("Name must be alphabets");
    }
  
    if(validateEmail(mail) && validateName(user)){
        alert(`${user}, we have received your message. Thank you for reaching out to us!`);
    }
    
  });
  
  $("#design-logo").click(function () {
    $("#design").show();
  });
  $("#design").click(function () {
    $("#design").slideUp();
    $("#design-logo").slideDown("1500");
  });
  $("#develop-logo").click(function () {
    $("#develop").show();
  });
  $("#develop").click(function () {
    $("#develop").slideUp();
    $("#develop-logo").slideDown("1500");
  });
  $("#project-logo").click(function () {
    $("#project").show();
  });
  $("#project").click(function () {
    $("#project").slideUp();
    $("#project-logo").slideDown("1500");
  });
  $("#img1").hover(
    function () {
      $("#hover1").show();
    },
    function () {
      $("#hover1").hide();
    }
  );
  $("#img2").hover(
    function () {
      $("#hover2").show();
    },
    function () {
      $("#hover2").hide();
    }
  );
  $("#img3").hover(
    function () {
      $("#hover3").show();
    },
    function () {
      $("#hover3").hide();
    }
  );
  $("#img4").hover(
    function () {
      $("#hover4").show();
    },
    function () {
      $("#hover4").hide();
    }
  );
  $("#img5").hover(
    function () {
      $("#hover5").show();
    },
    function () {
      $("#hover5").hide();
    }
  );
  $("#img6").hover(
    function () {
      $("#hover6").show();
    },
    function () {
      $("#hover6").hide();
    }
  );
  $("#img7").hover(
    function () {
      $("#hover7").show();
    },
    function () {
      $("#hover7").hide();
    }
  );
  $("#img8").hover(
    function () {
      $("#hover8").show();
    },
    function () {
      $("#hover8").hide();
    }
  );
  



    

