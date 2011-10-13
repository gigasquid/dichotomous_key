(function() {
  var Key;
  Key = (function() {
    function Key(key_data) {
      this.key_data = key_data;
    }
    Key.prototype.find_question_pair = function(num) {
      var item, pair;
      return pair = (function() {
        var _i, _len, _ref, _results;
        _ref = this.key_data;
        _results = [];
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          item = _ref[_i];
          if (item.key_pair === num) {
            _results.push(item);
          }
        }
        return _results;
      }).call(this);
    };
    return Key;
  })();
  window.fossil_key = new Key(fossils_data);
}).call(this);
