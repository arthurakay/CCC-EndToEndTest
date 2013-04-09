'use strict';
beforeEach(module('todomvc'));

describe('TodoCtrl', function () {
    var scope, ctrl;

    beforeEach(inject(function($rootScope, $controller) {
        scope = $rootScope.$new();
        ctrl = $controller(TodoCtrl, {$scope: scope});
    }));

    afterEach(function() {
        ctrl = null;
        scope = null;
    });

    describe('addTodo() method', function() {

        //sanity test
        it('should be a function', function () {
            expect(typeof scope.addTodo).toBe('function');
        });


        it('should correctly add a "todo" to its internal stack', function () {
            expect(typeof scope.todos).toBe('object');
            expect(scope.todos.length).toEqual(0);

            scope.newTodo = 'Foo';
            scope.addTodo();

            expect(scope.todos.length).toEqual(1);
            //newTodo should be reset
            expect(scope.newTodo).toEqual('');
        });
    });

    describe('removeTodo() method', function() {

        //sanity test
        it('should be a function', function () {
            expect(typeof scope.removeTodo).toBe('function');
        });

        it('should correctly remove a "todo" from its internal stack', function () {
            var todo = 'Foo';

            expect(typeof scope.todos).toBe('object');
            expect(scope.todos.length).toEqual(0);

            scope.newTodo = todo;
            scope.addTodo();
            expect(scope.todos.length).toEqual(1);

            scope.removeTodo(todo);
            expect(scope.todos.length).toEqual(0);
        });
    });

    describe('markAll() method', function() {

        //sanity test
        it('should be a function', function () {
            expect(typeof scope.markAll).toBe('function');
        });

        it('should correctly mark all todos on the stack as "completed = true"', function () {
            var todo = 'Foo';

            expect(typeof scope.todos).toBe('object');
            expect(scope.todos.length).toEqual(0);

            scope.newTodo = todo;
            scope.addTodo();
            expect(scope.todos.length).toEqual(1);

            scope.markAll(true);
            expect(scope.todos[0].completed).toEqual(true);
        });
    });

    describe('clearDoneTodos() method', function() {

        //sanity test
        it('should be a function', function () {
            expect(typeof scope.clearDoneTodos).toBe('function');
        });

        it('should correctly remove todos from its internal stack which are marked as "completed = true"', function () {
            var todo = 'Foo';

            expect(typeof scope.todos).toBe('object');
            expect(scope.todos.length).toEqual(0);

            scope.newTodo = todo;
            scope.addTodo();
            expect(scope.todos.length).toEqual(1);

            scope.markAll(true);
            scope.clearDoneTodos();
            expect(scope.todos.length).toEqual(0);
        });
    });

});