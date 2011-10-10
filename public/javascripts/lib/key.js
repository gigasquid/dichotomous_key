(function() {
  var Animal;
  window.panda = "happy";
  Animal = (function() {
    function Animal(name) {
      this.name = name;
    }
    return Animal;
  })();
  window.zebra = new Animal("Hal");
}).call(this);
