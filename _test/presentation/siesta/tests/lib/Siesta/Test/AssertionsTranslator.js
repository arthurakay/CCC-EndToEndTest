Role('Siesta.Test.AssertionsTranslator', {
    
    has        : {
        translateTo         : { required : true }
    },
    
    
    after : {
        
        addResult : function (result) {
            if (!(result instanceof this.global.Siesta.Result.Summary)) this.translateTo.addTranslatedResult(result)
        },
        
        
        failWithException : function () {
            this.translateTo.failWithException.apply(this.translateTo, arguments)
        }
    }
})
