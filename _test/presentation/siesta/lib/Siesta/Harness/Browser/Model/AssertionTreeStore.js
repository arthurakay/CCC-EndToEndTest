/*

Siesta 2013-04-12
Copyright(c) 2009-2013 Bryntum AB
http://bryntum.com/contact
http://bryntum.com/products/siesta/license

*/
Ext.define('Siesta.Harness.Browser.Model.AssertionTreeStore', {
    extend          : 'Ext.data.TreeStore',
    
    mixins          : [
        'Sch.data.mixin.FilterableTreeStore'
    ],
    
    
    constructor     : function () {
        this.callParent(arguments)
        
        this.initTreeFiltering()
        
        this.nodeStore.setNode(this.getRootNode())
    },
    
    
    removeAll : function () {
//        slow
//        this.getRootNode().removeAll()
        
        var newRoot = this.setRootNode({
            id              : '__ROOT__',
            expanded        : true,
            loaded          : true
        })
        
        this.nodeStore.setNode(newRoot)
    },
    
    
    add : function (record) {
        this.getRootNode().appendChild(record)
    },
    
    
    getById : function (id) {
        return this.getNodeById(id)
    }
})