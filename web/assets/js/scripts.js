let count = 0;
function myCounterSub() {

  if (count < 2) {
    count = 2;
  }
  count-=1;
  document.getElementById("btn").innerHTML = count;

 }

 function myCounterAdd() {
  count+=1;
  document.getElementById("btn").innerHTML = count;

 }
