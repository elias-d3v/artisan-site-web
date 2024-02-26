let mybutton = document.getElementById("monBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
    window.scrollTo({top: 0, behavior: 'smooth'});
}



function scrollToTarget(e, id) {
    e.preventDefault(); 
    var target = document.getElementById(id);
    var offset = 150; 
    
    window.scrollTo({
      top: target.offsetTop - offset, behavior: 'smooth' 
    });
  }