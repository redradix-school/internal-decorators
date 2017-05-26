function benchmark(target, key, descriptor) {
  const method = descriptor.value
  descriptor.value = function() {
    var start = Date.now()
    const applied = method.apply(this, arguments)
    console.log(`this took ${Date.now() - start } ms`)
    return applied
  };
  return descriptor
}

class Dog {
  constructor(name) {
    this.name = name;
  }

  @benchmark
  bark (text) {
    console.log('Wof, wof!', text);
  }
}


setTimeout(function() {
  var toby = new Dog('toby')
  toby.bark('motherfucker')
}, 1000)
