basePath = '../';

files = [
  JASMINE,
  JASMINE_ADAPTER,
  'app/lib/angular/angular.js',
  //'app/lib/angular/angular-*.js',
  'test/lib/angular/angular-mocks.js',

  'app/js/app.js',
  'app/js/**/*.js',
  'test/unit/**/*.js'
];

autoWatch = true;

browsers = ['Chrome'];

junitReporter = {
  outputFile: 'test_out/unit.xml',
  suite: 'unit'
};

//USE FOR CONTINUOUS INTEGRATION, PRE-COMMIT, Etc...
//It will give you an error code upon exit or 0 if all tests pass
//singleRun = true;