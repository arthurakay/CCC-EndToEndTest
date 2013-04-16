StartTest(function(t) {
    t.getHarness([
        '601_siesta_ui_failing.t.js'
    ]);

    t.diag('Verify no layouts occur due to assertion added to its store');

    var before = 0;
    var after = 0;

    t.chain(
        { waitFor : 'rowsVisible', args : 'testgrid' },
        { action : 'doubleclick', target : 'testgrid => .x-grid-row' },

        { waitFor : 1000 },

        function(next) {
            Ext.each(Ext.ComponentQuery.query('container'), function(c) {
                before += c.layoutCounter;
            });
            
            var testgrid = Ext.ComponentQuery.query('testgrid')[0];
            
            // Adding an assertion should not cause a relayout, same goes for view refresh
            testgrid.store.tree.getNodeById('601_siesta_ui_failing.t.js').get('test').pass("some assertion")

            // Updating a test record should not cause a relayout, same goes for view refresh
            testgrid.getRootNode().firstChild.set('title', 'foo');

            Ext.each(Ext.ComponentQuery.query('container'), function(c) {
                after += c.layoutCounter;
            });

            t.is(after, before, 'No layouts caused by test')
        }
    );
});
