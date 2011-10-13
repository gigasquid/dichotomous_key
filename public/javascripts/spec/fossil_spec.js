(function() {
  describe('Fossil Key Data', function() {
    it("has many records", function() {
      var size;
      size = fossils_data.length;
      return expect(size).toBe(24);
    });
    it("has a key pair", function() {
      var first_key;
      first_key = fossils_data[0];
      return expect(first_key.key_pair).toBe(1);
    });
    it("has a question", function() {
      var first_key;
      first_key = fossils_data[0];
      return expect(first_key.question).toBe("The fossil resembles a modern day seashell");
    });
    return it("can have an answer", function() {
      var key_with_answer;
      key_with_answer = fossils_data[5];
      return expect(key_with_answer.answer).toBe("Dunbarella PELECYPOD");
    });
  });
}).call(this);
