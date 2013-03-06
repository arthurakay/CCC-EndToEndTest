//Assumes the script is run from the module's root
//process.chdir('hooks');

var LintRoller = require('../../../node_modules/LintRoller');

var config = {
    verbose          : false,
    stopOnFirstError : false,

    //recursively include JS files in these folders
    filepaths  : [
        '../../../app/'
    ],

    //but ignore anything in these folders
    exclusions : [
        '../../../app/lib/'
    ],

    linters : [
        {
            type : 'jsLint'
        },
        {
            type : 'jsHint'
        },
        {
            type : 'esprima'
        }
    ]
};

try {
    LintRoller.init(config);
}
catch (e) {
    console.log('\nAn error has been caught:\n\n');
    console.log(e);
    process.exit(1);
}