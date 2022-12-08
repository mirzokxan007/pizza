let input = document.querySelector("#pomidor"),
  input1 = document.querySelector("#kolbasa"),
  input2 = document.querySelector("#bodring"),
  input3 = document.querySelector("#qoziqorin");
  input4 = document.querySelector("#mayanez");
  input5 = document.querySelector("#ketchup");
  input6 = document.querySelector("#cheese");
  input7 = document.querySelector("#zaytun");

let pomidor = document.querySelector(".pomidor"),
    mayanez = document.querySelector(".mayanez"),
  kolbasa = document.querySelector(".kolbasa"),
  bodring = document.querySelector(".bodring"),
  qoziqorin = document.querySelector(".qoziqorin"),
  ketchup = document.querySelector(".ketchup"),
  cheese = document.querySelector(".cheese"),
  zaytun = document.querySelector(".zaytun"),
  summa = document.querySelector(".summa");
  total =0;  

pomidor.style.display = "none";

input.addEventListener("click", function (e) {
  if (e.target.checked) {
    pomidor.style.display = "block";
    total +=15000;
    summa.textContent = `${total}`;
  } else {
    pomidor.style.display = "none";
    total -= 15000;
    summa.textContent = `${total}`;
    
  }
  
});



kolbasa.style.display= "none";
  
input1.addEventListener("click", function (e) {
  if (e.target.checked){
    kolbasa.style.display = "block";
    total +=22000;
    summa.textContent = `${total}`;
  }
 else {
    kolbasa.style.display = "none";
     total -=22000;
     summa.textContent = `${total}`;
  }
  
  
})

bodring.style.display = "none";

input2.addEventListener("click", function (e) {
  if (e.target.checked) {
    bodring.style.display = "block";
    total +=10000;
    summa.textContent = `${total}`;
  } else {
    bodring.style.display = "none";
    total -=10000;
    summa.textContent = `${total}`;
  
  }

});
qoziqorin.style.display = "none";

input3.addEventListener("click", function (e) {
  if (e.target.checked) {
    qoziqorin.style.display = "block";
    total +=23000;
    summa.textContent = `${total}`;
   
  } else {
    qoziqorin.style.display = "none";
    total -= 23000;
    summa.textContent = `${total}`;
   
  }


});
mayanez.style.display = "none";

input4.addEventListener("click", function (e) {
  if (e.target.checked) {
    mayanez.style.display = "block";
    total +=15000;
    summa.textContent = `${total}`;
  } else {
    mayanez.style.display = "none";
    total -= 15000;
    summa.textContent = `${total}`;
    
  }
  
});
ketchup.style.display = "none";

input5.addEventListener("click", function (e) {
  if (e.target.checked) {
    ketchup.style.display = "block";
    total +=15000;
    summa.textContent = `${total}`;
  } else {
    ketchup.style.display = "none";
    total -= 15000;
    summa.textContent = `${total}`;
    
  }
  
});
cheese.style.display = "none";

input6.addEventListener("click", function (e) {
  if (e.target.checked) {
    cheese.style.display = "block";
    total +=15000;
    summa.textContent = `${total}`;
  } else {
    cheese.style.display = "none";
    total -= 15000;
    summa.textContent = `${total}`;
    
  }
  
});
zaytun.style.display = "none";

input7.addEventListener("click", function (e) {
  if (e.target.checked) {
    zaytun.style.display = "block";
    total +=15000;
    summa.textContent = `${total}`;
  } else {
    zaytun.style.display = "none";
    total -= 15000;
    summa.textContent = `${total}`;
    
  }
  
});

