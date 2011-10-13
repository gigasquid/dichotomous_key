describe 'Fossil Key Data', ->
  it "has many records", ->
    size = fossils_data.length
    expect(size).toBe(24)

  it "has a key pair", ->
    first_key = fossils_data[0]
    expect(first_key.key_pair).toBe(1)

  it "has a question", ->
    first_key = fossils_data[0]
    expect(first_key.question).toBe("The fossil resembles a modern day seashell")

  it "can have an answer", ->
    key_with_answer = fossils_data[5]
    expect(key_with_answer.answer).toBe("Dunbarella PELECYPOD")

