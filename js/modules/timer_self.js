function timer() {
    const days = document.querySelector('#days'),
          hours = document.querySelector('#hours'),
          minutes = document.querySelector('#minutes'),
          seconds = document.querySelector('#seconds'),
          deadlineInfo =document.querySelector('.deadline');
          
    const deadline = new Date('2021-11-20T12:00:00');
    const timerBloks = {
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds
    };

    deadlineInfo.textContent = `${deadline.toLocaleString()}`;

    // function addZero(x) {
    //     if (timerBloks.x < 10) {
    //         x.textContent = `0${timerBloks.x}`;
    //     } else {
    //         x.textContent = `${timerBloks.x}`;
    //     }
    // }

    setInterval(() => {
        let currentTime = Date.now(),
            marginTime = deadline - currentTime;

        timerBloks.days = Math.floor(marginTime / (1000 * 60 * 60 * 24));
        timerBloks.hours = Math.floor((marginTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        timerBloks.minutes = Math.floor((marginTime % (1000 * 60 * 60)) / (1000 * 60));
        timerBloks.seconds = Math.floor((marginTime % (1000 * 60)) / 1000);
                    
        // days.textContent = `${timerBloks.days}`;
        // hours.textContent = `${timerBloks.hours}`;
        // minutes.textContent = `${timerBloks.minutes}`;
        // seconds.textContent = `${timerBloks.seconds}`;
        
        // addZero(days);
        // addZero(hours);
        // addZero(minutes);
        // addZero(seconds);

        if (timerBloks.days < 10) {
            days.textContent = `0${timerBloks.days}`;
        } else {
            days.textContent = `${timerBloks.days}`;
        }

        if (timerBloks.hours < 10) {
            hours.textContent = `0${timerBloks.hours}`;
        } else {
            hours.textContent = `${timerBloks.hours}`;
        }

        if (timerBloks.minutes < 10) {
            minutes.textContent = `0${timerBloks.minutes}`;
        } else {
            minutes.textContent = `${timerBloks.minutes}`;
        }

        if (timerBloks.seconds < 10) {
            seconds.textContent = `0${timerBloks.seconds}`;
        } else {
            seconds.textContent = `${timerBloks.seconds}`;
        }
    }, 1000);    


}

timer();

// export default timer;