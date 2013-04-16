Role('Siesta.Test.Self', {
    
    requires        : [ 'typeOf' ],
    
    has        : {
    },

    methods : {
        
        getDescriptionTree : function (test) {
            var copyResults     = function (results) {
                var children    = []
                
                var copy        = {
                    desc        : results.description
                }
                
                Joose.A.each(results.children, function (child) {
                    if (child.meta.name != 'Siesta.Result.Summary') children.push(copyResults(child))
                })
                
                if (children.length) copy.children = children
                
                return copy
            }
            
            return copyResults(test.results).children
        },

        
        getSelfTest : function (meta, config, doNotTranslate) {
            config      = config || {}
            
            var Siesta  = this.global.Siesta
            
            if (!config.harness)    config.harness  = new Siesta.Harness()
            if (!config.run)        config.run      = function () {}
            if (!config.url)        config.url      = this.url
            
            config.harness.isPhantomJS  = this.harness.isPhantomJS
            
            config.needToCleanup        = false
            config.scopeProvider        = this.scopeProvider
            config.global               = this.global
            config.overrideSetTimeout   = false
            config.originalSetTimeout   = this.originalSetTimeout
            config.originalClearTimeout = this.originalClearTimeout
            config.exceptionCatcher     = this.exceptionCatcher
            config.testErrorClass       = this.testErrorClass
            config.startTestAnchor      = this.startTestAnchor
            
            if (!doNotTranslate) {
                config.trait            = Siesta.Test.AssertionsTranslator
                config.translateTo      = this
            }
            
            return new meta(config) 
        },
        
        
        getGenericTest : function (config, doNotTranslate) {
            return this.getSelfTest(this.global.Siesta.Test, config, doNotTranslate)
        },
        
        getBrowserTest : function (config, doNotTranslate) {
            return this.getSelfTest(this.global.Siesta.Test.Browser, config, doNotTranslate)
        },

        getExtJSTest : function (config, doNotTranslate) {
            return this.getSelfTest(this.global.Siesta.Test.ExtJS, config, doNotTranslate)
        },

        getJQueryTest : function (config, doNotTranslate) {
            return this.getSelfTest(this.global.Siesta.Test.jQuery, config, doNotTranslate)
        },
        
        
        testSelf : function (meta, config, defaultConfig, runFunc, callback) {
            config          = config || {}
            
            for (var key in defaultConfig)
                if (!config.hasOwnProperty(key)) config[ key ] = defaultConfig[ key ]
            
            config.run      = runFunc
            
            var test        = this.getSelfTest(meta, config, config.doNotTranslate)
            
            var me          = this
            var async       = this.beginAsync();
            
            test.on('testfinalize', function (event) {
                // ignore bubbled events from sub-tests
                if (event.source == test) {
                    me.endAsync(async);
                    
                    callback && callback.call(me, test)
                    
                    // some cleanup
                    test.global                 = null
                    test.originalSetTimeout     = null
                    test.originalClearTimeout   = null
                }
            });
            
            test.start();
        },
        
        
        testGeneric : function (config, runFunc, callback) {
            if (this.typeOf(config) == 'Function') {
                callback    = runFunc
                runFunc     = config
                config      = null
            }
            
            this.testSelf(this.global.Siesta.Test, config, { transparentEx : true }, runFunc, callback)
        },
        
        
        testBrowser : function (config, runFunc, callback) {
            if (this.typeOf(config) == 'Function') {
                callback    = runFunc
                runFunc     = config
                config      = null
            }
            
            this.testSelf(this.global.Siesta.Test.Browser, config, { 
                transparentEx       : true, 
                suppressEventsLog   : true,
                actionDelay         : 1
            }, runFunc, callback)
        },
        
        
        testJQuery : function (config, runFunc, callback) {
            if (this.typeOf(config) == 'Function') {
                callback    = runFunc
                runFunc     = config
                config      = null
            }
            
            this.testSelf(this.global.Siesta.Test.jQuery, config, { 
                transparentEx       : true, 
                suppressEventsLog   : true,
                actionDelay         : 1
            }, runFunc, callback)
        },

        
        testExtJS : function (config, runFunc, callback) {
            if (this.typeOf(config) == 'Function') {
                callback    = runFunc
                runFunc     = config
                config      = null
            }
            
            this.testSelf(this.global.Siesta.Test.ExtJS, config, { 
                transparentEx       : true, 
                suppressEventsLog   : true,
                actionDelay         : 1
            }, runFunc, callback)
        },
        
        
        testSenchaTouch : function (config, runFunc, callback) {
            if (this.typeOf(config) == 'Function') {
                callback    = runFunc
                runFunc     = config
                config      = null
            }
            
            this.testSelf(this.global.Siesta.Test.SenchaTouch, config, { 
                transparentEx       : true, 
                suppressEventsLog   : true,
                performSetup        : false,
                actionDelay         : 1
            }, runFunc, callback)
        },

        
        expectPass : function (func, meta, config) {
            var me      = this
            var Siesta  = this.global.Siesta
            
            config      = config || {}
            
            Joose.O.extend(config, { doNotTranslate : true })
            
            var check   = function (test) {
                test.eachAssertion(function (assertion) {
                    if (assertion.passed)
                        me.pass("Assertion passed: " + assertion.description)
                    else
                        me.fail("Assertion passed: " + assertion.description, assertion.annotation)
                })
            }
            
            if (!meta || meta == Siesta.Test.ExtJS)
                this.testExtJS(config, func, check)
            else if (meta == Siesta.Test.SenchaTouch)
                this.testSenchaTouch(config, func, check)
            else if (meta == Siesta.Test.Browser)
                this.testBrowser(config, func, check)
            else if (meta == Siesta.Test.jQuery)
                this.testJQuery(config, func, check)
            else if (meta == Siesta.Test)
                this.testGeneric(config, func, check)
        },
        
        
        expectFail : function (func, meta, config) {
            var me      = this
            var Siesta  = this.global.Siesta
            
            config      = config || {}
            
            Joose.O.extend(config, { doNotTranslate : true })
            
            var check   = function (test) {
                test.eachAssertion(function (assertion) {
                    me.notOk(assertion.passed, "Assertion failed: " + assertion.description)
                })
            }
            
            if (!meta || meta == Siesta.Test.ExtJS)
                this.testExtJS(config, func, check)
            else if (meta == Siesta.Test.SenchaTouch)
                this.testSenchaTouch(config, func, check)
            else if (meta == Siesta.Test.Browser)
                this.testBrowser(config, func, check)
            else if (meta == Siesta.Test.jQuery)
                this.testJQuery(config, func, check)
            else if (meta == Siesta.Test)
                this.testGeneric(config, func, check)
        },

        getHarness : function(config, tests){
            var Siesta      = this.global.Siesta;
            var Harness     = this.global.Harness = Siesta.Harness.Browser.ExtJS

            if (arguments.length === 1) {
                tests = config;
                config = null;
            }
            
            Harness.configure(config || {
                title           : 'Siesta Foo suite',
                viewDOM         : true,
                transparentEx   : true,
                autoCheckGlobals : false
            })

            Harness.start.apply(Harness, tests || [
                '601_siesta_ui_failing.t.js',
                '601_siesta_ui_passing.t.js'
            ]);

            return Harness;
        },

        getTouchHarness : function(config, tests){
            var Siesta      = this.global.Siesta;
            var Harness     = this.global.Harness = Siesta.Harness.Browser.SenchaTouch

            if (arguments.length === 1) {
                tests = config;
                config = null;
            }

            Harness.configure(config || {
                title           : 'Siesta Foo suite',
                viewDOM         : true,
                transparentEx   : true,
                autoCheckGlobals : false
            })

            Harness.start.apply(Harness, tests || [
            ]);

            return Harness;
        },

        waitForHarnessEvent : function(eventName, callback, scope, timeout) {
            var eventFired      = false
            
            this.global.Harness.on(eventName, function () { eventFired = true }, null, { single : true });
            
            this.waitFor({
                method          : function() { return eventFired; }, 
                callback        : callback,
                scope           : scope,
                timeout         : timeout,
                assertionName   : 'waitForHarnessEvent',
                description     : ' Harness to fire its "' + eventName + '" event'
            });
        },
        
        
        copyResult : function (result) {
            var me          = this
            var cls         = eval(result.meta.name)
            
            var copy        = new cls({
                id          : result.id,
                description : result.description,
                
                name        : result.name,
                passed      : result.passed,
                annotation  : result.annotation,
                index       : result.index,
                sourceLine  : result.sourceLine,
                isTodo      : result.isTodo,
                isWaitFor   : result.isWaitFor,
                completed   : result.completed,
                
                length      : result.length,
                children    : Joose.A.map(result.children, function (childResult) { return me.copyResult(childResult) })
            })
            
            Joose.A.each(copy.children, function (childResult) {
                childResult.parent  = copy
            })
            
            return copy
        },
        
        
        addTranslatedResult : function (result) {
            this.addResult(this.copyResult(result))
        }
    }
        
})
