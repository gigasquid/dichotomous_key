(function() {
  describe('panda', function() {
    return it('is happy', function() {
      console.log(panda);
      return expect(panda).toBe('happy');
    });
  });
  describe('Animal', function() {
    return it('has a name', function() {
      return expect(zebra.name).toBe("Hal");
    });
  });
  describe('Fossil Key', function() {
    it("has many records", function() {
      var size;
      size = fossils_key.length;
      return expect(size).toBe(2);
    });
    it("has a key pair", function() {
      var first_key;
      first_key = fossils_key[0];
      return expect(first_key.key_pair).toBe(1);
    });
    return it("has a question", function() {
      var first_key;
      first_key = fossils_key[0];
      return expect(first_key.question).toBe("The fossil resembles a modern day seashell");
    });
  });
}).call(this);
