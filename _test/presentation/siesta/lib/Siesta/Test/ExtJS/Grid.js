/*

Siesta 2013-04-12
Copyright(c) 2009-2013 Bryntum AB
http://bryntum.com/contact
http://bryntum.com/products/siesta/license

*/
/**
@class Siesta.Test.ExtJS.Grid

This is a mixin, with helper methods for testing functionality relating to ExtJS grids. This mixin is being consumed by {@link Siesta.Test.ExtJS}

*/
Role('Siesta.Test.ExtJS.Grid', {
    
    requires        : [ 'waitFor', 'pass', 'fail', 'typeOf' ],
    
    
    methods : {
        /**
         * Waits for the rows of a gridpanel or tree panel to render and then calls the supplied callback. Please note, that if the store of the grid has no records,
         * the condition for this waiter will never be fullfilled.
         * 
         * @param {Ext.panel.Table/String} panel The panel or a ComponentQuery matching a panel
         * @param {Function} callback A function to call when the condition has been met.
         * @param {Object} scope The scope for the callback
         * @param {Int} timeout The maximum amount of time to wait for the condition to be fulfilled. Defaults to the {@link Siesta.Test.ExtJS#waitForTimeout} value. 
         */
        waitForRowsVisible : function(panel, callback, scope, timeout) {
            var cmp = this.normalizeComponent(panel, true);
            var me = this;

            if (!cmp && typeof panel === 'string') {
                // Make sure CQ returns a result first
                this.waitForCQ(panel, function(result) { this.waitForRowsVisible(result[0], callback, scope, timeout); }, this);
            } else {
                var checkerFn;

                // Handle case of locking grid
                if(cmp.normalGrid) {
                    var selector = cmp.normalGrid.getView().itemSelector;
                    checkerFn = function() {
                        if (!cmp.rendered || !cmp.normalGrid.rendered || !cmp.lockedGrid.rendered) return;
                         
                        var lockedResult = this.$(selector, cmp.lockedGrid.el.dom); 
                        var normalResult = this.$(selector, cmp.normalGrid.el.dom); 
                        
                        if (lockedResult.length > 0 && normalResult.length > 0) {
                            return {
                                lockedRows : lockedResult,
                                normalRows : normalResult
                            };
                        }
                    }
                } else {
                    var selector = cmp.getView().itemSelector;
                    checkerFn = function() {
                        if (!cmp.rendered) return;
                         
                        var result = this.$(selector, cmp.el.dom); 
                        
                        if (result.length > 0) {
                            return result;
                        }
                    }
                }


                this.waitFor({
                    method          : checkerFn, 
                    callback        : callback,
                    scope           : scope,
                    timeout         : timeout,
                    assertionName   : 'waitForRowsVisible',
                    description     : ' rows to show for panel with id "' + cmp.id + '"'
                });
            }
        },

        /**
         * Utility method which returns the first grid row element.
         * 
         * @param {Ext.panel.Table/String} panel The panel or a ComponentQuery matching a panel
         * @return {Ext.Element} The element of first row of grid.
         */
        getFirstRow : function(grid) {
            grid = this.normalizeComponent(grid);
            var Ext = this.getExt();
            return grid.el.select(grid.getView().itemSelector).item(0);
        },

        /**
         * Utility method which returns the first grid cell element.
         * 
         * @param {Ext.panel.Table/String} panel The panel or a ComponentQuery matching a panel
         * 
         * @return {HTMLElement} The element of first cell of grid.
         */
        getFirstCell : function(panel) {
            panel = this.normalizeComponent(panel);
            return this.getCell(panel, 0, 0);
        },

        /**
         * Utility method which returns a grid row element.
         * 
         * @param {Ext.panel.Table/String} panel The panel or a ComponentQuery matching a panel
         * @param {Int} index The row index
         */
        getRow : function(grid, index) {
            grid = this.normalizeComponent(grid);
            var Ext = this.global.Ext;
            return grid.el.select(grid.getView().itemSelector).item(index);
        },

        /**
         * Utility method which returns the cell at the supplied row and col position.
         * 
         * @param {Ext.panel.Table/String} panel The panel or a ComponentQuery matching a panel
         * @param {Int} row The row index
         * @param {Int} column The column index
         * 
         * @return {HTMLElement} The element of the grid cell at specified position.
         */
        getCell : function(grid, row, col) {
            grid = this.normalizeComponent(grid);
            var rowEl = this.getRow(grid, row);
            return rowEl.child('td:nth-child(' + String(col+1) + ')');
        },

        /**
         * Utility method which returns the last cell for the supplied row.
         * 
         * @param {Ext.panel.Table/String} panel The panel or a ComponentQuery matching a panel
         * @param {Int} row The row index
         * 
         * @return {HTMLElement} The element of the grid cell at specified position.
         */
        getLastCellInRow : function(grid, row) {
            grid = this.normalizeComponent(grid);
            return this.getCell(grid, row, grid.headerCt.getColumnCount() - 1);
        },

        /**
         * This assertion passes if the passed string is found in the passed grid's cell element.
         * 
         * @param {Ext.panel.Table/String} panel The panel or a ComponentQuery matching a panel
         * @param {Int} row The row index
         * @param {Int} column The column index
         * @param {String/RegExp} string The string to find or RegExp to match
         * @param {String} [description] The description for the assertion
         */
        matchGridCellContent : function(grid, rowIndex, colIndex, string, description) {
            grid = this.normalizeComponent(grid);
            
            var view = grid.getView(),
                cell = this.getCell(grid, rowIndex, colIndex).child('div');

            var isRegExp    = this.typeOf(string) == 'RegExp';
            var content     = cell.dom.innerHTML;
                
            if (isRegExp ? string.test(content) : content.indexOf(string) != -1) {
                this.pass(description, {
                    descTpl     : isRegExp ? 'Cell content {content} matches regexp {string}' : 'Cell content {content} has a string {string}',
                    content     : content,
                    string      : string
                });
            } else {
                this.fail(description, {
                    assertionName   : 'matchGridCellContent',
                    
                    got         : cell.dom.innerHTML,
                    gotDesc     : 'Cell content',
                    
                    need        : string,
                    needDesc    : 'String matching',
                    
                    annotation  : 'Row index: ' + rowIndex + ', column index: ' + colIndex
                });
            }
        }
    }
});
