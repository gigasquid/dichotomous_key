class Key
  constructor: (key_data) ->
    @key_data = key_data

  find_statement_pair: (num) ->
    item for item in @key_data when item.key_pair == num

  start: () ->
    this.find_statement_pair 1

  choose_statement: (picked_statement_text) ->
    picked_data = (item for item in @key_data when item.statement == picked_statement_text)
    if picked_data? and picked_data.length > 0
      if picked_data[0].specimen?
        picked_data[0].specimen
      else
        this.find_statement_pair picked_data[0].next_statement_pair
    else
      {error: "no matching statement"}


window.fossil_key = new Key(fossils_data)
