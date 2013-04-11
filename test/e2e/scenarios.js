'use strict';
describe('todomvc', function () {

    beforeEach(function () {
        localStorage.clear();
        browser().navigateTo('../app/index.html');
    });

    afterEach(function() {

    });


    describe('localstorage behavior', function() {
        it('should load with zero items in localstorage', function() {
            expect(repeater('#todo-list li').count()).toEqual(0);
            input('newTodo').enter('Foo Bar');
            expect(repeater('#todo-list li').count()).toEqual(1);
        });

    });

});
