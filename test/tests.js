//var testrunner = require("qunit");

//testrunner.run({
//  code: '../hello.js',
//  tests: 'commonjs-test.js'
//}, callback);

test("hello()", function() {
  ok(hello() == "hello world", "hello() function");
});

test("document.hello", function() {
  ok(document.hello == "hello world", "document.hello global var");
});

test("innerHTML", function() {
  ok(document.title == 'hello world',
    "title changed");
});

test("innerHTML", function() {
  ok(document.getElementById('hello').innerHTML == 'hello world',
    "document.appendChild() ... ");
});

