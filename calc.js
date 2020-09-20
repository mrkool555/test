window.addEventListener("load",function(){
  var section=document.querySelector(".main");
  var numberPad=section.querySelector(".number-pad");
  var disPlay=section.querySelector(".display");

  numberPad.onclick=function(e){
    console.log(e.target.id);
    var key = e.target.id;
    if (key == "equal") {
      console.log(disPlay.value);
      disPlay.value=eval(disPlay.value)} else 
      if (key == "clear") {
        disPlay.value="";} else{
    disPlay.value+=key;}
  }
})


