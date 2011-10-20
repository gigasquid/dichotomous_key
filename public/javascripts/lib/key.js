(function() {
  var Key;
  Key = (function() {
    function Key(key_data) {
      this.key_data = key_data;
    }
    Key.prototype.find_statement_pair = function(num) {
      var item, _i, _len, _ref, _results;
      _ref = this.key_data;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        item = _ref[_i];
        if (item.key_pair === num) {
          _results.push(item);
        }
      }
      return _results;
    };
    Key.prototype.start = function() {
      return this.find_statement_pair(1);
    };
    Key.prototype.choose_statement = function(picked_statement_text) {
      var item, picked_data;
      picked_data = (function() {
        var _i, _len, _ref, _results;
        _ref = this.key_data;
        _results = [];
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          item = _ref[_i];
          if (item.statement === picked_statement_text) {
            _results.push(item);
          }
        }
        return _results;
      }).call(this);
      if ((picked_data != null) && picked_data.length > 0) {
        if (picked_data[0].specimen != null) {
          return picked_data[0].specimen;
        } else {
          return this.find_statement_pair(picked_data[0].next_statement_pair);
        }
      } else {
        return {
          error: "no matching statement"
        };
      }
    };
    return Key;
  })();
  window.fossil_key = new Key(fossils_data);
}).call(this);
