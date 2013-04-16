Ext.data.JsonP.Siesta_Harness_NodeJS({"tagname":"class","name":"Siesta.Harness.NodeJS","extends":"Siesta.Harness","mixins":[],"alternateClassNames":[],"aliases":{},"singleton":false,"requires":[],"uses":[],"enum":null,"override":null,"inheritable":null,"inheritdoc":null,"meta":{},"private":null,"id":"class-Siesta.Harness.NodeJS","members":{"cfg":[{"name":"alsoPreload","tagname":"cfg","owner":"Siesta.Harness","meta":{},"id":"cfg-alsoPreload"},{"name":"autoCheckGlobals","tagname":"cfg","owner":"Siesta.Harness","meta":{},"id":"cfg-autoCheckGlobals"},{"name":"cachePreload","tagname":"cfg","owner":"Siesta.Harness","meta":{},"id":"cfg-cachePreload"},{"name":"defaultTimeout","tagname":"cfg","owner":"Siesta.Harness","meta":{},"id":"cfg-defaultTimeout"},{"name":"disableColoring","tagname":"cfg","owner":"Siesta.Role.CanStyleOutput","meta":{},"id":"cfg-disableColoring"},{"name":"expectedGlobals","tagname":"cfg","owner":"Siesta.Harness","meta":{},"id":"cfg-expectedGlobals"},{"name":"isReadyTimeout","tagname":"cfg","owner":"Siesta.Harness","meta":{},"id":"cfg-isReadyTimeout"},{"name":"keepNLastResults","tagname":"cfg","owner":"Siesta.Harness","meta":{},"id":"cfg-keepNLastResults"},{"name":"keepResults","tagname":"cfg","owner":"Siesta.Harness","meta":{},"id":"cfg-keepResults"},{"name":"listeners","tagname":"cfg","owner":"Siesta.Harness","meta":{},"id":"cfg-listeners"},{"name":"maxThreads","tagname":"cfg","owner":"Siesta.Harness","meta":{},"id":"cfg-maxThreads"},{"name":"needDone","tagname":"cfg","owner":"Siesta.Harness","meta":{},"id":"cfg-needDone"},{"name":"overrideSetTimeout","tagname":"cfg","owner":"Siesta.Harness","meta":{},"id":"cfg-overrideSetTimeout"},{"name":"pauseBetweenTests","tagname":"cfg","owner":"Siesta.Harness","meta":{},"id":"cfg-pauseBetweenTests"},{"name":"preload","tagname":"cfg","owner":"Siesta.Harness","meta":{},"id":"cfg-preload"},{"name":"runCore","tagname":"cfg","owner":"Siesta.Harness","meta":{},"id":"cfg-runCore"},{"name":"subTestTimeout","tagname":"cfg","owner":"Siesta.Harness","meta":{},"id":"cfg-subTestTimeout"},{"name":"testClass","tagname":"cfg","owner":"Siesta.Harness","meta":{},"id":"cfg-testClass"},{"name":"title","tagname":"cfg","owner":"Siesta.Harness","meta":{},"id":"cfg-title"},{"name":"transparentEx","tagname":"cfg","owner":"Siesta.Harness","meta":{},"id":"cfg-transparentEx"},{"name":"waitForTimeout","tagname":"cfg","owner":"Siesta.Harness","meta":{},"id":"cfg-waitForTimeout"}],"property":[],"method":[{"name":"configure","tagname":"method","owner":"Siesta.Harness","meta":{},"id":"method-configure"},{"name":"start","tagname":"method","owner":"Siesta.Harness","meta":{},"id":"method-start"}],"event":[{"name":"testsuiteend","tagname":"event","owner":"Siesta.Harness","meta":{},"id":"event-testsuiteend"},{"name":"testsuitestart","tagname":"event","owner":"Siesta.Harness","meta":{},"id":"event-testsuitestart"}],"css_var":[],"css_mixin":[]},"linenr":9,"files":[{"filename":"NodeJS.js","href":"NodeJS2.html#Siesta-Harness-NodeJS"}],"html_meta":{},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"component":false,"superclasses":["Siesta.Harness"],"subclasses":[],"mixedInto":[],"parentMixins":["Siesta.Role.CanStyleOutput"],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'><a href='#!/api/Siesta.Harness' rel='Siesta.Harness' class='docClass'>Siesta.Harness</a><div class='subclass '><strong>Siesta.Harness.NodeJS</strong></div></div><h4>Inherited mixins</h4><div class='dependency'><a href='#!/api/Siesta.Role.CanStyleOutput' rel='Siesta.Role.CanStyleOutput' class='docClass'>Siesta.Role.CanStyleOutput</a></div><h4>Files</h4><div class='dependency'><a href='source/NodeJS2.html#Siesta-Harness-NodeJS' target='_blank'>NodeJS.js</a></div></pre><div class='doc-contents'><p>Class, representing the NodeJS harness. This class reports the output from all test files to console.</p>\n\n<p>This file is a reference only however, for a getting start guide and manual, please refer to <a href=\"#!/guide/siesta_getting_started\">Getting Started Guide</a>.</p>\n\n<h1>Synopsys</h1>\n\n<pre><code>var Harness,\n    isNode        = typeof process != 'undefined' &amp;&amp; process.pid\n\nif (isNode) {\n    Harness = require('siesta');\n} else {\n    Harness = <a href=\"#!/api/Siesta.Harness.Browser\" rel=\"Siesta.Harness.Browser\" class=\"docClass\">Siesta.Harness.Browser</a>;\n}\n\n\nHarness.configure({\n    title     : 'Awesome Test Suite',\n\n    transparentEx       : true,\n\n    autoCheckGlobals    : true,\n    expectedGlobals     : [\n        'Ext',\n        'Sch'\n    ],\n\n    preload : [\n        \"http://cdn.sencha.io/ext-4.0.2a/ext-all-debug.js\",\n        \"../awesome-project-all.js\",\n        {\n            text    : \"console.log('preload completed')\"\n        }\n    ]\n})\n\n\nHarness.start(\n    // simple string - url relative to harness file\n    'sanity.t.js',\n\n    // test file descriptor with own configuration options\n    {\n        url     : 'basic.t.js',\n\n        // replace `preload` option of harness\n        preload : [\n            \"http://cdn.sencha.io/ext-4.0.6/ext-all-debug.js\",\n            \"../awesome-project-all.js\"\n        ]\n    },\n\n    // groups (\"folders\") of test files (possibly with own options)\n    {\n        group       : 'Sanity',\n\n        autoCheckGlobals    : false,\n\n        items       : [\n            'data/crud.t.js',\n            ...\n        ]\n    },\n    ...\n)\n</code></pre>\n\n<h1>Running the test suite in NodeJS</h1>\n\n<p>To run the suite in NodeJS, launch the harness javascript file:</p>\n\n<pre><code>&gt; node t/index.js\n</code></pre>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-alsoPreload' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Siesta.Harness' rel='Siesta.Harness' class='defined-in docClass'>Siesta.Harness</a><br/><a href='source/Harness.html#Siesta-Harness-cfg-alsoPreload' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Siesta.Harness-cfg-alsoPreload' class='name expandable'>alsoPreload</a><span> : Array</span></div><div class='description'><div class='short'>The array with preload descriptors describing which files/code should be preloaded additionally. ...</div><div class='long'><p>The array with preload descriptors describing which files/code should be preloaded <strong>additionally</strong>.</p>\n\n<p>This option can be also specified in the test file descriptor.</p>\n</div></div></div><div id='cfg-autoCheckGlobals' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Siesta.Harness' rel='Siesta.Harness' class='defined-in docClass'>Siesta.Harness</a><br/><a href='source/Harness.html#Siesta-Harness-cfg-autoCheckGlobals' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Siesta.Harness-cfg-autoCheckGlobals' class='name expandable'>autoCheckGlobals</a><span> : Boolean</span></div><div class='description'><div class='short'>When set to true, harness will automatically issue an Siesta.Test.verifyGlobals assertion at the end of each test,\nso...</div><div class='long'><p>When set to <code>true</code>, harness will automatically issue an <a href=\"#!/api/Siesta.Test-method-verifyGlobals\" rel=\"Siesta.Test-method-verifyGlobals\" class=\"docClass\">Siesta.Test.verifyGlobals</a> assertion at the end of each test,\nso you won't have to manually specify it each time. The assertion will be triggered only if test completed successfully. Default value is <code>false</code>.\nSee also <a href=\"#!/api/Siesta.Harness-cfg-expectedGlobals\" rel=\"Siesta.Harness-cfg-expectedGlobals\" class=\"docClass\">expectedGlobals</a> configuration option and <a href=\"#!/api/Siesta.Test-method-expectGlobals\" rel=\"Siesta.Test-method-expectGlobals\" class=\"docClass\">Siesta.Test.expectGlobals</a> method.</p>\n\n<p>This option will be always disabled in Opera, since every DOM element with <code>id</code> is being added as a global symbol in it.</p>\n\n<p>This option can be also specified in the test file descriptor.</p>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='cfg-cachePreload' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Siesta.Harness' rel='Siesta.Harness' class='defined-in docClass'>Siesta.Harness</a><br/><a href='source/Harness.html#Siesta-Harness-cfg-cachePreload' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Siesta.Harness-cfg-cachePreload' class='name expandable'>cachePreload</a><span> : Boolean</span></div><div class='description'><div class='short'>When set to true, harness will cache the content of the preload files and provide it for each test, instead of loadin...</div><div class='long'><p>When set to <code>true</code>, harness will cache the content of the preload files and provide it for each test, instead of loading it\nfrom network each time. This option may give a slight speedup in tests execution (especially when running the suite from the remote server), but see the\ncaveats below. Default value is <code>false</code>.</p>\n\n<p>Caveats: this option doesn't work very well for CSS (due to broken relative urls for images). Also its not \"debugging-friendly\" - as you will not be able\nto setup breakpoints for cached code.</p>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='cfg-defaultTimeout' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Siesta.Harness' rel='Siesta.Harness' class='defined-in docClass'>Siesta.Harness</a><br/><a href='source/Harness.html#Siesta-Harness-cfg-defaultTimeout' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Siesta.Harness-cfg-defaultTimeout' class='name expandable'>defaultTimeout</a><span> : Number</span></div><div class='description'><div class='short'>Default timeout for beginAsync operation (in milliseconds). ...</div><div class='long'><p>Default timeout for <code>beginAsync</code> operation (in milliseconds). Default value is 15000.</p>\n\n<p>This option can be also specified in the test file descriptor.</p>\n<p>Defaults to: <code>15000</code></p></div></div></div><div id='cfg-disableColoring' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Siesta.Role.CanStyleOutput' rel='Siesta.Role.CanStyleOutput' class='defined-in docClass'>Siesta.Role.CanStyleOutput</a><br/><a href='source/CanStyleOutput.html#Siesta-Role-CanStyleOutput-cfg-disableColoring' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Siesta.Role.CanStyleOutput-cfg-disableColoring' class='name expandable'>disableColoring</a><span> : Boolean</span></div><div class='description'><div class='short'>When set to true will disable the colors in the console output in automation launchers / NodeJS launcher ...</div><div class='long'><p>When set to <code>true</code> will disable the colors in the console output in automation launchers / NodeJS launcher</p>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='cfg-expectedGlobals' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Siesta.Harness' rel='Siesta.Harness' class='defined-in docClass'>Siesta.Harness</a><br/><a href='source/Harness.html#Siesta-Harness-cfg-expectedGlobals' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Siesta.Harness-cfg-expectedGlobals' class='name expandable'>expectedGlobals</a><span> : Array</span></div><div class='description'><div class='short'>An array of properties names which are likely to present in the scope of each test. ...</div><div class='long'><p>An array of properties names which are likely to present in the scope of each test. There is no need to provide the name\nof built-in globals - harness will automatically scan them from the empty context. Only provide the names of global properties which will be created\nby your preload code.</p>\n\n<p>For example</p>\n\n<pre><code>Harness.configure({\n    title               : 'Ext Scheduler Test Suite',\n\n    autoCheckGlobals    : true,\n    expectedGlobals     : [\n        'Ext',\n        'MyProject',\n        'SomeExternalLibrary'\n    ],\n    ...\n})\n</code></pre>\n\n<p>This option can be also specified in the test file descriptor.</p>\n</div></div></div><div id='cfg-isReadyTimeout' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Siesta.Harness' rel='Siesta.Harness' class='defined-in docClass'>Siesta.Harness</a><br/><a href='source/Harness.html#Siesta-Harness-cfg-isReadyTimeout' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Siesta.Harness-cfg-isReadyTimeout' class='name expandable'>isReadyTimeout</a><span> : Number</span></div><div class='description'><div class='short'>Default timeout for test start (in milliseconds). ...</div><div class='long'><p>Default timeout for test start (in milliseconds). Default value is 15000. See <a href=\"#!/api/Siesta.Test-method-isReady\" rel=\"Siesta.Test-method-isReady\" class=\"docClass\">Siesta.Test.isReady</a> for details.</p>\n\n<p>This option can be also specified in the test file descriptor.</p>\n<p>Defaults to: <code>10000</code></p></div></div></div><div id='cfg-keepNLastResults' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Siesta.Harness' rel='Siesta.Harness' class='defined-in docClass'>Siesta.Harness</a><br/><a href='source/Harness.html#Siesta-Harness-cfg-keepNLastResults' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Siesta.Harness-cfg-keepNLastResults' class='name expandable'>keepNLastResults</a><span> : Number</span></div><div class='description'><div class='short'>Only meaningful when keepResults is set to false. ...</div><div class='long'><p>Only meaningful when <a href=\"#!/api/Siesta.Harness-cfg-keepResults\" rel=\"Siesta.Harness-cfg-keepResults\" class=\"docClass\">keepResults</a> is set to <code>false</code>. Indicates the number of the test results which still should be kept, for user examination.\nResults are cleared when their total number exceed this value, based on FIFO order.</p>\n<p>Defaults to: <code>2</code></p></div></div></div><div id='cfg-keepResults' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Siesta.Harness' rel='Siesta.Harness' class='defined-in docClass'>Siesta.Harness</a><br/><a href='source/Harness.html#Siesta-Harness-cfg-keepResults' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Siesta.Harness-cfg-keepResults' class='name expandable'>keepResults</a><span> : Boolean</span></div><div class='description'><div class='short'>When set to true, harness will not cleanup the context of the test immediately. ...</div><div class='long'><p>When set to <code>true</code>, harness will not cleanup the context of the test immediately. Instead it will do so, only when\nthe test will run again. This will allow you for example to examine the DOM of tests. Default value is <code>true</code></p>\n<p>Defaults to: <code>true</code></p></div></div></div><div id='cfg-listeners' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Siesta.Harness' rel='Siesta.Harness' class='defined-in docClass'>Siesta.Harness</a><br/><a href='source/Harness.html#Siesta-Harness-cfg-listeners' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Siesta.Harness-cfg-listeners' class='name expandable'>listeners</a><span> : Object</span></div><div class='description'><div class='short'>The object which keys corresponds to event names and values - to event handlers. ...</div><div class='long'><p>The object which keys corresponds to event names and values - to event handlers. If provided, the special key \"scope\" will be treated as the\nscope for all event handlers, otherwise the harness itself will be used as scope.</p>\n\n<p>Note, that the events from individual <a href=\"#!/api/Siesta.Test\" rel=\"Siesta.Test\" class=\"docClass\">test cases</a> instances will bubble up to the harness - you can listen to all of them in one place:</p>\n\n<pre><code>Harness.configure({\n    title     : 'Awesome Test Suite',\n\n    preload : [\n        'http://cdn.sencha.io/ext-4.1.0-gpl/resources/css/ext-all.css',\n        'http://cdn.sencha.io/ext-4.1.0-gpl/ext-all-debug.js',\n\n        'preload.js'\n    ],\n\n    listeners : {\n        testsuitestart      : function (event, harness) {\n            log('Test suite is starting: ' + harness.title)\n        },\n        testsuiteend        : function (event, harness) {\n            log('Test suite is finishing: ' + harness.title)\n        },\n        teststart           : function (event, test) {\n            log('Test case is starting: ' + test.url)\n        },\n        testupdate          : function (event, test, result) {\n            log('Test case [' + test.url + '] has been updated: ' + result.description + (result.annotation ? ', ' + result.annotation : ''))\n        },\n        testfailedwithexception : function (event, test) {\n            log('Test case [' + test.url + '] has failed with exception: ' + test.failedException)\n        },\n        testfinalize        : function (event, test) {\n            log('Test case [' + test.url + '] has completed')\n        }\n    }\n})\n</code></pre>\n</div></div></div><div id='cfg-maxThreads' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Siesta.Harness' rel='Siesta.Harness' class='defined-in docClass'>Siesta.Harness</a><br/><a href='source/Harness.html#Siesta-Harness-cfg-maxThreads' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Siesta.Harness-cfg-maxThreads' class='name expandable'>maxThreads</a><span> : Number</span></div><div class='description'><div class='short'>The maximum number of tests running at the same time. ...</div><div class='long'><p>The maximum number of tests running at the same time. Only applicable for <code>parallel</code> run-core.</p>\n<p>Defaults to: <code>4</code></p></div></div></div><div id='cfg-needDone' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Siesta.Harness' rel='Siesta.Harness' class='defined-in docClass'>Siesta.Harness</a><br/><a href='source/Harness.html#Siesta-Harness-cfg-needDone' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Siesta.Harness-cfg-needDone' class='name expandable'>needDone</a><span> : Boolean</span></div><div class='description'><div class='short'>When set to true, the tests will must indicate that that they have reached the correct exit point with t.done() call,...</div><div class='long'><p>When set to <code>true</code>, the tests will must indicate that that they have reached the correct exit point with <code>t.done()</code> call,\nafter which, adding any assertions is not allowed. Using this option will ensure that test did not exit prematurely with some exception silently caught.</p>\n\n<p>This option can be also specified in the test file descriptor.</p>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='cfg-overrideSetTimeout' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Siesta.Harness' rel='Siesta.Harness' class='defined-in docClass'>Siesta.Harness</a><br/><a href='source/Harness.html#Siesta-Harness-cfg-overrideSetTimeout' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Siesta.Harness-cfg-overrideSetTimeout' class='name expandable'>overrideSetTimeout</a><span> : Boolean</span></div><div class='description'><div class='short'>When set to true, the tests will override the native \"setTimeout\" from the context of each test\nfor asynchronous code...</div><div class='long'><p>When set to <code>true</code>, the tests will override the native \"setTimeout\" from the context of each test\nfor asynchronous code tracking. If setting it to false, you will need to use <code>beginAsync/endAsync</code> calls to indicate that test is still running.</p>\n\n<p>This option can be also specified in the test file descriptor. Defaults to false.</p>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='cfg-pauseBetweenTests' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Siesta.Harness' rel='Siesta.Harness' class='defined-in docClass'>Siesta.Harness</a><br/><a href='source/Harness.html#Siesta-Harness-cfg-pauseBetweenTests' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Siesta.Harness-cfg-pauseBetweenTests' class='name expandable'>pauseBetweenTests</a><span> : Number</span></div><div class='description'><div class='short'>Default timeout between tests (in milliseconds). ...</div><div class='long'><p>Default timeout between tests (in milliseconds). Increase this settings for big test suites, to give browser time for memory cleanup.</p>\n<p>Defaults to: <code>300</code></p></div></div></div><div id='cfg-preload' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Siesta.Harness' rel='Siesta.Harness' class='defined-in docClass'>Siesta.Harness</a><br/><a href='source/Harness.html#Siesta-Harness-cfg-preload' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Siesta.Harness-cfg-preload' class='name expandable'>preload</a><span> : Array</span></div><div class='description'><div class='short'>The array which contains the preload descriptors describing which files/code should be preloaded into the scope of ea...</div><div class='long'><p>The array which contains the <em>preload descriptors</em> describing which files/code should be preloaded into the scope of each test.</p>\n\n<p>Preload descriptor can be:</p>\n\n<ul>\n<li>a string, containing an url to load (cross-domain urls are ok, if url ends with \".css\" it will be loaded as CSS)</li>\n<li>an object <code>{ type : 'css/js', url : '...' }</code> allowing to specify the CSS files with different extension</li>\n<li>an object <code>{ type : 'css/js', content : '...' }</code> allowing to specify the inline content for script / style</li>\n<li>an object <code>{ text : '...' }</code> which is a shortcut for <code>{ type : 'js', content : '...' }</code></li>\n</ul>\n\n\n<p>For example:</p>\n\n<pre><code>Harness.configure({\n    title           : 'Ext Scheduler Test Suite',\n\n    preload         : [\n        'http://cdn.sencha.io/ext-4.0.2a/resources/css/ext-all.css',\n        'http://cdn.sencha.io/ext-4.0.2a/ext-all-debug.js',\n        {\n            text    : 'MySpecialGlobalFunc = function () { if (typeof console != \"undefined\") ... }'\n        }\n    ],\n    ...\n})\n</code></pre>\n\n<p>This option can be also specified in the test file descriptor. <strong>Note</strong>, that if test descriptor has non-empty <a href=\"#!/api/Siesta.Harness.Browser-cfg-hostPageUrl\" rel=\"Siesta.Harness.Browser-cfg-hostPageUrl\" class=\"docClass\">hostPageUrl</a>\noption, then <em>it will not inherit</em> the <code>preload</code> option from parent descriptors or harness.</p>\n</div></div></div><div id='cfg-runCore' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Siesta.Harness' rel='Siesta.Harness' class='defined-in docClass'>Siesta.Harness</a><br/><a href='source/Harness.html#Siesta-Harness-cfg-runCore' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Siesta.Harness-cfg-runCore' class='name expandable'>runCore</a><span> : String</span></div><div class='description'><div class='short'>Either parallel or sequential. ...</div><div class='long'><p>Either <code>parallel</code> or <code>sequential</code>. Indicates how the individual tests should be run - several at once or one-by-one.\nDefault value is \"parallel\". You do not need to change this option usually.</p>\n<p>Defaults to: <code>'parallel'</code></p></div></div></div><div id='cfg-subTestTimeout' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Siesta.Harness' rel='Siesta.Harness' class='defined-in docClass'>Siesta.Harness</a><br/><a href='source/Harness.html#Siesta-Harness-cfg-subTestTimeout' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Siesta.Harness-cfg-subTestTimeout' class='name expandable'>subTestTimeout</a><span> : Number</span></div><div class='description'><div class='short'>Default timeout for sub tests. ...</div><div class='long'><p>Default timeout for sub tests. Default value is twice bigger than <a href=\"#!/api/Siesta.Harness-cfg-defaultTimeout\" rel=\"Siesta.Harness-cfg-defaultTimeout\" class=\"docClass\">defaultTimeout</a>.</p>\n\n<p>This option can be also specified in the test file descriptor.</p>\n</div></div></div><div id='cfg-testClass' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Siesta.Harness' rel='Siesta.Harness' class='defined-in docClass'>Siesta.Harness</a><br/><a href='source/Harness.html#Siesta-Harness-cfg-testClass' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Siesta.Harness-cfg-testClass' class='name expandable'>testClass</a><span> : Class</span></div><div class='description'><div class='short'>The test class which will be used for creating test instances, defaults to Siesta.Test. ...</div><div class='long'><p>The test class which will be used for creating test instances, defaults to <a href=\"#!/api/Siesta.Test\" rel=\"Siesta.Test\" class=\"docClass\">Siesta.Test</a>.\nYou can subclass <a href=\"#!/api/Siesta.Test\" rel=\"Siesta.Test\" class=\"docClass\">Siesta.Test</a> and provide a new class.</p>\n\n<p>This option can be also specified in the test file descriptor.</p>\n</div></div></div><div id='cfg-title' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Siesta.Harness' rel='Siesta.Harness' class='defined-in docClass'>Siesta.Harness</a><br/><a href='source/Harness.html#Siesta-Harness-cfg-title' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Siesta.Harness-cfg-title' class='name expandable'>title</a><span> : String</span></div><div class='description'><div class='short'>The title of the test suite. ...</div><div class='long'><p>The title of the test suite. Can contain HTML. When provided in the test file descriptor - will change the name of test in the harness UI.</p>\n</div></div></div><div id='cfg-transparentEx' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Siesta.Harness' rel='Siesta.Harness' class='defined-in docClass'>Siesta.Harness</a><br/><a href='source/Harness.html#Siesta-Harness-cfg-transparentEx' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Siesta.Harness-cfg-transparentEx' class='name expandable'>transparentEx</a><span> : Boolean</span></div><div class='description'><div class='short'>When set to true harness will not try to catch any exception, thrown from the test code. ...</div><div class='long'><p>When set to <code>true</code> harness will not try to catch any exception, thrown from the test code.\nThis is very useful for debugging - you can for example use the \"break on error\" option in Firebug.\nBut, using this option may naturally lead to unhandled exceptions, which may leave the harness in incosistent state -\nrefresh the browser page in such case.</p>\n\n<p>Defaults to <code>false</code> - harness will do its best to detect any exception thrown from the test code.</p>\n\n<p>This option can be also specified in the test file descriptor.</p>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='cfg-waitForTimeout' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Siesta.Harness' rel='Siesta.Harness' class='defined-in docClass'>Siesta.Harness</a><br/><a href='source/Harness.html#Siesta-Harness-cfg-waitForTimeout' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Siesta.Harness-cfg-waitForTimeout' class='name expandable'>waitForTimeout</a><span> : Number</span></div><div class='description'><div class='short'>Default timeout for waitFor (in milliseconds). ...</div><div class='long'><p>Default timeout for <code>waitFor</code> (in milliseconds). Default value is 10000.</p>\n\n<p>This option can be also specified in the test file descriptor.</p>\n<p>Defaults to: <code>10000</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-configure' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Siesta.Harness' rel='Siesta.Harness' class='defined-in docClass'>Siesta.Harness</a><br/><a href='source/Harness.html#Siesta-Harness-method-configure' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Siesta.Harness-method-configure' class='name expandable'>configure</a>( <span class='pre'>config</span> )</div><div class='description'><div class='short'>This method configures the harness instance. ...</div><div class='long'><p>This method configures the harness instance. It just copies the passed configuration option into harness instance.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>config</span> : Object<div class='sub-desc'><ul>\n<li>configuration options (values of attributes for this class)</li>\n</ul>\n\n</div></li></ul></div></div></div><div id='method-start' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Siesta.Harness' rel='Siesta.Harness' class='defined-in docClass'>Siesta.Harness</a><br/><a href='source/Harness.html#Siesta-Harness-method-start' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Siesta.Harness-method-start' class='name expandable'>start</a>( <span class='pre'>descriptor1, descriptor2, descriptorN</span> )</div><div class='description'><div class='short'>This method will launch a test suite. ...</div><div class='long'><p>This method will launch a test suite. It accepts a variable number of <em>test file descriptors</em> or an array of such. A test file descritor is one of the following:</p>\n\n<ul>\n<li>a string, containing a test file url</li>\n<li>an object containing the <code>url</code> property <code>{ url : '...', option1 : 'value1', option2 : 'value2' }</code>. The <code>url</code> property should point to the test file.\nOther properties can contain values of some configuration options of the harness (marked accordingly). In this case, they will <strong>override</strong> the corresponding values,\nprovided to harness or parent descriptor.</li>\n<li>an object <code>{ group : 'groupName', items : [], expanded : true, option1 : 'value1' }</code> specifying the folder of test files. The <code>expanded</code> property\nsets the initial state of the folder - \"collapsed/expanded\". The <code>items</code> property can contain an array of test file descriptors.\nOther properties will override the applicable harness options <strong>for all child descriptors</strong>.</li>\n</ul>\n\n\n<p>Groups (folder) may contain nested groups. Number of nesting levels is not limited.</p>\n\n<p>For example, one may easily have a special group of test files, having its own preload configuration (for example for testing on-demand loading). In the same\ntime some test in that group may have its own preload, overriding others.</p>\n\n<pre><code>Harness.configure({\n    title           : 'Ext Scheduler Test Suite',\n    preload         : [\n        'http://cdn.sencha.io/ext-4.0.2a/resources/css/ext-all.css',\n        'http://cdn.sencha.io/ext-4.0.2a/ext-all-debug.js',\n        '../awesome-app-all-debug.js'\n    ],\n    ...\n})\n\nHarness.start(\n    // regular file\n    'data/crud.t.js',\n    // a group with own \"preload\" config for its items\n    {\n        group       : 'On-demand loading',\n\n        preload     : [\n            'http://cdn.sencha.io/ext-4.0.2a/resources/css/ext-all.css',\n            'http://cdn.sencha.io/ext-4.0.2a/ext-all-debug.js',\n        ],\n        items       : [\n            'ondemand/sanity.t.js',\n            'ondemand/special-test.t.js',\n            // a test descriptor with its own \"preload\" config (have the most priority)\n            {\n                url         : 'ondemand/4-0-6-compat.t.js',\n                preload     : [\n                    'http://cdn.sencha.io/ext-4.0.6/resources/css/ext-all.css',\n                    'http://cdn.sencha.io/ext-4.0.6/ext-all-debug.js',\n                ]\n            },\n            // sub-group\n            {\n                group       : 'Sub-group',\n                items       : [\n                    ...\n                ]\n            }\n        ]\n    },\n    ...\n)\n</code></pre>\n\n<p>Additionally, you can provide a test descriptor in the test file itself, adding it as the 1st or 2nd argument for <code>StartTest</code> call:</p>\n\n<pre><code>StartTest({\n    autoCheckGlobals    : false,\n    alsoPreload         : [ 'some_additional_preload.js' ]\n}, function (t) {\n    ...\n}) \n</code></pre>\n\n<p>Values from this object takes the highest priority and will override any other configuration.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>descriptor1</span> : Array/Mixed<div class='sub-desc'><p>or an array of descriptors</p>\n</div></li><li><span class='pre'>descriptor2</span> : Mixed<div class='sub-desc'>\n</div></li><li><span class='pre'>descriptorN</span> : Mixed<div class='sub-desc'>\n</div></li></ul></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-event'>Events</h3><div class='subsection'><div id='event-testsuiteend' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Siesta.Harness' rel='Siesta.Harness' class='defined-in docClass'>Siesta.Harness</a><br/><a href='source/Harness.html#Siesta-Harness-event-testsuiteend' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Siesta.Harness-event-testsuiteend' class='name expandable'>testsuiteend</a>( <span class='pre'>event, harness</span> )</div><div class='description'><div class='short'>This event is fired when the test suite ends. ...</div><div class='long'><p>This event is fired when the test suite ends. Note, that when running the test suite in the browsers, this event can be fired several times\n(for each group of tests you've launched).</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>event</span> : JooseX.Observable.Event<div class='sub-desc'><p>The event instance</p>\n</div></li><li><span class='pre'>harness</span> : <a href=\"#!/api/Siesta.Harness\" rel=\"Siesta.Harness\" class=\"docClass\">Siesta.Harness</a><div class='sub-desc'><p>The harness that just has ended</p>\n</div></li></ul></div></div></div><div id='event-testsuitestart' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Siesta.Harness' rel='Siesta.Harness' class='defined-in docClass'>Siesta.Harness</a><br/><a href='source/Harness.html#Siesta-Harness-event-testsuitestart' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Siesta.Harness-event-testsuitestart' class='name expandable'>testsuitestart</a>( <span class='pre'>event, harness</span> )</div><div class='description'><div class='short'>This event is fired when the test suite starts. ...</div><div class='long'><p>This event is fired when the test suite starts. Note, that when running the test suite in the browsers, this event can be fired several times\n(for each group of tests you've launched).</p>\n\n<p>You can subscribe to it, using regular ExtJS syntax:</p>\n\n<pre><code> Harness.on('testsuitestart', function (event, harness) {}, scope, { single : true })\n</code></pre>\n\n<p>See also the \"/examples/events\"</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>event</span> : JooseX.Observable.Event<div class='sub-desc'><p>The event instance</p>\n</div></li><li><span class='pre'>harness</span> : <a href=\"#!/api/Siesta.Harness\" rel=\"Siesta.Harness\" class=\"docClass\">Siesta.Harness</a><div class='sub-desc'><p>The harness that just has started</p>\n</div></li></ul></div></div></div></div></div></div></div>"});