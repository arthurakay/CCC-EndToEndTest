/*

Siesta 2013-04-12
Copyright(c) 2009-2013 Bryntum AB
http://bryntum.com/contact
http://bryntum.com/products/siesta/license

*/
Class('Siesta.Result.SubTest', {
    
    isa : Siesta.Result,
    

    has : {
        // reference to a test it belongs to
        // SubTests result instances will be set as `results` for sub tests instances
        test            : null
    },
    
    
    methods : {
        
        isWorking : function () {
            return !this.test.isFinished()
        },
        
        
        toJSON : function () {
            var test        = this.test
            
            var report      = {
                type            : this.meta.name,
                name            : test.name,
                
                startDate       : test.startDate - 0,
                endDate         : test.endDate - 0,
                
                passed          : test.isPassed()
            }
            
            if (!test.parent)   report.url          = test.url
            if (test.specType)  report.bddSpecType  = test.specType
            
            var assertions  = []
            
            Joose.A.each(this.children, function (result) {
                if ((result instanceof Siesta.Result.Assertion) || (result instanceof Siesta.Result.Diagnostic) || (result instanceof Siesta.Result.SubTest)) 
                    assertions.push(result.toJSON())
            })
            
            report.assertions       = assertions
            
            return report
        }
        
    }
})

