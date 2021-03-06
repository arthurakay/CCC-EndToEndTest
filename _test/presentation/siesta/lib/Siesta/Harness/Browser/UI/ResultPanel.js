/*

Siesta 2013-04-12
Copyright(c) 2009-2013 Bryntum AB
http://bryntum.com/contact
http://bryntum.com/products/siesta/license

*/
Ext.define('Siesta.Harness.Browser.UI.ResultPanel', {

    extend          : 'Ext.Panel',

    alias           : 'widget.resultpanel',


    slots                   : true,
    
    testRecord              : null,

    maintainViewportSize    : true,
    viewportSize            : null,
    minWidth                : 100,

    viewDOM                 : false,
    canManageDOM            : true,
    title                   : '&nbsp;',
    style                   : 'background:transparent',
    bodyStyle               : 'background:transparent',

    verticalCenteredTpl     : new Ext.XTemplate(
        '<div class="tr-vertical-align-helper-content {cls}">{text}</div>',
        '<div class="tr-vertical-align-helper"></div>',
        { 
            compiled : true 
        }
    ),
    
    sourceButton            : null,
    filterButton            : null,


    initComponent : function() {
        this.addEvents('viewdomchange');
        
        Ext.apply(this, {
            tbar : [
                this.sourceButton = new Ext.Button({
                    text            : 'View source', 
                    iconCls         : 'view-source',
                    enableToggle    : true,
                
                    pressed         : false,
                    disabled        : true,
                
                    scope           : this,
                    handler         : function(btn) {  
                        if (btn.pressed) {
                            this.showSource();
                        } else {
                            this.hideSource();
                        }
                    }
                }),
                {
                    text            : 'Toggle DOM visible', 
                    iconCls         : 'show-dom',
                
                    scope           : this,
                    handler         : function(btn) {
                        this.setViewDOM(!this.viewDOM);
                    }
                },
                {
                    text            : 'Re-run test', 
                    iconCls         : 'rerun',
                
                    scope           : this,
                    handler         : this.onRerun
                },
                this.filterButton = new Ext.Button({
                    text            : 'Show only failed',
                    iconCls         : 'tr-status-bugs-small',
                    
                    enableToggle    : true,
                    scope           : this,
                    handler         : this.onAssertionFilterClick
                })
            ],

            layout      : 'border',
        
            cls         : 'tr-container',
            
            items       : [
                // a card container
                {
                    region      : 'center',
                    slot        : 'cardContainer',
                    xtype       : 'container',
                    layout      : 'card', 
                    activeItem  : 0,
                    minWidth    : 100,

                    items : [
                        // grid with assertion
                        {
                            xtype       : 'assertiongrid',
                            slot        : 'grid',
                            store       : this.store,
                            listeners   : {
                                itemdblclick    : this.onAssertionDoubleClick,
                                scope           : this
                            }
                        },
                        // eof grid with assertion
                        {
                            xtype       : 'container',
                            slot        : 'source',
                            autoScroll  : true,
                            cls         : 'test-source-ct',
                            __filled__  : false
                        }
                    ]
                },
                {
                    xtype           : 'panel',
                    region          : 'east',
                    slot            : 'domContainer',
                    stateful        : true,             // Turn off for recursive siesta demo
                    id              : this.id + '-domContainer',
                    split           : true,
                    header          : false,
                    width           : '50%',
                    collapsible     : true,
                    animCollapse    : false,
                
                    collapsed       : !this.viewDOM,
                
                    bodyStyle       : 'text-align : center'
                }
            ]
        })
    
        this.callParent()
    
        this.on({
            afterlayout : this.afterDOMContainerLayout,
        
            scope       : this
        })
    },
    
    
    // This method makes sure that the min width of the card panel is respected when
    // the width of this class changes (after resizing Test TreePanel).
    ensureLayout : function () {
        var availableWidth          = this.getWidth();
        var cardPanel               = this.slots.cardContainer;
        var domContainer            = this.slots.domContainer;
        var domContainerWidth       = domContainer.getWidth();
        var minimumForCard          = cardPanel.minWidth + 20; // Some splitter space

        if (availableWidth - domContainerWidth < minimumForCard) {
            domContainer.setWidth(Math.max(0, availableWidth - minimumForCard));
        }
    },
    

    afterRender : function() {
        this.callParent(arguments);
        
        this.slots.domContainer.on({
            expand      : this.onDomContainerExpand,
            collapse    : this.onDomContainerCollapse,
        
            scope       : this
        })
    },
    
    showSource : function (lineNbr) {  
        var slots           = this.slots
        var cardContainer   = slots.cardContainer
        var sourceCt        = slots.source
        var sourceCtEl      = sourceCt.el
    
        cardContainer.layout.setActiveItem(sourceCt);
        this.sourceButton.toggle(true);

        if (this.testRecord && !sourceCt.__filled__) {
            sourceCt.__filled__ = true;
            
            sourceCt.update(
                Ext.String.format(
                    '<pre class="brush: javascript;">{0}</pre>', 
                    this.testRecord.get('test').getSource()
                )
            );
        
            SyntaxHighlighter.highlight(sourceCtEl);
        } 
        
        sourceCtEl.select('.highlighted').removeCls('highlighted');

        if (arguments.length === 0) {
            // Highlight all failed rows
            Ext.each(this.testRecord.getFailedAssertions(), function (assertion) {
                if (assertion.sourceLine != null) sourceCtEl.select('.line.number' + assertion.sourceLine).addCls('highlighted');
            });
        }
        else {
            // Highlight just a single row (user double clicked a failed row)
            sourceCtEl.select('.line.number' + parseInt(lineNbr, 10)).addCls('highlighted');
        }

        if (arguments.length && lineNbr != null) {
            var el = sourceCtEl.down('.highlighted');
            el && el.scrollIntoView(sourceCtEl);
        }
    },

    hideSource : function(btn) {  
        var slots           = this.slots
        var cardContainer   = slots.cardContainer
        
        cardContainer.layout.setActiveItem(slots.grid);
        this.sourceButton.toggle(false);
    },

    setViewDOM : function (value, suppressEvent) {
        var domContainer    = this.slots.domContainer
        
        if (value)
            domContainer.expand(false)
        else
            domContainer.collapse(Ext.Component.DIRECTION_RIGHT, false)
    },

    setCanManageDOM : function (value) {
        if (value != this.canManageDOM) {
            this.canManageDOM = value
        
            if (value && !this.hidden) this.alignIFrame()
        }
    },


    getIFrame : function () {
        if (this.testRecord) {
            var test = this.testRecord.get('test');
    
            return this.canManageDOM && test.scopeProvider && test.scopeProvider.iframe
        }
        return null;
    },


    afterDOMContainerLayout : function () {
        this.alignIFrame();
    },


    alignIFrame : function () {
        var iframe          = this.getIFrame();
        var domContainer    = this.slots.domContainer
    
        if (domContainer.collapsed || !iframe) return
       
        Ext.fly(iframe).removeCls('tr-iframe-hidden')
        
        Ext.fly(iframe).setXY(domContainer.el.getXY())
        
        if (!this.maintainViewportSize) Ext.fly(iframe).setSize(domContainer.el.getSize())
    },

    onDomContainerCollapse : function() {
        this.hideIFrame();
        this.viewDOM = false;
        this.fireEvent('viewdomchange', this, false);
        
        var test    = this.testRecord && this.testRecord.get('test')
        
        if (test) {
            test.fireEvent('testframehide')
        }
    },
    

    onDomContainerExpand : function() {
        this.alignIFrame();
        this.viewDOM = true;
        this.fireEvent('viewdomchange', this, true);
        
        var test    = this.testRecord && this.testRecord.get('test')
        
        if (test) {
            test.fireEvent('testframeshow')
        }
    },

    hideIFrame : function () {
        var iframe          = this.getIFrame()
    
        iframe && Ext.fly(iframe).setLeftTop(-10000, -10000)
    },


    isFrameVisible : function () {
        return !(this.hidden || this.slots.domContainer.collapsed)
    },

    onRerun : function() {
        this.fireEvent('rerun', this);
    },

    
    showTest : function (testFile) {
        this.slots.source.__filled__ = false;
        
        this.filterButton.toggle(false)
        
        if (this.testRecord !== testFile) {
            this.hideIFrame();
            
            this.testRecord = testFile;
            this.sourceButton.enable()
        }
        
        this.hideSource();

        var url         = testFile.get('url');
        var grid        = this.slots.grid;

        grid.reconfigure(testFile.get('assertionsStore'));

        Ext.suspendLayouts();
        // This triggers an unnecessary layout recalc
        this.setTitle(url);
        Ext.resumeLayouts();
        
        this.alignIFrame();
    },

    onAssertionFilterClick : function(btn) {
        var assertionsStore     = this.slots.grid.store;

        // need this check for cases when users clicks on the button
        // before running any test - in this case assertion grid will have an empty Ext.data.TreeStore instance
        if (!assertionsStore.filterTreeBy) return
        
        if (btn.pressed) {
            assertionsStore.filterTreeBy(function (resultRecord) {
                var result      = resultRecord.getResult()
                
                // this covers the cases when "result" is a summary record, diagnostic record, etc
                return !result.passed
            })
        } else {
            assertionsStore.clearTreeFilter()
        }
    },


    clear : function () {
        Ext.suspendLayouts()
        
        var grid = this.slots.grid;
        
        grid.store.removeAll();

        grid.getView().getEl().update('<div class="assertiongrid-initializing">Initializing test...</div>');
        
        Ext.resumeLayouts(true)
    },

    
    onAssertionDoubleClick : function(view, record) {
        var result      = record.getResult()
        
        if ((result instanceof Siesta.Result.Assertion) && !result.isPassed(true)) { 
            this.showSource(result.sourceLine);
        }
    }
});