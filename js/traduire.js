var dropdown=document.getElementById("dropdown")
var lang=document.getElementById("lang")
dropdown.addEventListener('click',function(){
  if(lang.style.display === 'none' || lang.style.display === '') {
    lang.style.display='block';
  }else{
    lang.style.display='none';
 }
})