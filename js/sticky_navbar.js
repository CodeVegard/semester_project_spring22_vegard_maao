// I wanted to have a sticky header on scroll, taking inspiration here:
// https://www.w3schools.com/howto/howto_js_navbar_sticky.asp 

let width = window.screen.width;

let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.position = "fixed";
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.position = "fixed";
    document.getElementById("navbar").style.top = "-60px";
  }
  prevScrollpos = currentScrollPos;
  if (window.scrollY === 0){
    document.getElementById("navbar").style.position = "absolute";
    document.getElementById("navbar").style.top = "";
  }
  if (width <= 910){
    console.log("log");
    document.getElementById("navbar").style.position = "absolute";
    document.getElementById("navbar").style.top = "";
  }
}

// I also want the menu button on mobile to work like this, but it seems a little trickier. 
// I'll look into that if there's time for that. 