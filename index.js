
         
         function input(){
       
    segundoblocoA.style.display="none";
    rosto.style.display="none"; 
    
    googlino.style.display="block";
    x.style.display="block"; 
    ir.style.display="block"; 
         } 
         
  function bod(){
         

    segundoblocoA.style.display="block";
    rosto.style.display="block"; 
    bodAa.style.display="block";
    
    googlino.style.display="none";
    x.style.display="none"; 
    ir.style.display="none"; 
    sua.style.display="none";
       }
    
       
  function eli() {
  document.getElementById('input').value =''; 
  }
  
  function go() {
  
  sua.style.display="block";
  bodAa.style.display="none";
  
  var input = document.getElementById('input').value ;
  document.getElementById('pesq').innerText=input ;
  }   
  
 
     