var Harness = Siesta.Harness.Browser;

Harness.configure({
    title : 'Awesome Test Suite',

    hostPageUrl : 'http://localhost:8000/app/index.html',

    preload : []
});

Harness.start(
    'tests/_sanity.js',
    'tests/_01.js',
    'tests/_02.js'
);

