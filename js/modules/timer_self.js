function timer() {
    const days = document.querySelector('#days'),
          hours = document.querySelector('#hours'),
          minutes = document.querySelector('#minutes'),
          seconds = document.querySelector('#seconds'),
          deadlineInfo =document.querySelector('.deadline');
          
    const deadline = new Date('2022-06-30T23:59:59');
    const timerBloks = {
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds
    };

    deadlineInfo.textContent = `${deadline.toLocaleString()}`;

    function addZero(x, y) {
        if (y< 10) {
            x.textContent = `0${y}`;
        } else {
            x.textContent = `${y}`;
        }
    }

    function timeOver(x) {
        x.textContent = '00';
    }

    setInterval(() => {
        let currentTime = Date.now(),
            marginTime = deadline - currentTime;

        if (marginTime <= 0) {
            timeOver(days);
            timeOver(hours);
            timeOver(minutes);
            timeOver(seconds);
            clearInterval();

        } else {
            timerBloks.days = Math.floor(marginTime / (1000 * 60 * 60 * 24));
            timerBloks.hours = Math.floor((marginTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            timerBloks.minutes = Math.floor((marginTime % (1000 * 60 * 60)) / (1000 * 60));
            timerBloks.seconds = Math.floor((marginTime % (1000 * 60)) / 1000);
                                
            addZero(days, timerBloks.days);
            addZero(hours, timerBloks.hours);
            addZero(minutes, timerBloks.minutes);
            addZero(seconds, timerBloks.seconds);
        }           
    }, 1000);    
}
// timer();

export default timer;