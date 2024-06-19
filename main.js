import './style.css'

setInterval(()=> {
  let deadline = new Date("Jan 5, 2030 15:37:25").getTime();

  let now  = new Date().getTime();
  let t = deadline - now;
  let days = Math.floor(t/(1000*60*60*24));
  let hours = Math.floor((t%(1000*60*60*24))/(1000*60*60));
  let minutes = Math.floor((t%(1000*60*60))/(1000*60));
  let seconds = Math.floor((t%(1000*60))/1000);

  document.getElementById('app').innerHTML = days + "dias "
        + hours+ "horas "+minutes+"minutos "+ seconds + "segundos "}, 1000);


