
function fun1() {
  var rng=document.getElementById('r1'); 
  var p=document.getElementById('one'); 
  p.innerHTML= 'Сумма кредита: '+  rng.value + ' рублей' ;
  document.getElementById("one").style.fontSize = "16px";
  var p=document.getElementById('two'); 
  p.innerHTML='Сумма погашения кредита: '+ rng.value* 1.25 +' рублей';
  document.getElementById("two").style.fontSize = "16px";
}

function fun2() {
  var rng1=document.getElementById('r2'); 
  var p=document.getElementById('three'); 
  p.innerHTML= 'Срок кредита: '+ rng1.value ;
  document.getElementById("three").style.fontSize = "16px"; 
}

function fun3() {
  var p=document.getElementById('three');
  var a=document.getElementById('one');
  var b=document.getElementById('two');
  p.innerHTML = '';
  a.innerHTML = '';
  b.innerHTML = '';
  }
 
  $(document).ready(function(){
    $('[data-toggle="popover_right"]').popover({
      placement : 'right'
    });
    $('[data-toggle="popover_left"]').popover({
        placement : 'left'
      });
  });
