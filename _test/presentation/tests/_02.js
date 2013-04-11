StartTest(function (t) {

    var todos;

    var getTodos = function () {
        todos = document.getElementById('todo-list');
    };

    t.diag('Test adding a TODO to the list.');

    t.chain(
        function (next) {
            getTodos();

            t.is(todos.children.length, 0, '0 TODOs');
            next();
        },

        {
            action  : 'type',
            element : '#new-todo',
            text    : 'Foo Bar[ENTER]'
        },

        function (next) {
            getTodos();

            t.is(todos.children.length, 1, '1 TODOs');
            next();
        }
    );

    //test cleanup: we don't want any localstorage saved between tests
    localStorage.clear();
});