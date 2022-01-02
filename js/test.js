(function () {

  var nombre= prompt("Bienvenida/o a Cuenta regresiva de cumpleaños 2.0 por favor ingrese su nombre");
  let birthday= prompt("Muchas gracias " + nombre + "! por favor ingrese la fecha de su cumpleaños en el siguiente formato: (dd mm) y le diremos cuanto tiempo falta para que tenga un añito más.");
   
  const milisegundos = 1 ,
      second = milisegundos * 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24;

      //Para mostrar en directo lo que ocurre cuando el contador llega a cero  
      //let birthday = "Dec 27, 2021 21:00:00:00";
  
    
      countDown = new Date(birthday + 2021 ).getTime(),
      x = setInterval(function () {
        let now = new Date().getTime(),
          distance = countDown - now;
  
        (document.getElementById("days").innerText = Math.floor(distance / day)),
          (document.getElementById("hours").innerText = Math.floor(
            (distance % day) / hour
          )),
          (document.getElementById("minutes").innerText = Math.floor(
            (distance % hour) / minute
          )),
          (document.getElementById("seconds").innerText = Math.floor(
            (distance % minute) / second  
          )),
          (document.getElementById("milisegundos").innerText = Math.floor(
            (distance % second) / milisegundos
          ))
          ;
  
        //do something later when date is reached
        if (distance < 0) {
          let headline = document.getElementById("headline"),
            countdown = document.getElementById("countdown"),
            content = document.getElementById("content");
            
            
  
          headline.innerText = "Feliz cumpleaños " +nombre+ "!!!";
          countdown.style.display = "none";
          content.style.display = "block";
          
         
  
          clearInterval(x);
        }
        //seconds
      }, 0);
  })();
