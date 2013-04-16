StartTest(function(t) {
    t.getHarness([
        {
            preload : ['missingfile.js'],
            url : '601_siesta_ui_passing.t.js'
        }
    ]);


    t.chain(
        { waitFor : 'rowsVisible', args : 'testgrid' },

        function(next) {
            var store   = t.cq1('testgrid').store;
            var test    = store.getNodeById('601_siesta_ui_passing.t.js');

            t.todo("TODO", function (t) {
                t.waitForHarnessEvent('testsuiteend', function() {
                    t.ok(test.get('test').isFailed(), 'Should find failed tests if there is a missing preload');
                });
            })
            
            Harness.launch([ test.get('descriptor') ]);
        }
    );
});
