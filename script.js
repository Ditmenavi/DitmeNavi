$(function(){
	$('.box-menu .wrapper').on('click', function(){
		$('.box-menu').toggleClass('full-menu');
		$('.hamburger').toggleClass('active');
	});
	$('a').on('click', function(){
		$(this).siblings('a').removeClass('active');
		$(this).addClass('active');
	});
});

const deadline = 'July 7 2022';

function getTimeRemaining(endtime){
	const total = Date.parse(endtime) - Date.parse(new Date());
	const seconds = Math.floor( (total/1000) % 60 );
	const minutes = Math.floor( (total/1000/60) % 60 );
	const hours = Math.floor( (total/(1000*60*60)) % 24 );
	const days = Math.floor( total/(1000*60*60*24) );
  
	return {
	  total,
	  days,
	  hours,
	  minutes,
	  seconds
	};
  };
  document.getElementById("giay").innerHTML = getTimeRemaining(deadline).seconds;
  document.getElementById("phut").innerHTML = getTimeRemaining(deadline).minutes;
  document.getElementById("gio").innerHTML = getTimeRemaining(deadline).hours;
  document.getElementById("ngay").innerHTML = getTimeRemaining(deadline).days;
  setInterval(thptqg, 1000);
  function thptqg() {
	document.getElementById("giay").innerHTML = getTimeRemaining(deadline).seconds;
	document.getElementById("phut").innerHTML = getTimeRemaining(deadline).minutes;
	document.getElementById("gio").innerHTML = getTimeRemaining(deadline).hours;
	document.getElementById("ngay").innerHTML = getTimeRemaining(deadline).days;
  }
  