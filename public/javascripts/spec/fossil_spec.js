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
    it("has a statement", function() {
      var first_key;
      first_key = fossils_data[0];
      return expect(first_key.statement).toBe("The fossil resembles a modern day seashell");
    });
    return it("can have an specimen", function() {
      var key_with_specimen;
      key_with_specimen = fossils_data[5];
      expect(key_with_specimen.specimen.name).toBe("Dunbarella PELECYPOD");
      expect(key_with_specimen.specimen.photo_image).toBe("test_photo_image");
      expect(key_with_specimen.specimen.drawing_image).toBe("test_drawing_image");
      return expect(key_with_specimen.specimen.description).toBe("This is a test description");
    });
  });
}).call(this);
