/*

Siesta 2013-04-12
Copyright(c) 2009-2013 Bryntum AB
http://bryntum.com/contact
http://bryntum.com/products/siesta/license

*/
Role('Siesta.Harness.Browser.Automation', {
    
    does        : [
        Siesta.Role.ConsoleReporter,
        Siesta.Util.Role.CanFormatStrings
    ],
    
    has : {
        // a regex to test the url (can be provided by automation launchers) only matched tests will be run
        testFilter          : null,
        
        testPage            : null,
        testPageSize        : 5,
        
        pageCount           : null,
        
        outputLog           : '__NULL__',
        
        lastActivity        : null,
        exitCode            : null,
        
        launchedDesc        : null
    },
    
    
    override : {
        
        setup : function () {
            if (this.isAutomated) {
                this.speedRun           = true
                this.runCore            = 'sequential'
                this.transparentEx      = false
                this.keepResults        = false
                this.keepNLastResults   = 0
                this.needUI             = false
                this.needSummaryMessage = false
                
                this.waitForTimeout     = this.waitForTimeout * 3
                this.defaultTimeout     = this.defaultTimeout * 3
                
                var filter              = this.getQueryParam('filter')
                
                if (filter) this.testFilter = decodeURIComponent(filter)
                
    
                var page                = this.getQueryParam('page')
                
                if (page) this.testPage = Number(page)
    
                
                if (this.getQueryParam('verbose')) this.verbosity++
                
                var pause               = this.getQueryParam('pause')
                
                this.pauseBetweenTests  = pause != null ? pause : 3000
                
                this.lastActivity       = new Date()
            }
            
            this.SUPERARG(arguments)
        },
        
        
        launch : function (descriptors, callback, errback) {
            var testFilter  = this.testFilter
            var filtered    = []
            
            if (testFilter) {
                testFilter      = new RegExp(testFilter)
                
                Joose.A.each(this.flattenDescriptors(descriptors), function (desc) {
                    if (testFilter.test(desc.url)) filtered.push(desc)
                })
            } else
                filtered    = this.flattenDescriptors(descriptors)
                
            var testPageSize    = this.testPageSize
            var testPage        = this.testPage
                
            if (testPage != null) {
                this.pageCount      = Math.ceil(filtered.length / testPageSize)
                filtered            = filtered.slice(testPage * testPageSize, (testPage + 1) * testPageSize)
            }
            
            if (this.isAutomated && !filtered.length) {
                this.warn("Filter regexp doesn't match any test URL - exiting")
                this.exit(4)
                
                return
            }
            
            this.SUPER(this.launchedDesc = filtered, callback, errback)
        }
    },
    
    
    after : {
        
        onTestUpdate : function () {
            if (this.isAutomated) this.lastActivity = new Date()
        }
    },
    
    
    methods : {
        
        getPageState : function () {
            return JSON.stringify({
                lastActivity        : this.lastActivity - 0,
                log                 : this.flushLog(),
                exitCode            : this.exitCode
            })
        },
        
        
        allPagesPassed : function (pageReports) {
            var allPassed       = true
            
            Joose.A.each(pageReports, function (pageReport) {
                if (!pageReport || !pageReport.passed) {
                    allPassed = false
                    return false
                }
            })
            
            return allPassed
        },
        
        
        flushLog : function () {
            var result  = this.outputLog.replace(/\n$/, '');
            
            this.outputLog = '__NULL__'
            
            return result
        },
        
        
        getLastActivity : function () {
            return this.lastActivity - 0
        },
        
        
        log : function () {
            if (this.isAutomated) {
                var str     = Array.prototype.slice.call(arguments).join(' ') + '\n'
                
                if (this.outputLog == '__NULL__')
                    this.outputLog = str
                else
                    this.outputLog += str 
            }
        },
        
        
        exit : function (code) {
            if (this.isAutomated) this.exitCode = code || 0
        },
        
        
        generateUnifiedPageReport : function (params) {
            params          = params || {}
            var me          = this
            
            var report = {
                testSuiteName       : this.title || '',
                
                startDate           : this.startDate - 0,
                endDate             : (this.endDate || new Date()) - 0,
                
                passed              : this.allPassed(),
                
                testCases           : []
            }
            
            Joose.A.each(this.flattenDescriptors(params.descriptors || this.launchedDesc || this.descriptors), function (descriptor) {
                var test    = me.getTestByURL(descriptor.url)
                
                // ignore missing tests (could be skipped by test filtering)
                if (!test) return
                
                report.testCases.push(descriptor.isMissing ? { fileIsMissing : true } : test.getResults().toJSON())
            })
            
            return params.asJSON ? report : JSON.stringify(report)
        },
        
        
        combinePageReports : function (pageReports) {
            if (!pageReports || !pageReports.length) throw "No pages to combine"
            
            var combinedReport
            
            Joose.A.each(pageReports, function (pageReport, index) {
                // first page
                if (!index) {
                    combinedReport              = Joose.O.copy(pageReport)
                    
                    combinedReport.testCases    = combinedReport.testCases.slice()
                } else
                    combinedReport.testCases.push.apply(combinedReport.testCases, pageReport.testCases)
                    
                if (index == pageReports.length - 1)
                    combinedReport.endDate      = pageReport.endDate
            })
            
            combinedReport.passed   = this.allPagesPassed(pageReports)
            
            return combinedReport
        },
        
        
        getAutomatedSummaryMessage : function (pageReports) {
            var combinedReport      = this.combinePageReports(pageReports)
            
            var testCases           = combinedReport.testCases
            
            var testsTotal          = 0
            var testsFailed         = 0
            
            var assertionsTotal     = 0
            var assertionsFailed    = 0
            
            var todoPassed          = 0
            var todoFailed          = 0
            
            var timeTotal           = testCases[ testCases.length - 1 ].endDate - testCases[ 0 ].startDate
            var durationStr         = timeTotal + 'ms'
            
            if (timeTotal >= 1000) {
                timeTotal           = timeTotal / 1000
                durationStr         = timeTotal + 's'
            }
            
            if (timeTotal >= 60) {
                durationStr         = Math.floor(timeTotal / 60) + 'm ' + Math.floor(timeTotal % 60) + 's'
                timeTotal           = timeTotal / 60
            }
            
            if (timeTotal >= 60) {
                durationStr         = Math.floor(timeTotal / 60) + 'h ' + Math.floor(timeTotal % 60) + 'm'
            }
            
            var me                  = this
            
            Joose.A.each(testCases, function (testInfo) {
                testsTotal++
                
                if (testInfo.fileIsMissing) {
                    testsFailed++
                } else {
                    if (!testInfo.passed) testsFailed++
                    
                    var cascadeAssertions = function (testInfo, func, scope) {
                        Joose.A.each(testInfo.assertions, function (assertion) {
                            if (assertion.type == 'Siesta.Result.Assertion') func.call(scope || me, assertion)
                            if (assertion.type == 'Siesta.Result.SubTest') cascadeAssertions(assertion, func, scope)
                        })
                    }
                    
                    cascadeAssertions(testInfo, function (assertion) {
                        if (assertion.isTodo) {
                            assertion.passed ? todoPassed++ : todoFailed++
                        } else {
                            assertionsTotal++
                            
                            if (!assertion.passed) assertionsFailed++
                        }
                    })
                }
            })
            
            return this.formatString([            
                '{assertionsPassed} passed, {assertionsFailed} failed assertions took {!timeTotal} to complete'
            ].join('\n'), {
                testsFailed             : testsFailed,
                testsPassed             : testsTotal - testsFailed,
                testsTotal              : testsTotal,
                
                timeTotal               : durationStr,
                
                assertionsTotal         : assertionsTotal,
                assertionsPassed        : assertionsTotal - assertionsFailed,
                assertionsFailed        : assertionsFailed,
                
                todoPassed              : todoPassed,
                todoFailed              : todoFailed
            })
            
        }
    }
})
//eof Siesta.Harness.Browser.Automation


Siesta.Harness.Browser.my.meta.extend({
    does : [ 
        Siesta.Harness.Browser.Automation,
        Siesta.Harness.Browser.Automation.PhantomJS, 
        Siesta.Harness.Browser.Automation.Selenium 
    ] 
})


Siesta.Harness.meta.extend({
    does : [ 
        Siesta.Harness.Report.JSON,
        Siesta.Harness.Report.JUnit
    ] 
})