Hello World
===========

Extremely powerful javascript function which says 'hello' to the *entire* world!

I was playing around with the 6 or so package managers for Javascript and I was
surprised to find that there was no hello world on NPM, so I wrote this one.

Hello.js will also return "hello world" to the console and return "hell world"
via self-executing function.

If hello.js detects a document object it will append
`<h1 id='hello'>hello world</h1>` to the body, change the title to
"hello world", and add the global var `document.hello` to the body which
contains "hello world".

As a bonus, `$()` will return `#hello` and `$('#id')`, `$('.class')`,
`$('element')` all work as expected.

I couldn't think of any other possible features.

## Hacking
To install qUnit to run the test files cd into `bower_components/hello-world`
and run `bower install`.