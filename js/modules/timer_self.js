function timer() {
    const days = document.querySelector('#days'),
          hours = document.querySelector('#hours'),
          minutes = document.querySelector('#minutes'),
          seconds = document.querySelector('#seconds');
          
    const deadline = new Date('2021-11-20T12:00:00');

    let currentTime = Date.now();

    console.log(deadline);    
    console.log(deadline.getTime());
    console.log(currentTime);

    let marginTime = deadline - currentTime;

    console.log(marginTime);

    const timerBloks = {
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds
    };

    timerBloks.seconds = Math.floor(marginTime /1000);
    timerBloks.minutes = Math.floor(timerBloks.seconds /60);
    timerBloks.hours = Math.floor(timerBloks.minutes /60);
    timerBloks.days = Math.floor(timerBloks.hours / 24);
    
    
    console.log(timerBloks);


}

timer();

// export default timer;