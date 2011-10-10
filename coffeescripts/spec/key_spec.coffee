describe 'panda', ->
  it 'is happy', ->
    console.log(panda)
    expect(panda).toBe('happy')

describe 'Animal', ->
  it 'has a name', ->
    expect(zebra.name).toBe("Hal")

describe 'Fossil Key', ->
  it "has many records", ->
    size = fossils_key.length
    expect(size).toBe(2)

  it "has a key pair", ->
    first_key = fossils_key[0]
    expect(first_key.key_pair).toBe(1)

  it "has a question", ->
    first_key = fossils_key[0]
    expect(first_key.question).toBe("The fossil resembles a modern day seashell")
