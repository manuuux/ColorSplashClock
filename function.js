function hora(){
  var ahora = new Date();
  var H = ahora.getHours();
  var M = ahora.getMinutes();
  var S = ahora.getSeconds();
  if(H<=9){
    document.getElementById("hora").innerHTML="0"+H;
  }else{
    document.getElementById("hora").innerHTML=H;
  }
  if(M<=9){
    document.getElementById("min").innerHTML="0"+M;
  }else{
    document.getElementById("min").innerHTML=M;
  }
  if(S<=9){
    document.getElementById("seg").innerHTML="0"+S;
  }else{
    document.getElementById("seg").innerHTML=S;
  }
  console.log(H+":"+M);
}
