var k=document.getElementById('firstname');
k.onfocus=show;
k.onblur=show1;
var h=document.getElementById('secondname');
h.onfocus=show;
h.onblur=show1;
function show(){
  this.style.borderBottom='3px solid black';
  this.style.fontSize="1em";
  this.style.fontWeight="900";
  this.style.boxShadow="5px 5px 5px inset lightblue,-3px -3px 5px black";
}
function show1(){
  this.style.boxShadow="0 0";
}
