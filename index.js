 var drums=document.getElementsByClassName("drum");



var music=[];
for(var j=0;j<7;j++)
{
  var nm=j+1;
  var temp=new Audio("sounds/"+nm+".mp3");
  music.push(temp);
}

for(var i=0;i<drums.length;i++){

  drums[i].addEventListener("click",function(){

     music[this.value].play();
     callanimation(this.value);
  });

}

function callanimation(drumnum)
{
  drums[drumnum].classList.add("pressed");
  setTimeout(function(){
    drums[drumnum].classList.remove("pressed");
  },100);

}

document.addEventListener("keypress",function(event){
  if(event.key=="w")
  {
    music[0].play();
    callanimation(0);
  }
  else if(event.key=="a")
  {
    music[1].play();
    callanimation(1);
  }
  else if(event.key=="s")
  {
    music[2].play();
    callanimation(2);
}
  else if(event.key=="d")
  {
    music[3].play();
    callanimation(3);
  }
  else if(event.key=="j")
  {
    music[4].play();
    callanimation(4);
  }
  else if(event.key=="k")
  {
    music[5].play();
    callanimation(5);
  }
  else if(event.key=="l")
  {
    music[6].play();
    callanimation(6);
  }



});
