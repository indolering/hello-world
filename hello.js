

//test in browser
if (typeof(document) !== 'undefined') {
  window.onload = function() {
    appendHello();
    //document.getElementById('hello').innerText == 'hello world';

    document.title = hello();
    //document.title=="hello world"

    document.hello = hello();

  }
}

//test on console
console.log(hello());

//test as function
(function() {
  return hello();
})();


function hello() {
  return('hello world');
}

function appendHello(id) {
  id = id || 'hello';
  var h = document.createElement("h1");
  h.innerHTML = hello();
  h.id=id;
  document.body.appendChild(h);
}

var $ = function(e) {
  e = e || '#hello';
  return document.querySelectorAll(e);
};