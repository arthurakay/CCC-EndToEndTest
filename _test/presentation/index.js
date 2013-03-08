var Harness = Siesta.Harness.Browser;

Harness.configure({
    title     : 'Awesome Test Suite',

    hostPageUrl : 'http://localhost:8000/app/index.html',

    preload : []
});

Harness.start(
    '_01.js'
);

