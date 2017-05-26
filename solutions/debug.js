var window = {debug: false}

function debug(target, key, descriptor) {
  const method = descriptor.value
  descriptor.value = function() {
    return window.debug? method.apply(this, arguments) : null
  };
  return descriptor
}

class Dog {
  constructor(name) {
    this.name = name;
  }

  @debug
  bark (text) {
    console.log('Wof, wof!', text);
  }
}


setTimeout(function() {
  var toby = new Dog('toby')
  toby.bark('motherfucker')
}, 1000)
