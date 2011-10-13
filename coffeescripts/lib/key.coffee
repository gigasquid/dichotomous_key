class Key
  constructor: (key_data) ->
    @key_data = key_data

  find_question_pair: (num) ->
    pair = (item for item in @key_data when item.key_pair == num)


window.fossil_key = new Key(fossils_data)
