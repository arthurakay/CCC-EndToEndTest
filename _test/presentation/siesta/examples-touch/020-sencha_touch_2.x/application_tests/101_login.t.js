StartTest(function(t) {

    t.chain(
        { waitFor : 'componentVisible', args : '#logInButton' },

        function(next) {
            t.cq1('#userNameField').setValue('John Doe');
            t.cq1('#passwordField').setValue('SecretUnhackablePW');
            next();
        },

        { action : 'tap', target : '>> #logInButton' },

        // We'd like to find a headshot icon the DOM, that's proof the main app has been launched ok
        { waitFor : 'compositeQuery', args : 'contacts => .headshot' },

        function(next) {
            t.pass('Should be able login login and see contact list');
            next();
        },

        { action : 'tap', target : 'contacts => .headshot' },

        { waitFor : 'componentVisible', args : 'map' },

        function(next) {
            t.pass('Should see a detail view with map after tapping a contact');
        }
    );
});
