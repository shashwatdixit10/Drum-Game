for(var i=0;i<document.querySelectorAll(".drum").length;i++){
document.querySelectorAll(".drum")[i].addEventListener("click",function() {
   var buttonInnerhtml = this.innerHTML;

   makesound(buttonInnerhtml);
   
   
});
}

document.addEventListener("keypress",function(event){
   makesound(event.key);
})

function makesound(key){
   
   switch (key) 
   {
      case "H":
         var audio1 = new Audio('sounds/crash.mp3');
         audio1.play();
         break;
      case "A":
         var audio2 = new Audio('sounds/kick-bass.mp3');
         audio2.play();
         break;
      case "R":
            var audio3 = new Audio('sounds/snare.mp3');
            audio3.play();
            break;
      case "M":
             var audio4 = new Audio('sounds/tom-1.mp3');
             audio4.play();
             break;
      case "O":
               var audio5 = new Audio('sounds/tom-2.mp3');
               audio5.play();
               break;
      case "N":
                  var audio6 = new Audio('sounds/tom-3.mp3');
                  audio6.play();
                  break;
      case "Y":
                     var audio7 = new Audio('sounds/tom-4.mp3');
                     audio7.play();
                     break;

   
      default: console.log(buttonInnerhtml);
         break;
   }
}
