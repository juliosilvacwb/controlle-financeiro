
function showAmount(amount) {
    document.getElementById("myAmmount").innerHTML = toReais(amount);
  }
  function toReais(amount){
    if(!amount.toString().includes('.'))
      amount = amount.toString()+'.00'; 
      
    value = amount.toString().split('.')[0];  
    cents = (amount.toString().split('.')[1]+'00').slice(0,2);
    
    return value+','+cents;
  }



  
function showAmount2(amount) {
    document.getElementById("myAmmount2").innerHTML = toReais(amount);
  }
  function toReais(amount){
    if(!amount.toString().includes('.'))
      amount = amount.toString()+'.00'; 
      
    value = amount.toString().split('.')[0];  
    cents = (amount.toString().split('.')[1]+'00').slice(0,2);
    
    return value+','+cents;
  }


  


