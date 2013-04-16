StartTest(function (t) {

    var todos;

    var getTodos = function () {
        todos = document.getElementById('todo-list');
    };

    t.diag('There should be zero TODOs when the app first loads.');

    t.chain(
        function (next) {
            getTodos();

            t.is(todos.children.length, 0, '0 TODOs');
            next();
        },

        function(next) {
            //test cleanup: we don't want any localstorage saved between tests
            localStorage.clear();

            next();
        }
    );
});