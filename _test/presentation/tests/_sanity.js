StartTest(function (t) {

    t.diag('The application should load.');

    var h1 = document.getElementsByTagName('h1')[0];

    t.is(h1.innerHTML, 'todos', 'The H1 element should says "todos"');

});