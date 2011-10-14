describe 'Key', ->
  it 'has data', ->
    expect(fossil_key.key_data.length).toBe(24)

  describe '.find_statement_pair', ->
    it 'returns a pair of statment data lines', ->
      pair = fossil_key.find_statement_pair 1
      expect(pair.length).toBe(2)

    it 'returns the matching key_pair for the number argument', ->
      pair = fossil_key.find_statement_pair 2
      expect(pair[0].key_pair).toBe(2)
      expect(pair[0].statement).toBe("The top side of the fossil is rounded with ribs")
      expect(pair[0].next_statement_pair).toBe(3)
      expect(pair[1].key_pair).toBe(2)
      expect(pair[1].statement).toBe("The top and bottom of the fossil have ribs and ridges")
      expect(pair[1].next_statement_pair).toBe(5)

  describe '.start', ->
    it 'returns the first question pair', ->
      pair = fossil_key.start()
      expect(pair[0].key_pair).toBe(1)
      expect(pair[0].key_pair).toBe(1)

  describe '.choose_statement', ->
    it 'returns the answer if it has one', ->
      answer = fossil_key.choose_statement("The fossil has large ribs and very slight ridge")
      expect(answer).not.toBeNull()
      expect(answer.answer).toBe("Platystrophia BRACHIOPOD")

    it 'returns the next statement pair if there is no answer', ->
      pair = fossil_key.choose_statement("The fossil is larger than pinky fingernail")
      expect(pair).not.toBeNull()
      expect(pair.length).toBe(2)
      expect(pair[0].key_pair).toBe(6)
      expect(pair[1].key_pair).toBe(6)

    it "returns an error if there is no matching statement", ->
      response = fossil_key.choose_statement("blerg")
      expect(response.error).toBe("no matching statement")
