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
            text    : 'Foo Bar'
        },

        //SIMULATE THE FORM SUBMISSION
        function(next) {
            var form = document.getElementsByTagName('form')[0];

            var evt = document.createEvent('HTMLEvents');
            evt.initEvent('submit', false, true);
            form.dispatchEvent(evt);

            next();
        },

        function (next) {
            getTodos();

            t.is(todos.children.length, 1, '1 TODOs');
            next();
        },

        function(next) {
            //test cleanup: we don't want any localstorage saved between tests
            localStorage.clear();

            next();
        }
    );
});