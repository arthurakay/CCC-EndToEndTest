Ext.data.JsonP.Siesta_Test_More({"tagname":"class","name":"Siesta.Test.More","extends":null,"mixins":[],"alternateClassNames":[],"aliases":{},"singleton":false,"requires":[],"uses":[],"enum":null,"override":null,"inheritable":null,"inheritdoc":null,"meta":{},"private":null,"id":"class-Siesta.Test.More","members":{"cfg":[{"name":"waitForTimeout","tagname":"cfg","owner":"Siesta.Test.More","meta":{},"id":"cfg-waitForTimeout"}],"property":[],"method":[{"name":"chain","tagname":"method","owner":"Siesta.Test.More","meta":{},"id":"method-chain"},{"name":"expectGlobals","tagname":"method","owner":"Siesta.Test.More","meta":{},"id":"method-expectGlobals"},{"name":"isApprox","tagname":"method","owner":"Siesta.Test.More","meta":{},"id":"method-isApprox"},{"name":"isArray","tagname":"method","owner":"Siesta.Test.More","meta":{},"id":"method-isArray"},{"name":"isBoolean","tagname":"method","owner":"Siesta.Test.More","meta":{},"id":"method-isBoolean"},{"name":"isDate","tagname":"method","owner":"Siesta.Test.More","meta":{},"id":"method-isDate"},{"name":"isDeeply","tagname":"method","owner":"Siesta.Test.More","meta":{},"id":"method-isDeeply"},{"name":"isDeeplyStrict","tagname":"method","owner":"Siesta.Test.More","meta":{},"id":"method-isDeeplyStrict"},{"name":"isGreater","tagname":"method","owner":"Siesta.Test.More","meta":{},"id":"method-isGreater"},{"name":"isGreaterOrEqual","tagname":"method","owner":"Siesta.Test.More","meta":{},"id":"method-isGreaterOrEqual"},{"name":"isLess","tagname":"method","owner":"Siesta.Test.More","meta":{},"id":"method-isLess"},{"name":"isLessOrEqual","tagname":"method","owner":"Siesta.Test.More","meta":{},"id":"method-isLessOrEqual"},{"name":"isNumber","tagname":"method","owner":"Siesta.Test.More","meta":{},"id":"method-isNumber"},{"name":"isObject","tagname":"method","owner":"Siesta.Test.More","meta":{},"id":"method-isObject"},{"name":"isRegExp","tagname":"method","owner":"Siesta.Test.More","meta":{},"id":"method-isRegExp"},{"name":"isString","tagname":"method","owner":"Siesta.Test.More","meta":{},"id":"method-isString"},{"name":"isaOk","tagname":"method","owner":"Siesta.Test.More","meta":{},"id":"method-isaOk"},{"name":"like","tagname":"method","owner":"Siesta.Test.More","meta":{},"id":"method-like"},{"name":"livesOk","tagname":"method","owner":"Siesta.Test.More","meta":{},"id":"method-livesOk"},{"name":"throwsOk","tagname":"method","owner":"Siesta.Test.More","meta":{},"id":"method-throwsOk"},{"name":"unlike","tagname":"method","owner":"Siesta.Test.More","meta":{},"id":"method-unlike"},{"name":"verifyGlobals","tagname":"method","owner":"Siesta.Test.More","meta":{},"id":"method-verifyGlobals"},{"name":"waitFor","tagname":"method","owner":"Siesta.Test.More","meta":{},"id":"method-waitFor"}],"event":[],"css_var":[],"css_mixin":[]},"linenr":9,"files":[{"filename":"More.js","href":"More.html#Siesta-Test-More"}],"html_meta":{},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"component":false,"superclasses":[],"subclasses":[],"mixedInto":["Siesta.Test"],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Mixed into</h4><div class='dependency'><a href='#!/api/Siesta.Test' rel='Siesta.Test' class='docClass'>Siesta.Test</a></div><h4>Files</h4><div class='dependency'><a href='source/More.html#Siesta-Test-More' target='_blank'>More.js</a></div></pre><div class='doc-contents'><p>A mixin with additional generic assertion methods, which can work cross-platform between browsers and NodeJS.\nIs being consumed by <a href=\"#!/api/Siesta.Test\" rel=\"Siesta.Test\" class=\"docClass\">Siesta.Test</a>, so all of them are available in all tests.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-waitForTimeout' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Siesta.Test.More'>Siesta.Test.More</span><br/><a href='source/More.html#Siesta-Test-More-cfg-waitForTimeout' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Siesta.Test.More-cfg-waitForTimeout' class='name expandable'>waitForTimeout</a><span> : Number</span></div><div class='description'><div class='short'>Default timeout for waitFor (in milliseconds). ...</div><div class='long'><p>Default timeout for <code>waitFor</code> (in milliseconds). Default value is 10000.</p>\n<p>Defaults to: <code>10000</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-chain' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Siesta.Test.More'>Siesta.Test.More</span><br/><a href='source/More.html#Siesta-Test-More-method-chain' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Siesta.Test.More-method-chain' class='name expandable'>chain</a>( <span class='pre'>step1, step2, stepN</span> )</div><div class='description'><div class='short'>This method accept either variable number of arguments (steps) or the array of them. ...</div><div class='long'><p>This method accept either variable number of arguments (steps) or the array of them. Each step should be either a function or configuration object for test actions.\nThese functions / actions will be executed in order.</p>\n\n<p>1) If step is a function, as the 1st argument, it will receive a callback to call when the step is completed. As the 2nd and further arguments, the step function will receive the\narguments passed to the previous callback.</p>\n\n<p>The last step will receive a no-op callback, which can be ignored or still called.</p>\n\n<p>2) If a step is presented with action configuration object, then the callback will be called by the action class automatically. Configuration object should contain the \"action\" property,\nspecifying the action class and some other config options (depending from the action class).</p>\n\n<p>In the latter case if configuration object will contain a \"desc\" property, a passing assertion with it value will be added to the test, after this step\ncompletion.</p>\n\n<p>3) If step is a sub test instance, created with getSubTest method, then step will launch it.</p>\n\n<p>Its better to see how it works on the example. For example, when using using only functions:</p>\n\n<pre><code>t.chain(\n    // function receives a callback as 1st argument\n    function (next) {\n        // we pass that callback to the \"click\" method\n        t.click(buttonEl, next)\n    },\n    function (next) {\n        t.type(fieldEl, 'Something', next)\n    },\n    function (next) {\n        t.is(fieldEl.value == 'Something', 'Correct value in the field')\n\n        // call the callback with some arguments\n        next('foo', 'bar')  \n    }, \n    // those arguments are now available as arguments of next step\n    function (next, value1, value2) {\n        t.is(value1, 'foo', 'The arguments for the callback are translated to the arguments of the step')\n        t.is(value2, 'bar', 'The arguments for the callback are translated to the arguments of the step')\n    }\n)\n</code></pre>\n\n<p>The same example, using action configuration objects for first 2 steps. For the list of available actions please refer to the classes in the <a href=\"#!/api/Siesta.Test.Action\" rel=\"Siesta.Test.Action\" class=\"docClass\">Siesta.Test.Action</a> namespace.</p>\n\n<pre><code>t.chain(\n    {\n        action      : 'click',\n        target      : buttonEl,\n        desc        : \"Clicked on the button\"\n    },\n    {\n        action      : 'type',\n        target      : fieldEl,\n        text        : 'Something',\n        desc        : \"Typed in the field\"\n    },\n    function (next) {\n        t.is(fieldEl.value == 'Something', 'Correct value in the field')\n\n        next('foo', 'bar')  \n    }, \n    ...\n)\n</code></pre>\n\n<p>Please note, that by default, each step is expected to complete within the <a href=\"#!/api/Siesta.Harness-cfg-defaultTimeout\" rel=\"Siesta.Harness-cfg-defaultTimeout\" class=\"docClass\">Siesta.Harness.defaultTimeout</a> time.\nYou can change this with the <code>timeout</code> property of the step configuration object, allowing some steps to last longer.\nSteps with sub-tests are expected to complete within <a href=\"#!/api/Siesta.Harness-cfg-subTestTimeout\" rel=\"Siesta.Harness-cfg-subTestTimeout\" class=\"docClass\">Siesta.Harness.subTestTimeout</a>.</p>\n\n<p>In a special case, <code>action</code> property of the step configuration object can be a function. In this case you can also\nprovide a <code>timeout</code> property, otherwise this case is identical to using functions:</p>\n\n<pre><code>t.chain(\n    {\n        action      : function (next) { ... },\n        // allow 50s for the function to call \"next\" before step will be considered timed-out\n        timeout     : 50000\n    },\n    ...\n)\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>step1</span> : Function/Object/Array<div class='sub-desc'><p>The function to execute or action configuration, or the array of such</p>\n</div></li><li><span class='pre'>step2</span> : Function/Object<div class='sub-desc'><p>The function to execute or action configuration</p>\n</div></li><li><span class='pre'>stepN</span> : Function/Object<div class='sub-desc'><p>The function to execute or action configuration</p>\n</div></li></ul></div></div></div><div id='method-expectGlobals' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Siesta.Test.More'>Siesta.Test.More</span><br/><a href='source/More.html#Siesta-Test-More-method-expectGlobals' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Siesta.Test.More-method-expectGlobals' class='name expandable'>expectGlobals</a>( <span class='pre'>name1, name2, nameN</span> )</div><div class='description'><div class='short'>This method accepts a variable number of names of expected properties in the global scope. ...</div><div class='long'><p>This method accepts a variable number of names of expected properties in the global scope. When verifying the globals with <a href=\"#!/api/Siesta.Test.More-method-verifyGlobals\" rel=\"Siesta.Test.More-method-verifyGlobals\" class=\"docClass\">verifyGlobals</a>\nassertions, the expected gloabls will not be counted as failed assertions.</p>\n\n<p>This method has a synonym with singular name: <code>expectGlobal</code></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name1</span> : String/RegExp<div class='sub-desc'><p>The name of global property or the regular expression to match several properties</p>\n</div></li><li><span class='pre'>name2</span> : String/RegExp<div class='sub-desc'><p>The name of global property or the regular expression to match several properties</p>\n</div></li><li><span class='pre'>nameN</span> : String/RegExp<div class='sub-desc'><p>The name of global property or the regular expression to match several properties</p>\n</div></li></ul></div></div></div><div id='method-isApprox' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Siesta.Test.More'>Siesta.Test.More</span><br/><a href='source/More.html#Siesta-Test-More-method-isApprox' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Siesta.Test.More-method-isApprox' class='name expandable'>isApprox</a>( <span class='pre'>value1, value2, threshHold, desc</span> )</div><div class='description'><div class='short'>This assertion suppose to compare the numeric values. ...</div><div class='long'><p>This assertion suppose to compare the numeric values. It passes when the passed values are approximately the same (the difference\nis withing a threshold). A threshold can be provided explicitly (when assertion is called with 4 arguments),\nor it will be set to 5% from the 1st value (when calling assertion with 3 arguments).</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>value1</span> : Number<div class='sub-desc'><p>The 1st value to compare</p>\n</div></li><li><span class='pre'>value2</span> : Number<div class='sub-desc'><p>The 2nd value to compare</p>\n</div></li><li><span class='pre'>threshHold</span> : Number<div class='sub-desc'><p>The maximum allowed difference between values. This argument can be omited.</p>\n</div></li><li><span class='pre'>desc</span> : String<div class='sub-desc'><p>The description of the assertion</p>\n</div></li></ul></div></div></div><div id='method-isArray' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Siesta.Test.More'>Siesta.Test.More</span><br/><a href='source/More.html#Siesta-Test-More-method-isArray' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Siesta.Test.More-method-isArray' class='name expandable'>isArray</a>( <span class='pre'>value, desc</span> )</div><div class='description'><div class='short'>This assertion passes, if supplied value is an Array ...</div><div class='long'><p>This assertion passes, if supplied value is an Array</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>value</span> : Mixed<div class='sub-desc'><p>The value to check.</p>\n</div></li><li><span class='pre'>desc</span> : String<div class='sub-desc'><p>The description of the assertion</p>\n</div></li></ul></div></div></div><div id='method-isBoolean' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Siesta.Test.More'>Siesta.Test.More</span><br/><a href='source/More.html#Siesta-Test-More-method-isBoolean' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Siesta.Test.More-method-isBoolean' class='name expandable'>isBoolean</a>( <span class='pre'>value, desc</span> )</div><div class='description'><div class='short'>This assertion passes, if supplied value is a Boolean. ...</div><div class='long'><p>This assertion passes, if supplied value is a Boolean.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>value</span> : Mixed<div class='sub-desc'><p>The value to check.</p>\n</div></li><li><span class='pre'>desc</span> : String<div class='sub-desc'><p>The description of the assertion</p>\n</div></li></ul></div></div></div><div id='method-isDate' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Siesta.Test.More'>Siesta.Test.More</span><br/><a href='source/More.html#Siesta-Test-More-method-isDate' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Siesta.Test.More-method-isDate' class='name expandable'>isDate</a>( <span class='pre'>value, desc</span> )</div><div class='description'><div class='short'>This assertion passes, if supplied value is a Date. ...</div><div class='long'><p>This assertion passes, if supplied value is a Date.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>value</span> : Mixed<div class='sub-desc'><p>The value to check.</p>\n</div></li><li><span class='pre'>desc</span> : String<div class='sub-desc'><p>The description of the assertion</p>\n</div></li></ul></div></div></div><div id='method-isDeeply' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Siesta.Test.More'>Siesta.Test.More</span><br/><a href='source/More.html#Siesta-Test-More-method-isDeeply' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Siesta.Test.More-method-isDeeply' class='name expandable'>isDeeply</a>( <span class='pre'>obj1, obj2, desc</span> )</div><div class='description'><div class='short'>This assertion passes when in-depth comparison of 1st and 2nd arguments (which are assumed to be JSON objects) shows ...</div><div class='long'><p>This assertion passes when in-depth comparison of 1st and 2nd arguments (which are assumed to be JSON objects) shows that they are equal.\nComparison is performed with '==' operator, so <code>[ 1 ]</code> and `[ \"1\" ] objects will be equal. The objects should not contain cyclic references.</p>\n\n<p>This method works correctly with the <em>placeholders</em> generated with method any.</p>\n\n<p>This method has a synonym: <code>is_deeply</code></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>obj1</span> : Object<div class='sub-desc'><p>The 1st object to compare</p>\n</div></li><li><span class='pre'>obj2</span> : Object<div class='sub-desc'><p>The 2nd object to compare</p>\n</div></li><li><span class='pre'>desc</span> : String<div class='sub-desc'><p>The description of the assertion</p>\n</div></li></ul></div></div></div><div id='method-isDeeplyStrict' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Siesta.Test.More'>Siesta.Test.More</span><br/><a href='source/More.html#Siesta-Test-More-method-isDeeplyStrict' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Siesta.Test.More-method-isDeeplyStrict' class='name expandable'>isDeeplyStrict</a>( <span class='pre'>obj1, obj2, desc</span> )</div><div class='description'><div class='short'>This assertion passes when in-depth comparison of 1st and 2nd arguments (which are assumed to be JSON objects) shows ...</div><div class='long'><p>This assertion passes when in-depth comparison of 1st and 2nd arguments (which are assumed to be JSON objects) shows that they are equal.\nComparison is performed with '===' operator, so <code>[ 1 ]</code> and `[ \"1\" ] objects will be different. The objects should not contain cyclic references.</p>\n\n<p>This method works correctly with the <em>placeholders</em> generated with method any.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>obj1</span> : Object<div class='sub-desc'><p>The 1st object to compare</p>\n</div></li><li><span class='pre'>obj2</span> : Object<div class='sub-desc'><p>The 2nd object to compare</p>\n</div></li><li><span class='pre'>desc</span> : String<div class='sub-desc'><p>The description of the assertion</p>\n</div></li></ul></div></div></div><div id='method-isGreater' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Siesta.Test.More'>Siesta.Test.More</span><br/><a href='source/More.html#Siesta-Test-More-method-isGreater' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Siesta.Test.More-method-isGreater' class='name expandable'>isGreater</a>( <span class='pre'>value1, value2, desc</span> )</div><div class='description'><div class='short'>This assertion passes, when the comparison of 1st with 2nd, using &gt; operator will return true and fails otherwise. ...</div><div class='long'><p>This assertion passes, when the comparison of 1st with 2nd, using <code>&gt;</code> operator will return <code>true</code> and fails otherwise.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>value1</span> : Number/Date<div class='sub-desc'><p>The 1st value to compare</p>\n</div></li><li><span class='pre'>value2</span> : Number/Date<div class='sub-desc'><p>The 2nd value to compare</p>\n</div></li><li><span class='pre'>desc</span> : String<div class='sub-desc'><p>The description of the assertion</p>\n</div></li></ul></div></div></div><div id='method-isGreaterOrEqual' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Siesta.Test.More'>Siesta.Test.More</span><br/><a href='source/More.html#Siesta-Test-More-method-isGreaterOrEqual' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Siesta.Test.More-method-isGreaterOrEqual' class='name expandable'>isGreaterOrEqual</a>( <span class='pre'>value1, value2, desc</span> )</div><div class='description'><div class='short'>This assertion passes, when the comparison of 1st with 2nd, using &gt;= operator will return true and fails otherwise. ...</div><div class='long'><p>This assertion passes, when the comparison of 1st with 2nd, using <code>&gt;=</code> operator will return <code>true</code> and fails otherwise.</p>\n\n<p>It has a synonym - <code>isGE</code>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>value1</span> : Number/Date<div class='sub-desc'><p>The 1st value to compare</p>\n</div></li><li><span class='pre'>value2</span> : Number/Date<div class='sub-desc'><p>The 2nd value to compare</p>\n</div></li><li><span class='pre'>desc</span> : String<div class='sub-desc'><p>The description of the assertion</p>\n</div></li></ul></div></div></div><div id='method-isLess' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Siesta.Test.More'>Siesta.Test.More</span><br/><a href='source/More.html#Siesta-Test-More-method-isLess' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Siesta.Test.More-method-isLess' class='name expandable'>isLess</a>( <span class='pre'>value1, value2, desc</span> )</div><div class='description'><div class='short'>This assertion passes, when the comparison of 1st with 2nd, using &lt; operator will return true and fails otherwise. ...</div><div class='long'><p>This assertion passes, when the comparison of 1st with 2nd, using <code>&lt;</code> operator will return <code>true</code> and fails otherwise.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>value1</span> : Number/Date<div class='sub-desc'><p>The 1st value to compare</p>\n</div></li><li><span class='pre'>value2</span> : Number/Date<div class='sub-desc'><p>The 2nd value to compare</p>\n</div></li><li><span class='pre'>desc</span> : String<div class='sub-desc'><p>The description of the assertion</p>\n</div></li></ul></div></div></div><div id='method-isLessOrEqual' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Siesta.Test.More'>Siesta.Test.More</span><br/><a href='source/More.html#Siesta-Test-More-method-isLessOrEqual' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Siesta.Test.More-method-isLessOrEqual' class='name expandable'>isLessOrEqual</a>( <span class='pre'>value1, value2, desc</span> )</div><div class='description'><div class='short'>This assertion passes, when the comparison of 1st with 2nd, using &lt;= operator will return true and fails otherwise. ...</div><div class='long'><p>This assertion passes, when the comparison of 1st with 2nd, using <code>&lt;=</code> operator will return <code>true</code> and fails otherwise.</p>\n\n<p>It has a synonym - <code>isLE</code>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>value1</span> : Number/Date<div class='sub-desc'><p>The 1st value to compare</p>\n</div></li><li><span class='pre'>value2</span> : Number/Date<div class='sub-desc'><p>The 2nd value to compare</p>\n</div></li><li><span class='pre'>desc</span> : String<div class='sub-desc'><p>The description of the assertion</p>\n</div></li></ul></div></div></div><div id='method-isNumber' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Siesta.Test.More'>Siesta.Test.More</span><br/><a href='source/More.html#Siesta-Test-More-method-isNumber' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Siesta.Test.More-method-isNumber' class='name expandable'>isNumber</a>( <span class='pre'>value, desc</span> )</div><div class='description'><div class='short'>This assertion passes, if supplied value is a Number. ...</div><div class='long'><p>This assertion passes, if supplied value is a Number.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>value</span> : Mixed<div class='sub-desc'><p>The value to check.</p>\n</div></li><li><span class='pre'>desc</span> : String<div class='sub-desc'><p>The description of the assertion</p>\n</div></li></ul></div></div></div><div id='method-isObject' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Siesta.Test.More'>Siesta.Test.More</span><br/><a href='source/More.html#Siesta-Test-More-method-isObject' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Siesta.Test.More-method-isObject' class='name expandable'>isObject</a>( <span class='pre'>value, desc</span> )</div><div class='description'><div class='short'>This assertion passes, if supplied value is an Object ...</div><div class='long'><p>This assertion passes, if supplied value is an Object</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>value</span> : Mixed<div class='sub-desc'><p>The value to check.</p>\n</div></li><li><span class='pre'>desc</span> : String<div class='sub-desc'><p>The description of the assertion</p>\n</div></li></ul></div></div></div><div id='method-isRegExp' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Siesta.Test.More'>Siesta.Test.More</span><br/><a href='source/More.html#Siesta-Test-More-method-isRegExp' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Siesta.Test.More-method-isRegExp' class='name expandable'>isRegExp</a>( <span class='pre'>value, desc</span> )</div><div class='description'><div class='short'>This assertion passes, if supplied value is a RegExp. ...</div><div class='long'><p>This assertion passes, if supplied value is a RegExp.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>value</span> : Mixed<div class='sub-desc'><p>The value to check.</p>\n</div></li><li><span class='pre'>desc</span> : String<div class='sub-desc'><p>The description of the assertion</p>\n</div></li></ul></div></div></div><div id='method-isString' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Siesta.Test.More'>Siesta.Test.More</span><br/><a href='source/More.html#Siesta-Test-More-method-isString' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Siesta.Test.More-method-isString' class='name expandable'>isString</a>( <span class='pre'>value, desc</span> )</div><div class='description'><div class='short'>This assertion passes, if supplied value is a String. ...</div><div class='long'><p>This assertion passes, if supplied value is a String.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>value</span> : Mixed<div class='sub-desc'><p>The value to check.</p>\n</div></li><li><span class='pre'>desc</span> : String<div class='sub-desc'><p>The description of the assertion</p>\n</div></li></ul></div></div></div><div id='method-isaOk' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Siesta.Test.More'>Siesta.Test.More</span><br/><a href='source/More.html#Siesta-Test-More-method-isaOk' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Siesta.Test.More-method-isaOk' class='name expandable'>isaOk</a>( <span class='pre'>value, className, desc</span> )</div><div class='description'><div class='short'>This assertion passes, when the supplied value is the instance of the className. ...</div><div class='long'><p>This assertion passes, when the supplied <code>value</code> is the instance of the <code>className</code>. The check is performed with\n<code>instanceof</code> operator. The <code>className</code> parameter can be supplied as class constructor or as string, representing the class\nname. In the latter case the <code>class</code> will eval'ed to receive the class constructor.</p>\n\n<p>This method has a synonym: isa_ok</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>value</span> : Mixed<div class='sub-desc'><p>The value to check for 'isa' relationship</p>\n</div></li><li><span class='pre'>className</span> : Class/String<div class='sub-desc'><p>The class to check for 'isa' relationship with <code>value</code></p>\n</div></li><li><span class='pre'>desc</span> : String<div class='sub-desc'><p>The description of the assertion</p>\n</div></li></ul></div></div></div><div id='method-like' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Siesta.Test.More'>Siesta.Test.More</span><br/><a href='source/More.html#Siesta-Test-More-method-like' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Siesta.Test.More-method-like' class='name expandable'>like</a>( <span class='pre'>string, regex, desc</span> )</div><div class='description'><div class='short'>This assertion passes when the passed string matches to a regular expression regex. ...</div><div class='long'><p>This assertion passes when the passed <code>string</code> matches to a regular expression <code>regex</code>. When <code>regex</code> is a string,\nassertion will check that it is a substring of <code>string</code></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>string</span> : String<div class='sub-desc'><p>The string to check for \"likeness\"</p>\n</div></li><li><span class='pre'>regex</span> : String/RegExp<div class='sub-desc'><p>The regex against which to test the string, can be also a plain string</p>\n</div></li><li><span class='pre'>desc</span> : String<div class='sub-desc'><p>The description of the assertion</p>\n</div></li></ul></div></div></div><div id='method-livesOk' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Siesta.Test.More'>Siesta.Test.More</span><br/><a href='source/More.html#Siesta-Test-More-method-livesOk' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Siesta.Test.More-method-livesOk' class='name expandable'>livesOk</a>( <span class='pre'>func, desc</span> )</div><div class='description'><div class='short'>This assertion passes, when the supplied func function doesn't throw an exception during execution. ...</div><div class='long'><p>This assertion passes, when the supplied <code>func</code> function doesn't throw an exception during execution.</p>\n\n<p>This method has two synonyms: <code>lives_ok</code> and <code>lives</code></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>func</span> : Function<div class='sub-desc'><p>The function which is not supposed to throw an exception</p>\n</div></li><li><span class='pre'>desc</span> : String<div class='sub-desc'><p>The description of the assertion</p>\n</div></li></ul></div></div></div><div id='method-throwsOk' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Siesta.Test.More'>Siesta.Test.More</span><br/><a href='source/More.html#Siesta-Test-More-method-throwsOk' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Siesta.Test.More-method-throwsOk' class='name expandable'>throwsOk</a>( <span class='pre'>func, expected, desc</span> )</div><div class='description'><div class='short'>This assertion passes, when the func function throws the exception during executing, and the\nstringified exception pa...</div><div class='long'><p>This assertion passes, when the <code>func</code> function throws the exception during executing, and the\nstringified exception passes the 'like' assertion (with 'expected' parameter).</p>\n\n<p>It has synonyms - <code>throws_ok</code> and <code>throws</code>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>func</span> : Function<div class='sub-desc'><p>The function which supposed to throw an exception</p>\n</div></li><li><span class='pre'>expected</span> : String/RegExp<div class='sub-desc'><p>The regex against which to test the stringified exception, can be also a plain string</p>\n</div></li><li><span class='pre'>desc</span> : String<div class='sub-desc'><p>The description of the assertion</p>\n</div></li></ul></div></div></div><div id='method-unlike' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Siesta.Test.More'>Siesta.Test.More</span><br/><a href='source/More.html#Siesta-Test-More-method-unlike' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Siesta.Test.More-method-unlike' class='name expandable'>unlike</a>( <span class='pre'>string, regex, desc</span> )</div><div class='description'><div class='short'>This method is the opposite of 'like', it adds failed assertion, when the string matches the passed regex. ...</div><div class='long'><p>This method is the opposite of 'like', it adds failed assertion, when the string matches the passed regex.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>string</span> : String<div class='sub-desc'><p>The string to check for \"unlikeness\"</p>\n</div></li><li><span class='pre'>regex</span> : String/RegExp<div class='sub-desc'><p>The regex against which to test the string, can be also a plain string</p>\n</div></li><li><span class='pre'>desc</span> : String<div class='sub-desc'><p>The description of the assertion</p>\n</div></li></ul></div></div></div><div id='method-verifyGlobals' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Siesta.Test.More'>Siesta.Test.More</span><br/><a href='source/More.html#Siesta-Test-More-method-verifyGlobals' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Siesta.Test.More-method-verifyGlobals' class='name expandable'>verifyGlobals</a>( <span class='pre'>name1, name2, nameN</span> )</div><div class='description'><div class='short'>This method accepts a variable number of names of expected properties in the global scope and then performs a globals...</div><div class='long'><p>This method accepts a variable number of names of expected properties in the global scope and then performs a globals check.</p>\n\n<p>It will scan all globals properties in the scope of test and compare them with the list of expected globals. Expected globals can be provided with:\n<a href=\"#!/api/Siesta.Test.More-method-expectGlobals\" rel=\"Siesta.Test.More-method-expectGlobals\" class=\"docClass\">expectGlobals</a> method or <a href=\"#!/api/Siesta.Harness-cfg-expectedGlobals\" rel=\"Siesta.Harness-cfg-expectedGlobals\" class=\"docClass\">expectedGlobals</a> configuration option of harness.</p>\n\n<p>You can enable this assertion to automatically happen at the end of each test, using <a href=\"#!/api/Siesta.Harness-cfg-autoCheckGlobals\" rel=\"Siesta.Harness-cfg-autoCheckGlobals\" class=\"docClass\">autoCheckGlobals</a> option of the harness.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name1</span> : String/RegExp<div class='sub-desc'><p>The name of global property or the regular expression to match several properties</p>\n</div></li><li><span class='pre'>name2</span> : String/RegExp<div class='sub-desc'><p>The name of global property or the regular expression to match several properties</p>\n</div></li><li><span class='pre'>nameN</span> : String/RegExp<div class='sub-desc'><p>The name of global property or the regular expression to match several properties</p>\n</div></li></ul></div></div></div><div id='method-waitFor' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Siesta.Test.More'>Siesta.Test.More</span><br/><a href='source/More.html#Siesta-Test-More-method-waitFor' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Siesta.Test.More-method-waitFor' class='name expandable'>waitFor</a>( <span class='pre'>method, callback, scope, timeout, [interval]</span> ) : Object</div><div class='description'><div class='short'>Waits for passed checker method to return true (or any non-false value, like for example DOM element or array), and c...</div><div class='long'><p>Waits for passed checker method to return true (or any non-false value, like for example DOM element or array), and calls the callback when this happens.\nAs an additional feature, the callback will receive the result from the checker method as the 1st argument.</p>\n\n<pre><code>t.waitFor(\n    function () { return document.getElementById('someEl') },\n    function (el) {\n        // waited for element #someEl to appear\n        // element will be available in the callback as 1st argument \"el\"\n    }\n})\n</code></pre>\n\n<p>You can also call this method with a single Object having the following properties: <code>method</code>, <code>callback</code>, <code>scope</code>, <code>timeout</code>, <code>interval</code>:</p>\n\n<pre><code>t.waitFor({\n    method      : function () { return document.getElementById('someEl') },\n    callback    : function (el) {\n        // waited for element #someEl to appear\n        // element will be available in the callback as 1st argument \"el\"\n    }\n})\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>method</span> : Object/Function/Number<div class='sub-desc'><p>Either a function which should return true when a certain condition has been fulfilled, or a number of ms to wait before calling the callback.</p>\n</div></li><li><span class='pre'>callback</span> : Function<div class='sub-desc'><p>A function to call when the condition has been met. Will receive a result from checker function.</p>\n</div></li><li><span class='pre'>scope</span> : Object<div class='sub-desc'><p>The scope for the callback</p>\n</div></li><li><span class='pre'>timeout</span> : Int<div class='sub-desc'><p>The maximum amount of time (in milliseconds) to wait for the condition to be fulfilled.\nDefaults to the <a href=\"#!/api/Siesta.Test.ExtJS-cfg-waitForTimeout\" rel=\"Siesta.Test.ExtJS-cfg-waitForTimeout\" class=\"docClass\">Siesta.Test.ExtJS.waitForTimeout</a> value. If condition is not fullfilled within this time, a failed assertion will be added to the test.</p>\n</div></li><li><span class='pre'>interval</span> : Int (optional)<div class='sub-desc'><p>The polling interval (in milliseconds)</p>\n<p>Defaults to: <code>100</code></p></div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>An object with the following properties:</p>\n<ul><li><span class='pre'>force</span> : Function<div class='sub-desc'><p>A function, that will force this wait operation to immediately complete (and call the callback).\nNo call to checker will be performed and callback will not receive a result from it.</p>\n</div></li></ul></div></li></ul></div></div></div></div></div></div></div>"});