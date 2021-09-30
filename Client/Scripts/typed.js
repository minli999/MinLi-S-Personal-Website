const options = {
    strings: [
            'Hello,^500 welcome to my website.^500',
             '\nMaking the things <i>easier</i>^500 \nis my <strong>target</strong>.^500',
            "<strong>Coding</strong> and <strong>Data Anaysis</strong> are my <i>secret weapons</>.^1000",
            "Click here to <a href=","/about",">Read more about me</a>"
    ],
    typeSpeed: 75, // speed
    startDelay: 0, // delay
    loop: true, // loop
};

const typed = new Typed('.element', options);