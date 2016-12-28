// created type writer effect by using typed.js

setTimeout(function(){
    $("#home-phrase").typed({
        strings: ["Promoting Chinese martial arts since 2000"],
        typeSpeed: 30, // typing speed
        backDelay: 750, // pause before backspacing
        loop: false, // loop on or off (true or false)
        loopCount: false, // number of loops, false = infinite
        callback: function(){ } // call function after typing is done
    });
}, 0);

setTimeout(function(){
    $("#events-phrase").typed({
        strings: ["Find out where we will be performing next", "Come join one of our socials","Or simply get to know us more!"],
        typeSpeed: 30, // typing speed
        backDelay: 1000, // pause before backspacing
        loop: true, // loop on or off (true or false)
        loopCount: false, // number of loops, false = infinite
        callback: function(){ } // call function after typing is done
    });
}, 0);

setTimeout(function(){
    $("#officer-phrase").typed({
        strings: ["Meet our officers"],
        typeSpeed: 30, // typing speed
        backDelay: 1000, // pause before backspacing
        loop: false, // loop on or off (true or false)
        loopCount: false, // number of loops, false = infinite
        callback: function(){ } // call function after typing is done
    });
}, 0);

setTimeout(function(){
    $("#contact-phrase").typed({
        strings: ["Come practice with us"],
        typeSpeed: 30, // typing speed
        backDelay: 750, // pause before backspacing
        loop: false, // loop on or off (true or false)
        loopCount: false, // number of loops, false = infinite
        callback: function(){ } // call function after typing is done
    });
}, 100);