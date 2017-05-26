
var slice = Array.prototype.slice
function trace(target, key, descriptor) {
  const method = descriptor.value
  descriptor.value = function() {
    console.log(target, key, slice.call(arguments).join(', '))
    const applied = method.apply(this, arguments)
    console.log(applied)
    return applied
  };
  return descriptor
}

class Dog {
  constructor(name) {
    this.name = name;
  }

  @trace
  bark (text) {
    console.log('Wof, wof!', text);
  }
}


setTimeout(function() {
  var toby = new Dog('toby')
  toby.bark('motherfucker')
}, 1000)
