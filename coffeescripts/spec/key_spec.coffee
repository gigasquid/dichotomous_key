describe 'Key', ->
  it 'has data', ->
    expect(fossil_key.key_data.length).toBe(24)

  describe '.find_question_pair', ->
    it 'returns a pair of question data lines', ->
      pair = fossil_key.find_question_pair 1
      expect(pair.length).toBe(2)

    it 'returns the matching key_pair for the number argument', ->
      pair = fossil_key.find_question_pair 2
      expect(pair[0].key_pair).toBe(2)
      expect(pair[0].question).toBe("The top side of the fossil is rounded with ribs")
      expect(pair[0].next_question_pair).toBe(3)
      expect(pair[1].key_pair).toBe(2)
      expect(pair[1].question).toBe("The top and bottom of the fossil have ribs and ridges")
      expect(pair[1].next_question_pair).toBe(5)



