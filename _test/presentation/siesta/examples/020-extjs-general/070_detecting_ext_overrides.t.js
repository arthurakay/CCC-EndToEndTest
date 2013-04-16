StartTest(function (t) {

    // Detecting global overrides of Ext JS is easy and helps you keep you application clean.
    // Ideally, you'd of course like to have 0 overrides but in a real life scenario this is not likely to happen.
    // Keeping track of the overrides is really great when it's time to upgrade to a new Ext JS version.

    // Skip for IE
    if (Ext.isIE) return;

    // Uncomment the 'patch' below to make this test fail
//    Ext.override(Ext.grid.View, {
//       render : function() {
//           // some patched version
//       }
//    });

    /* SETUP */

    var frame = Ext.getBody().createChild({ tag: "iframe" });

    var freshWin = window.frames[0].window;

    freshWin.document.open();

    freshWin.document.write(
        '<html><head><script type="text/javascript" src="http://cdn.sencha.io/ext-4.1.1-gpl/ext-all.js"></script></head><body></body></html>'
    );

    freshWin.document.close();

    /* EOF SETUP */

    t.waitFor(function() { return freshWin.Ext && freshWin.Ext.isReady; }, scanForOverrides);

    function resolveObject(hostObj, nameSpace) {
        var parts = nameSpace.split('.');
        var p = hostObj[parts[0]];

        for (var i = 1; i < parts.length; i++) {
            p = p[parts[i]];
        };

        return p;
    }

    function scanForOverrides() {
        var dirtyWin = window,
            overrides = [];

        // Check for native class augmentations
        Ext.iterate(Ext.ClassManager.classes, function (item) {
            if (!item.match('Ext.')) return;

            var freshItem = resolveObject(freshWin, item);
            var dirtyItem = resolveObject(dirtyWin, item);
            //try {
            if (typeof (dirtyItem) !== 'undefined') {
                var staticDiff = getObjectDifferences(freshItem,
                    dirtyItem,
                    item);

                overrides.push.apply(overrides, staticDiff);

                // Prototype properties
                if (dirtyItem.prototype) {
                    var prototypeDiff = getObjectDifferences(freshItem.prototype,
                        dirtyItem.prototype,
                        item + '.prototype');
                    overrides.push.apply(overrides, prototypeDiff);
                }
            }
            //} catch (e) {
            // IE crashes here
            //}

        }, this);

        function getObjectDifferences(cleanObj, dirtyObj, ns) {
            var diff = []

            var ignoreRe = /Ext.data.Store.ImplicitModel|collectorThreadId/;

            for (var p in dirtyObj) {
                try {
                    if (dirtyObj.hasOwnProperty(p)) {
                        // Check if the object exists on the clean window and also do a string comparison
                        // in case a builtin method has been overridden
                        if (
                            (!cleanObj.hasOwnProperty(p) && typeof (cleanObj[p]) == 'undefined' )||
                                (typeof (dirtyObj[p]) == 'function' && cleanObj[p].toString() !== dirtyObj[p].toString()) ||
                                (Ext.isPrimitive(dirtyObj[p]) && dirtyObj[p].toString() !== cleanObj[p].toString())
                            )
                        {
                            if (!ignoreRe.test(ns + '.' + p)) {
                                diff.push(ns + '.' + p);
                            }
                        }
                    }
                } catch (e) {
                    // Just continue
                }
            }
            return diff;
        }

        t.is(overrides.length, 0, 'No overrides detected');

        Ext.each(overrides, function(o) {
            t.fail('Override detected: ' + o);
        });
    }
})
