function init() {
    setInterval(function () {
        const dateGoal = new Date("Dec 25, 2021").getTime();
        let dateCurrent = new Date().getTime();
        let dateDifference = dateGoal - dateCurrent;

        const dayText = document.querySelector('#day');
        const hourText = document.querySelector('#hour');
        const minuteText = document.querySelector('#minute');
        const secondText = document.querySelector('#second');

        let dayDate = Math.floor(dateDifference / (1000 * 60 * 60 * 24));
        let hourDate = Math.floor((dateDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minuteDate = Math.floor((dateDifference % (1000 * 60 * 60)) / (1000 * 60));
        let secondDate = Math.floor((dateDifference % (1000 * 60)) / 1000);

        dayText.textContent = dayDate;
        hourText.textContent = hourDate;
        minuteText.textContent = minuteDate;
        secondText.textContent = secondDate;

        if (dateDifference < 0) {
            clearInterval();
            dayText.textContent = 'FINISH';
            hourText.textContent = 'FINISH';
            minuteText.textContent = 'FINISH';
            secondText.textContent = 'FINISH';
        };
    }, 1000);

    setInterval(moreSnowflakes, 500)

    function moreSnowflakes() {
        const windowWidth = window.innerWidth - 50;
        newSnowflake = document.createElement('p');
        newSnowflake.classList.add('snowflake');
        newSnowflake.textContent = '❆'
        newSnowflake.style.left = Math.random() * windowWidth + 'px';
        newSnowflake.style.animationDuration = Math.random() * 3 + 2 + 's';
        newSnowflake.style.opacity = Math.random();
        newSnowflake.style.fontSize = Math.random() * 30 + 10 + 'px';

        document.body.prepend(newSnowflake);

        function removeSnowflake() {
            newSnowflake.remove;
        }
        setTimeout(removeSnowflake, 5000);
    };

};

window.onload = init;