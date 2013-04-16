StartTest(function(t) {

    t.chain(
        { waitFor : 'CQ', args : 'loginview' },
        
        function(next) {
            t.pass('Should find login view on app start');
            t.ok(t.cq1('#logInButton'), 'Should find a login button');
        }
    );
});
