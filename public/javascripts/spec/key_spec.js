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
}).call(this);
