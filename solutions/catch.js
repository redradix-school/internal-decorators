var window = {debug: true}

function debug(target, key, descriptor) {
  const method = descriptor.value
  descriptor.value = function() {
    let applied
    try {
      applied = method.apply(this, arguments)
    } catch (e) {
      console.log(e)
      if (window.debug) {
        applied = null
        throw new Error(e)
      } else {
        applied = method.apply(this, arguments)
      }
    }
    return applied
  };
  return descriptor
}

class Dog {
  constructor(name) {
    this.name = name;
  }

  @debug
  bark (text) {
    if (Math.random() < 0.5) throw new Error('How barking worked?')
    console.log('Wof, wof!', text);
  }
}


setTimeout(function() {
  var toby = new Dog('toby')
  toby.bark('motherfucker')
}, 1000)
